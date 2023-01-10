function GetPrimaryList {
		
    $primaryList = @(
        [pscustomobject]@{ Text = 'BOLIVIA'; Value = 'https://quo30.belcorp.biz' }
        [pscustomobject]@{ Text = 'CHILE'; Value = 'https://quo32.belcorp.biz' }
        [pscustomobject]@{ Text = 'COLOMBIA'; Value = 'https://quo07.belcorp.biz' }
        [pscustomobject]@{ Text = 'DOMINICANA'; Value = 'https://quo40.belcorp.biz' }
        [pscustomobject]@{ Text = 'ECUADOR'; Value = 'https://quo34.belcorp.biz' }
        [pscustomobject]@{ Text = 'EL SALVADOR'; Value = 'https://quo35.belcorp.biz' }
        [pscustomobject]@{ Text = 'MEXICO'; Value = 'https://quo37.belcorp.biz' }
        [pscustomobject]@{ Text = 'PANAMA'; Value = 'https://quo38.belcorp.biz' }
        [pscustomobject]@{ Text = 'PERU'; Value = 'https://quo06.belcorp.biz' }
    )	
	
    return $primaryList | ConvertTo-Json
}

function Execute {
	
    Param(
        [Parameter(Mandatory = $true)]
        [String]
        $Value
    )
	
    Connect-FortiClientVPN -ServerConnection $Value
}

function Connect-FortiClientVPN {
    [CmdletBinding()]
    param
    (
        [PSCustomObject]
        $Result,
        
        [Parameter(Mandatory = $true)]
        [String]
        $ServerConnection
    )

    begin {
        $Result = [PSCustomObject]@{
            Status  = $True
            Message = [string]::empty
        }
    }

    process {
        try {
            $NameAgent = "SamyHelp"
            $Path = "C:\$NameAgent" # Path to FortiClient Tools
            $UrlFortiClientTool = "https://recursos.intergrupo.com/RAULAgent/FortiClientTools_6.0.9.0277/SSLVPNcmdline/FortiSSLVPNclient.exe"
			$UrlMfc140 = "https://recursos.intergrupo.com/RAULAgent/FortiClientTools_6.0.9.0277/SSLVPNcmdline/mfc140.dll"
			$UrlMsvcp140 = "https://recursos.intergrupo.com/RAULAgent/FortiClientTools_6.0.9.0277/SSLVPNcmdline/msvcp140.dll"
			$UrlVcruntime140 = "https://recursos.intergrupo.com/RAULAgent/FortiClientTools_6.0.9.0277/SSLVPNcmdline/vcruntime140.dll"
            
            If (!(test-path $path)) {
                New-Item -Path "c:\" -Name "$NameAgent" -ItemType "directory"    
                Invoke-WebRequest -Uri "$UrlFortiClientTool" -OutFile "C:\$NameAgent\FortiSSLVPNclient.exe" -ErrorAction:SilentlyContinue -WarningAction:SilentlyContinue -InformationAction:SilentlyContinue | Out-Null
				Invoke-WebRequest -Uri "$UrlMfc140" -OutFile "C:\$NameAgent\mfc140.dll" -ErrorAction:SilentlyContinue -WarningAction:SilentlyContinue -InformationAction:SilentlyContinue | Out-Null
				Invoke-WebRequest -Uri "$UrlMsvcp140" -OutFile "C:\$NameAgent\msvcp140.dll" -ErrorAction:SilentlyContinue -WarningAction:SilentlyContinue -InformationAction:SilentlyContinue | Out-Null
				Invoke-WebRequest -Uri "$UrlVcruntime140" -OutFile "C:\$NameAgent\vcruntime140.dll" -ErrorAction:SilentlyContinue -WarningAction:SilentlyContinue -InformationAction:SilentlyContinu
			}

            Set-Location $Path
            $Port = "443/sso" # Port fortinet

            Start-Sleep -Seconds 1

            # Connect
            .\FortiSSLVPNclient.exe connect -h "$ServerConnection`:$Port" -i -q -m
            $Result.Message = "Conexión a VPN establecida."
           
        }
        catch {
            $Result.Status = $False
            $Result.Message = $_.Exception.Message
        }
    }

    end {
        return $Result | ConvertTo-Json
    }
}   

%FUNCTION%
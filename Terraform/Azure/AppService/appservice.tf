resource "azurerm_resource_group" "rg" {
  location = "East US"
  name     = "MyPruebasVM"
}

resource "azurerm_app_service_plan" "serviceplanprueba1" {
  name                = "appserviceplanpoc"
  location            = "East US"
  resource_group_name = "MyPruebasVM"

  sku {
    tier = "Free"
    size = "f1"
  }
}

resource "azurerm_app_service" "appserviceprueba1" {
  name                = "iisazure"
  location            = "East US"
  resource_group_name = "MyPruebasVM"
  app_service_plan_id = azurerm_app_service_plan.serviceplanprueba1.id

  site_config {
    dotnet_framework_version = "v4.0"
    scm_type                 = "LocalGit"
  }

  app_settings = {
    "SOME_KEY" = "some-value"
  }

  connection_string {
    name  = "Database"
    type  = "SQLServer"
    value = "Server=some-server.mydomain.com;Integrated Security=SSPI"
  }
}
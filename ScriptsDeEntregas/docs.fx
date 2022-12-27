Set(cargando,true);
//Inicio If 1
//Condicion
If(IsBlank(documentacion) || IsBlank(TextInput2.Text), 
    //Si 1
   Set(cargando,false);
   Notify("Debe ingresar el usuario afectado o debe generar la documentación",NotificationType.Warning),
    //Else 1
   Set(validar,FlujoValidarUsuarioRedLD.Run(UsuarioCredencial,ContraseniaCredencial,TextInput2.Text));

    //Inicio If 2
    If(validar.estado="200",
        //Si 2
        Set(Descripcion,TextInput1.Text);
        If(Radio1.SelectedText.Value = "Funciona",Set(Solucion,Descripcion),Set(Solucion,"null")); 
        Set(Tipo,Label4.Text);
        Set(documentacion,TextInput1.Text);
        Set(UsuarioRed,TextInput2.Text);
        Set(Analista,UsuarioCredencial);
        Set(categoria,LookUp(listaTipoCaso,Concatenate(ItemConfiguracion, Categoria) = Concatenate(ddl_ItemConf.SelectedText.Value,ddl_Categoria.SelectedText.Value)).'Categoria Actual Jira');
        Set(Titulo,Concatenate("AMU ",ddl_ItemConf.SelectedText.Value," - ",ddl_Categoria.SelectedText.Value));

        If(categoria="Infraestructurayservcios/gestiondeaccesos/desbloqueodecuenta",
            Set(servicionegocio,"12800");        
            Set(componenteservicio,"12801");
            Set(Sintoma,"12802")
            );

        If(categoria="softwarebasico/software/desinstalacion",
            Set(servicionegocio,"10836");
            Set(componenteservicio,"10865");
            Set(Sintoma,"11098")
            );

        If(categoria="Softwarebasico/software/falladeacceso",
            Set(servicionegocio,"10836");        
            Set(componenteservicio,"10865");
            Set(Sintoma,"10916")
            );
        
        If(categoria="Softwarebasico/software/errordejecucion",
            Set(servicionegocio,"10836");        
            Set(componenteservicio,"10865");
            Set(Sintoma,"10907")
            );

        If(categoria="Serviciosdeinfraesctructura/solicitudesinternas/informativa",
            Set(servicionegocio,"10834");        
            Set(componenteservicio,"10867");
            Set(Sintoma,"11808")
            );

        If(categoria="Softwareespecializado/software/errordeejecucion",
            Set(servicionegocio,"10837");        
            Set(componenteservicio,"10865");
            Set(Sintoma,"10907")
            );

        Set(Creado,CrearCasoLD.Run(documentacion,Tipo,Titulo,TextInput2.Text,UsuarioCredencial,componenteservicio,Sintoma,servicionegocio,"lineaDirecta",UsuarioCredencial,ContraseniaCredencial,Solucion).casocreado);
        Set(IdDeCaso, true);
        Set(cargando,false);
        //Inicio if 3
        If(Creado = "No se creó",
            // Si 3
            Notify("Caso no creado revise los valores o contacte con el administrador",NotificationType.Error),
            // else 3
            Notify("Caso creado con exito",NotificationType.Success);

        ); 
        , //Else 2       
        Set(IdDeCaso, false);
        Set(cargando,false);
        Notify("verifique que el usuario ingresado sea valido",NotificationType.Error)       
    )     
); //Fin if 1
Reset(TextInput2);
Clear(ChecklistSeleccion);
Set(documentacion,"");
Reset(Radio1);
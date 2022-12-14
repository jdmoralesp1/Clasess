Set(cargando,true);
If(IsBlank(documentacion) || IsBlank(TextInput2.Text),
   Set(cargando,false);
   Notify("Debe ingresar el usuario afectado o debe generar la documentación",NotificationType.Warning),
   Set(validar,FlujoValidarUsuarioRedLD.Run(UsuarioCredencial,ContraseniaCredencial,TextInput2.Text));

  

    If(validar.estado="200",
        Set(Descripcion,TextInput1.Text);
        If(Radio1.SelectedText.Value = "Funciona",Set(Solucion,Descripcion),Set(Solucion,"null")); 
        Set(Tipo,Label4.Text);
        Set(documentacion,TextInput1.Text);
        Set(UsuarioRed,TextInput2.Text);
        Set(Analista,UsuarioCredencial);
        Set(categoria,LookUp(listaTipoCaso,Concatenate(ItemConfiguracion, Categoria) = Concatenate(ddl_ItemConf.SelectedText.Value,ddl_Categoria.SelectedText.Value)).'Categoria Actual Jira');

        If(categoria="Infraestructurayservcios/gestiondeaccesos/desbloqueodecuenta",Set(servicionegocio,"12800");        Set(componenteservicio,"12801");Set(Sintoma,"12802"));

        If(categoria="softwarebasico/software/desconfiguracion",Set(servicionegocio,"10836");Set              (componenteservicio,"10865");Set(Sintoma,"10898"));

        If(categoria="Softwarebasico/software/falladeacceso",Set(servicionegocio,"10836");        Set   (componenteservicio,"10865");Set(Sintoma,"10916"));
        
        If(categoria="Softwarebasico/software/errordejecucion",Set(servicionegocio,"10836");        Set(componenteservicio,"10865");Set(Sintoma,"10907"));

        If(categoria="Serviciosdeinfraesctructura/solicitudesinternas/informativa",Set(servicionegocio,"10834");        Set(componenteservicio,"10867");Set(Sintoma,"11808"));

        If(categoria="Softwareespecializado/software/errordeejecucion",Set(servicionegocio,"10837");        Set(componenteservicio,"10865");Set(Sintoma,"10907"));




        Set(Creado,CrearCasoLD.Run(documentacion,Tipo,documentacion,TextInput2.Text,UsuarioCredencial,componenteservicio,Sintoma,servicionegocio,"lineaDirecta",UsuarioCredencial,ContraseniaCredencial,Solucion).casocreado);
        Set(cargando,false);
        Notify("Caso creado con exito",NotificationType.Success),
        Set(cargando,false);
        Notify("verifique que el usuario ingresado sea valido",NotificationType.Error)       
    )     
);
Reset(TextInput2);
Clear(ChecklistSeleccion);
Set(documentacion,"");
Reset(Radio1)



Set(cargando,true);
If(IsBlank(documentacion) || IsBlank(TextInput2.Text),
   Set(cargando,false);
   Notify("Debe ingresar el usuario afectado o debe generar la documentación",NotificationType.Warning),
   Set(validar,ValidarUsuarioRedPRUEBA.Run(UsuarioCredencial,ContraseniaCredencial,TextInput2.Text));

  

    If(validar.estado="200",
        Set(Descripcion,TextInput1.Text);
        If(Radio1.SelectedText.Value = "Funciona",Set(Solucion,Descripcion),Set(Solucion,"null")); 
        Set(Tipo,Label4.Text);
        Set(documentacion,Concatenate("AMU ",ddl_ItemConf.SelectedText.Value," ", ddl_Categoria.SelectedText.Value));
        Set(UsuarioRed,TextInput2.Text);
        Set(Analista,UsuarioCredencial);
        Set(categoria,LookUp(listaTipoCaso,Concatenate(ItemConfiguracion, Categoria) = Concatenate(ddl_ItemConf.SelectedText.Value,ddl_Categoria.SelectedText.Value)).'Categoria Actual Jira');



        CrearCasoPRUEBA.Run(Descripcion,Tipo,documentacion,TextInput2.Text,UsuarioCredencial,Descripcion,Descripcion,categoria,"Belcorp",UsuarioCredencial,ContraseniaCredencial,Solucion);
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




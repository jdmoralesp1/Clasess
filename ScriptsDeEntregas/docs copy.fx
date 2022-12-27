
ClearCollect(ChecklistTotal,AMU_LD_List1);
ClearCollect(ChecklistSeleccion,Filter(ChecklistTotal, Concatenate(ddl_ItemConf.SelectedText.Value,ddl_Categoria.SelectedText.Value) in Concatenate(ItemConfiguracion, Categoria)));
// El "listaTipoCaso" se crea en el ScreenDocumentacionCasos en la parte de Onvisible y dice "ClearCollect(listaTipoCaso, AMU_LD_List2)" por lo que lo que esta en la lista se guarda en esa colección
Set(tipoCaso, LookUp(listaTipoCaso,Concatenate(Title, Categoria) = Concatenate(ddl_ItemConf.SelectedText.Value,ddl_Categoria.SelectedText.Value)));
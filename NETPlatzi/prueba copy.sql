SELECT "ASDK_ITEM_DW_LAST"."id_by_project" AS "Nro. Ticket",
        "asms_projects"."proj_name" AS "Proyecto",
        "TIPO DE CASO"."name" AS "Tipo de caso",
        "ESTADO"."stat_name" AS "Estado",
        "ASMS_STATUS_REASON"."reas_description" AS "UltimaNota",
        "ASDK_ITEM_DW_LAST"."opened_date" AS "FechaApertura",
        "ASDK_ITEM_DW_LAST"."closed_date" AS "Fecha Cierre",
        "ASDK_ITEM_DW_LAST"."modified_date" AS "Fecha modificación",
        "ASDK_ITEM_DW_LAST"."subject" AS "Asunto",
        "AFW_USERS"."user_name" AS "UsuarioAfectado",
        "ASMS_COMPANY"."Name" AS "Compania",
        "CMDB_CI"."name" AS "ElementoConfiguracion",
        "AFW_GROUPS"."grou_name" AS "GrupoEspecialista",
        "ASDK_ITEM_DW_LAST"."estimated_time" AS "Tiempo",
        "ASDK_ITEM_DW_LAST"."current_progress" AS "Progreso",
        "AFW_CATALOG_CODE"."code_value" as "MedioIngreso",
        "ASDK_SLA"."NAME" AS "SLA",
        "RESPONSIBLE"."user_name" as "Responsable",
        "AUTOR"."user_name" as "SolicitadoPor",
        "ASDK_CATEGORY"."ctg_caption" as "Categoria",
        "IMPACT"."code_value" as "Impacto",
        "PRIORITY"."code_value" as "Prioridad",
        "URGENCY"."code_value" as "Urgencia",
        "SERVICE"."name" AS "SERVICIO"
        
        
FROM  "dbo"."ASDK_ITEM_DW_LAST"  "ASDK_ITEM_DW_LAST"
        INNER JOIN  "dbo"."ASMS_PROJECTS" "ASMS_PROJECTS"  ON  "asms_projects"."proj_id" = "ASDK_ITEM_DW_LAST"."project_id"
        LEFT JOIN  "dbo"."ASMS_TYPES" "TIPO DE CASO"       ON  "TIPO DE CASO"."id" = "ASDK_ITEM_DW_LAST"."type_id"
        LEFT JOIN  "dbo"."ASMS_STATUS" "ESTADO"            ON  "ESTADO"."stat_id" = "ASDK_ITEM_DW_LAST"."state_id"
        LEFT JOIN "dbo"."ASMS_STATUS_REASON" "ASMS_STATUS_REASON"     ON "ASMS_STATUS_REASON"."reas_id" = "ASDK_ITEM_DW_LAST"."reason_id"
        LEFT JOIN "dbo"."AFW_USERS" "AFW_USERS"          ON "AFW_USERS"."user_id" = "ASDK_ITEM_DW_LAST"."customer_id"
        LEFT JOIN "dbo"."ASMS_COMPANY" "ASMS_COMPANY" ON "ASMS_COMPANY"."Id" = "ASDK_ITEM_DW_LAST"."company_id"
        LEFT JOIN "dbo"."CMDB_CI" "CMDB_CI" ON "CMDB_CI"."id" = "ASDK_ITEM_DW_LAST"."ci_id"
        LEFT JOIN "dbo"."AFW_GROUPS" "AFW_GROUPS" ON "AFW_GROUPS"."grou_id" = "ASDK_ITEM_DW_LAST"."group_id"
        LEFT JOIN "dbo"."AFW_CATALOG_CODE" "AFW_CATALOG_CODE" ON "AFW_CATALOG_CODE"."code_id" = "ASDK_ITEM_DW_LAST"."registry_type_id"
        LEFT JOIN "dbo"."ASDK_SLA" "ASDK_SLA" ON "ASDK_SLA"."SLA_ID" = "ASDK_ITEM_DW_LAST"."sla_id"
        LEFT JOIN "dbo"."AFW_USERS" "RESPONSIBLE" ON "RESPONSIBLE"."user_id" = "ASDK_ITEM_DW_LAST"."responsible_id"
        LEFT JOIN "dbo"."AFW_USERS" "AUTOR" ON "AUTOR"."user_id" = "ASDK_ITEM_DW_LAST"."author_id"
        LEFT JOIN "dbo"."ASDK_CATEGORY" "ASDK_CATEGORY" ON "ASDK_CATEGORY"."ctg_index" = "ASDK_ITEM_DW_LAST"."category_id"
        LEFT JOIN "dbo"."AFW_CATALOG_CODE" "IMPACT" ON "IMPACT"."code_id" = "ASDK_ITEM_DW_LAST"."impact_id"
        LEFT JOIN"dbo"."AFW_CATALOG_CODE" "PRIORITY" ON "PRIORITY"."code_id" = "ASDK_ITEM_DW_LAST"."priority_id"
        LEFT JOIN "dbo"."AFW_CATALOG_CODE" "URGENCY" ON "URGENCY"."code_id" = "ASDK_ITEM_DW_LAST"."urgency_id"
        LEFT JOIN "dbo"."ASDK_SERVICE" "SERVICE" ON "SERVICE"."id" = "ASDK_ITEM_DW_LAST"."service_id"
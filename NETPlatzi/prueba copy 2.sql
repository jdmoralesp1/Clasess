SELECT "A"."id_by_project" ,"F"."name"
FROM  "dbo"."ASDK_ITEM_DW_LAST"  "A", "dbo"."ASMS_FIELDS" "F", "dbo"."ASMS_MODEL" "M"
WHERE "A"."model_id" = "M"."id" and "F"."model_id" = "M"."id" and "A"."model_id" = "F"."model_id"
        
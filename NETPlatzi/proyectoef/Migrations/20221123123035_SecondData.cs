using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace proyectoef.Migrations
{
    public partial class SecondData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Categoria",
                keyColumn: "CategoriaId",
                keyValue: new Guid("6528c7a6-39d4-46df-bebf-91c2bcf9d902"),
                column: "Nombre",
                value: "Actividades personales");

            migrationBuilder.InsertData(
                table: "Categoria",
                columns: new[] { "CategoriaId", "Descripcion", "Nombre", "Peso" },
                values: new object[] { new Guid("6528c7a6-39d4-46df-bebf-91c2bcf9d929"), null, "Actividades laborales", 35 });

            migrationBuilder.UpdateData(
                table: "Tarea",
                keyColumn: "TareaId",
                keyValue: new Guid("6528c7a6-39d4-46df-bebf-91c2bcf9d910"),
                column: "FechaCreacion",
                value: new DateTime(2022, 11, 23, 7, 30, 35, 195, DateTimeKind.Local).AddTicks(2557));

            migrationBuilder.UpdateData(
                table: "Tarea",
                keyColumn: "TareaId",
                keyValue: new Guid("6528c7a6-39d4-46df-bebf-91c2bcf9d911"),
                column: "FechaCreacion",
                value: new DateTime(2022, 11, 23, 7, 30, 35, 195, DateTimeKind.Local).AddTicks(2576));

            migrationBuilder.InsertData(
                table: "Tarea",
                columns: new[] { "TareaId", "CategoriaId", "Descripcion", "FechaCreacion", "PrioridadTarea", "Titulo" },
                values: new object[] { new Guid("6528c7a6-39d4-46df-bebf-91c2bcf9d912"), new Guid("6528c7a6-39d4-46df-bebf-91c2bcf9d929"), null, new DateTime(2022, 11, 23, 7, 30, 35, 195, DateTimeKind.Local).AddTicks(2579), 2, "Finalizar curso .Net" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Tarea",
                keyColumn: "TareaId",
                keyValue: new Guid("6528c7a6-39d4-46df-bebf-91c2bcf9d912"));

            migrationBuilder.DeleteData(
                table: "Categoria",
                keyColumn: "CategoriaId",
                keyValue: new Guid("6528c7a6-39d4-46df-bebf-91c2bcf9d929"));

            migrationBuilder.UpdateData(
                table: "Categoria",
                keyColumn: "CategoriaId",
                keyValue: new Guid("6528c7a6-39d4-46df-bebf-91c2bcf9d902"),
                column: "Nombre",
                value: "Actividades Personales");

            migrationBuilder.UpdateData(
                table: "Tarea",
                keyColumn: "TareaId",
                keyValue: new Guid("6528c7a6-39d4-46df-bebf-91c2bcf9d910"),
                column: "FechaCreacion",
                value: new DateTime(2022, 11, 23, 7, 20, 28, 635, DateTimeKind.Local).AddTicks(7962));

            migrationBuilder.UpdateData(
                table: "Tarea",
                keyColumn: "TareaId",
                keyValue: new Guid("6528c7a6-39d4-46df-bebf-91c2bcf9d911"),
                column: "FechaCreacion",
                value: new DateTime(2022, 11, 23, 7, 20, 28, 635, DateTimeKind.Local).AddTicks(7993));
        }
    }
}

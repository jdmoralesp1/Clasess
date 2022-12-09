using APIPrueba.Validaciones;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace APIPrueba.Entidades
{
    // Heredo de IValidatableObject para poder hacer validaciones personalizadas del modelo total y lo puedo usar
    // dentro de la misma clase, cuando lo hago para un atributo solamente lo hago a traves de otra clase, en este ejemplo
    // como el que se creo en Validaciones/PrimeraLetraMayusculaAttribute.cs
    public class Genero: IValidatableObject
    {
        public int Id { get; set; }

        // Estas son las reglas de validación, ejemplo que l nombre sea requerido y no mayor a 10
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [StringLength(maximumLength:10)]
        //[PrimeraLetraMayuscula]
        public string Nombre { get; set; }


        [Range(18, 120)]
        public int Edad { get; set; }

        [CreditCard]
        public string TarjetaDeCredito { get; set; }

        [Url]
        public string URL { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (!string.IsNullOrEmpty(Nombre))
            {
                var primeraLetra = Nombre[0].ToString();
                if(primeraLetra != primeraLetra.ToUpper())
                {
                    //yield es para insertar un elemento al IEnumerable
                    yield return new ValidationResult("La primera letra debe ser Mayusucla", // envio el error y se lo asigno a la propiedad Nombre
                        new string[] { nameof(Nombre) });
                }
            }
        }
    }
}

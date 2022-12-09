using System.ComponentModel.DataAnnotations;

namespace APIPrueba.Validaciones
{
    // Para poder usar la clase como atributo de validación, heredamos de ValidationAttribute
    public class PrimeraLetraMayusculaAttribute: ValidationAttribute
    {
        //Sobreescribimos el método IsValid
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            // Con esto ignoro la regla de validación si el atributo (value) es nulo ya que eso ya lo valida
            // el Required
            if(value == null || string.IsNullOrEmpty(value.ToString()))
            {
                return ValidationResult.Success;
            }

            // Extraigo la primera letra
            var primeraLetra = value.ToString()[0].ToString();

            // si la primera letra es diferente de Mayuscula
            if(primeraLetra != primeraLetra.ToUpper())
            {
                // Retorno el error
                return new ValidationResult("La primera Letra debe ser mayusucla");
            }
            // si no retorno 
            return ValidationResult.Success;
        }
    }
}

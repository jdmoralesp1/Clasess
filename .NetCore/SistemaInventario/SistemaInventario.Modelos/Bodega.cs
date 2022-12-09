using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SistemaInventario.Modelos
{
    public class Bodega
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        [Display(Name ="Nombre")] //Es el nombre con el cual va a ser accedida por las vistas
        public string Nombre { get; set; }

        [Required]
        [MaxLength(100)]
        [Display(Name = "Descripcion")]
        public string Descripcion { get; set; }

        [Required]
        public bool Estado { get; set; }
    }
}

namespace ControlTravelWeb.Models
{
    public class Categoria
    {
        public int Id { get; set; }
        public Unidad? Unidad { get; set; }
        public int? UnidadId { get; set; }
        public string? Nombre { get; set; }
        public string? Titulo { get; set; }
        public string? SubTitulo { get; set; }
        public string? UrlImg1 { get; set; }
        public string? UrlImg2 { get; set; }
        public string? UrlImg3 { get; set; }
        public string? UrlImg4 { get; set; }
    }
}

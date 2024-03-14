using static System.Runtime.InteropServices.JavaScript.JSType;

namespace AngularProjectServer
{
  public class Recipe
  {


    public int RecipeId { get; set; }

    public string RecipeName { get; set; }

    public int CategoryId { get; set; }

    public int PreparationTimeInMinutes { get; set; }

    public int DifficultyLevel { get; set; }

    public DateTime CreationDate { get; set; }

    public List<string> Ingredients { get; set; }

    public List<string> PreparationSteps { get; set; }

    public int UserId { get; set; }

    public string ImageUrl { get; set; }
  }
}

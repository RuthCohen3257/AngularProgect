using AngularProjectServer;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularProjectServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {

        public static List<Recipe> recipes = new List<Recipe>
        {

     new Recipe
      {
        RecipeId = 0,
        RecipeName = "Chocolate Cake",
        CategoryId = 4,
        PreparationTimeInMinutes = 15,
        DifficultyLevel = 5,
        CreationDate = DateTime.Now,
        Ingredients = new List<string> {
          "375 grams of flour",
         "12 grams of baking powder (1 tablespoon)",
         "½ teaspoon of salt",
         "110 grams of soft butter (at room temperature)",
         "105 grams of canola oil",
         "300 grams of sugar",
         "Large eggs (at room temperature)",
         "1 tablespoon vanilla extract",
         "280 grams of satiety (at room temperature)"
      },
        PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes" },
        UserId = 1,
        ImageUrl = "/assets/recipe-images/11.jpg"
      },
     new Recipe
     {
         RecipeId = 1,
         RecipeName = "Vanilla & honey dessert",
         CategoryId = 2,
         PreparationTimeInMinutes = 45,
         DifficultyLevel = 3,
         CreationDate = DateTime.Now,
         Ingredients = new List<string>{"375 grams of flour",
         "12 grams of baking powder (1 tablespoon)",
         "½ teaspoon of salt",
         "110 grams of soft butter (at room temperature)",
         "105 grams of canola oil",
         "300 grams of sugar",
         "Large eggs (at room temperature)",
         "1 tablespoon vanilla extract",
         "280 grams of satiety (at room temperature)"    },
         PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes" },
         UserId = 1,
         ImageUrl = "/assets/recipe-images/12.jpg"
     },
     new Recipe
     {
         RecipeId = 2,
         RecipeName = "Cherry chocolate mousse",
         CategoryId = 2,
         PreparationTimeInMinutes = 45,
         DifficultyLevel = 3,
         CreationDate = DateTime.Now,
         Ingredients = new List<string> {
"375 grams of flour",
         "12 grams of baking powder (1 tablespoon)",
         "½ teaspoon of salt",
         "110 grams of soft butter (at room temperature)",
         "105 grams of canola oil",
         "300 grams of sugar",
         "Large eggs (at room temperature)",
         "1 tablespoon vanilla extract",
         "280 grams of satiety (at room temperature)"    },
         PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes" },
         UserId = 1,
         ImageUrl = "/assets/recipe-images/13.jpg"
     },
     new Recipe
     {
         RecipeId = 3,
         RecipeName = "Vanilla praline dessert",
         CategoryId = 1,
         PreparationTimeInMinutes = 65,
         DifficultyLevel = 2,
         CreationDate = DateTime.Now,
         Ingredients = new List<string> {
"375 grams of flour",
         "12 grams of baking powder (1 tablespoon)",
         "½ teaspoon of salt",
         "105 grams of canola oil",
         "300 grams of sugar",
         "Large eggs (at room temperature)",
         "1 tablespoon vanilla extract",
         "280 grams of satiety (at room temperature)"    },
         PreparationSteps = new List<string> {"Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes"},
         UserId = 1,
         ImageUrl = "/assets/recipe-images/14.jpg"
     },
  

     new Recipe {
        RecipeId = 4,
        RecipeName = "Salted caramel cookies",
        CategoryId = 2,
        PreparationTimeInMinutes = 30,
        DifficultyLevel = 5,
         Ingredients = new List<string> { "Flour", "Sugar", "Cocoa Powder", "Eggs", "Milk" },
        PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes" },
        UserId = 2,
        ImageUrl = "/assets/recipe-images/4.jpg"
      },
     new Recipe
      {
        RecipeId =5,
        RecipeName = "Cheese delicacy",
        CategoryId = 1,
        PreparationTimeInMinutes = 25,
        DifficultyLevel = 2,
        CreationDate = DateTime.Now,
        Ingredients = new List<string> { "Spaghetti", "Eggs", "Bacon", "Parmesan Cheese", "Garlic", "Salt", "Pepper" },
        PreparationSteps = new List<string> {
"Heating the oven to 175°C",
        "Lightly grease the three baking pans and line the bottom with baking paper",
        "Mix flour, baking powder and salt in a medium bowl and keep aside",
        "Beat soft butter, oil and sugar in the mixer bowl until you get a smooth cream",
        "Add eggs gradually and beat until incorporated",
        "Add vanilla extract and mix",
        "Add a third of the powder mixture into the batter and mix gently",
        "Add half of the saturation and mix, add the second third and mix" ,
          " finally add the rest of the saturation and mix until the batter is uniform",
        "Divide the batter into 3 bowls and add other colors to each bowl",
        "Pour each portion into a baking dish and bake for about 17-18 minutes",
        "Cool and remove from the mold before assembling"        },
        UserId = 1,
        ImageUrl = "/assets/recipe-images/5.jpg"
      },
     new Recipe
      {
        RecipeId = 6,
        RecipeName = "'Milfay' cream  cheese",
        CategoryId = 4,
        PreparationTimeInMinutes = 45,
        DifficultyLevel = 2,
        CreationDate = DateTime.Now,
        Ingredients = new List<string>
    {"375 grams of flour",
         "12 grams of baking powder (1 tablespoon)",
         "½ teaspoon of salt",
         "110 grams of soft butter (at room temperature)",
         "105 grams of canola oil",
         "300 grams of sugar",
         "Large eggs (at room temperature)",
         "1 tablespoon vanilla extract",
         "280 grams of satiety (at room temperature)"
    },
        PreparationSteps = new List<string>
    {
"Heating the oven to 175°C",
        "Lightly grease the three baking pans and line the bottom with baking paper",
        "Mix flour, baking powder and salt in a medium bowl and keep aside",
        "Beat soft butter, oil and sugar in the mixer bowl until you get a smooth cream",
        "Add eggs gradually and beat until incorporated",
        "Add vanilla extract and mix",
        "Add a third of the powder mixture into the batter and mix gently",
        "Add half of the saturation and mix, add the second third and mix" ,
          " finally add the rest of the saturation and mix until the batter is uniform",
        "Divide the batter into 3 bowls and add other colors to each bowl",
        "Pour each portion into a baking dish and bake for about 17-18 minutes",
        "Cool and remove from the mold before assembling"
    },
        UserId = 2,
        ImageUrl = "/assets/recipe-images/6.jpg"


      },
     new Recipe
{
    RecipeId = 7,
    RecipeName = "Cheese apple tart",
    CategoryId = 1,
    PreparationTimeInMinutes = 45,
    DifficultyLevel = 2,
    CreationDate = DateTime.Now,
    Ingredients = new List<string>
    {
"375 grams of flour",
         "12 grams of baking powder (1 tablespoon)",
         "½ teaspoon of salt",
         "110 grams of soft butter (at room temperature)",
         "105 grams of canola oil",
         "300 grams of sugar",
         "Large eggs (at room temperature)",
         "1 tablespoon vanilla extract",
         "280 grams of satiety (at room temperature)"
    },
    PreparationSteps = new List<string>
    {
 "Heating the oven to 175°C",
        "Lightly grease the three baking pans and line the bottom with baking paper",
        "Mix flour, baking powder and salt in a medium bowl and keep aside",
        "Beat soft butter, oil and sugar in the mixer bowl until you get a smooth cream",
        "Add eggs gradually and beat until incorporated",
        "Add vanilla extract and mix",
        "Add a third of the powder mixture into the batter and mix gently",
        "Add half of the saturation and mix, add the second third and mix" ,
          " finally add the rest of the saturation and mix until the batter is uniform",
        "Divide the batter into 3 bowls and add other colors to each bowl",
        "Pour each portion into a baking dish and bake for about 17-18 minutes",
        "Cool and remove from the mold before assembling"
    },
    UserId = 2,
        ImageUrl = "/assets/recipe-images/7.jpg"
},
     new Recipe
{
    RecipeId = 8,
    RecipeName = "Yeast roses",
    CategoryId = 3,
    PreparationTimeInMinutes = 15,
    DifficultyLevel = 5,
    CreationDate = DateTime.Now,
    Ingredients = new List<string> {
    "375 grams of flour",
         "12 grams of baking powder (1 tablespoon)",
         "½ teaspoon of salt",
         "110 grams of soft butter (at room temperature)",
         "105 grams of canola oil",
         "300 grams of sugar",
         "Large eggs (at room temperature)",
         "1 tablespoon vanilla extract",
         "280 grams of satiety (at room temperature)"},
    PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes" },
    UserId = 1,
        ImageUrl = "/assets/recipe-images/8.jpg"
},
     new Recipe
{
    RecipeId = 9,
    RecipeName = "Chocolate nougat roll",
    CategoryId = 4,
    PreparationTimeInMinutes = 100,
    DifficultyLevel = 4,
    CreationDate = DateTime.Now,
    Ingredients = new List<string> {
"flour", "sugar", "cocoa powder", "eggs", "milk"    },
    PreparationSteps = new List<string> {
"Preheat the oven to 350 degrees Fahrenheit", "Mix the dry ingredients", "Add the wet ingredients", "Bake for 30 minutes"    },
    UserId = 1,
        ImageUrl = "/assets/recipe-images/9.jpg"
},
     new Recipe
{
    RecipeId = 10,
    RecipeName = "Chocolate pie",
    CategoryId = 2,
    PreparationTimeInMinutes = 20,
    DifficultyLevel = 5,
    CreationDate = DateTime.Now,
    Ingredients = new List<string> {
"375 grams of flour",
         "12 grams of baking powder (1 tablespoon)",
         "½ teaspoon of salt",
         "110 grams of soft butter (at room temperature)",
         "105 grams of canola oil",
         "300 grams of sugar",
         "Large eggs (at room temperature)",
         "1 tablespoon vanilla extract",
         "280 grams of satiety (at room temperature)"    },
    PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes"},
    UserId = 2,
        ImageUrl = "/assets/recipe-images/10.jpg"
     },
             new Recipe {
        RecipeId =11,
        RecipeName = "Pistachio patty",
        CategoryId = 2,
        PreparationTimeInMinutes = 45,
        DifficultyLevel = 5,
        CreationDate = DateTime.Now,
        Ingredients = new List<string> { "Flour", "Sugar", "Cocoa Powder", "Eggs", "Milk" },
        PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes" },
        UserId = 1,
        ImageUrl = "/assets/recipe-images/1.jpg"
      },
     new Recipe
      {
        RecipeId = 12,
        RecipeName = "Chocolate nougat cookies",
        CategoryId =2,
        PreparationTimeInMinutes = 45,
        DifficultyLevel = 5,
        CreationDate = DateTime.Now,
         Ingredients = new List<string> {"flour", "sugar", "cocoa powder", "eggs", "milk" },
        PreparationSteps = new List<string> {"Preheat the oven to 350 degrees Fahrenheit", "Mix the dry ingredients", "Add the wet ingredients", "Bake for 30 minutes" },

        UserId = 2,
        ImageUrl = "/assets/recipe-images/2.jpg"
      },
     new Recipe {
        RecipeId = 13,
        RecipeName = "Caramel chocolate cake",
        CategoryId = 1,
        PreparationTimeInMinutes = 45,
        DifficultyLevel = 1,
        CreationDate = DateTime.Now,
        Ingredients = new List<string> { "Flour", "Sugar", "Cocoa Powder", "Eggs", "Milk" },
        PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes" },
        UserId = 1,
        ImageUrl = "/assets/recipe-images/3.jpg"

      }

      };

        private static int count = 15;
        // GET: api/<RecipeController>
        [HttpGet]
        public IEnumerable<Recipe> Get()
        {
            return recipes;
        }

        // GET api/<RecipeController>/5
        [HttpGet("{id}")]
        public Recipe GetById(int id)
        {
            return recipes.Find(recipe => recipe.RecipeId == id);
        }

        // POST api/<RecipeController>
        [HttpPost]
        public void Post([FromBody] Recipe recipe)
        {
            recipe.RecipeId = ++count;
            recipes.Add(recipe);
        }

        // PUT api/<RecipeController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Recipe recipe)
        {
            var r = recipes.Find(x => x.RecipeId == id);
            if (r is null)
                return NotFound();
            r.RecipeName = recipe.RecipeName;
            r.CategoryId = recipe.CategoryId;
            r.PreparationTimeInMinutes = recipe.PreparationTimeInMinutes;
            r.DifficultyLevel = recipe.DifficultyLevel;
            r.CreationDate = recipe.CreationDate;
            r.Ingredients = recipe.Ingredients;
            r.PreparationSteps = recipe.PreparationSteps;
            r.UserId = recipe.UserId;
            r.ImageUrl = recipe.ImageUrl;
            return Ok();
        }

        // DELETE api/<RecipeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            recipes.RemoveAll(r => r.RecipeId == id);
        }
    }
}


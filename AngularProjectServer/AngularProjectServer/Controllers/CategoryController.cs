using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Recipe_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {//Create a local category list
        public static List<Category> categories = new List<Category>
        {


           new Category{Id=1,Name="Showcase cakes",IconRoute="cake2"},
          new Category{Id=2,Name="petipours",IconRoute="lunch_dining"},
           new Category{Id=3,Name="pastries",IconRoute="bakery_dining"},
           new Category{Id=4,Name="dessert",IconRoute="cookie"},

        };
        // GET: api/<CategoryController>
        [HttpGet]
        public ActionResult<IEnumerable<Category>> Get()
        {
            return Ok(categories);
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public ActionResult<Category> Get(int id)
        {
            var category = categories.Find(c=>c.Id==id);
            if (category == null)
                return NotFound();
            return Ok(category);
        }

        // POST api/<CategoryController>
        [HttpPost]
        public void Post([FromBody] Category category)
        {
            categories.Add(category);
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Category category)
        {
            Category categoryForUpdating = categories.Find(c => c.Id == id);
            if (categoryForUpdating == null)
                return NotFound();
            categoryForUpdating.Name = category.Name;
            categoryForUpdating.IconRoute= category.IconRoute;
            return NoContent();

        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Category categoryForDeleting = categories.Find(c => c.Id == id);
            if (categoryForDeleting == null)
                return NotFound();
            categories.Remove(categoryForDeleting);
            return NoContent();
        }
    }
}

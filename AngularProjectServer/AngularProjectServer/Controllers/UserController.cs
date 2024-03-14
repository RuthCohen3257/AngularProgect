using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularProjectServer.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UserController : ControllerBase
  {
    public static List<User> users = new List<User>
        {
            new User{Id=1,Name="ruthy",Address="add1",Email="add1@",Password="3361"},
            new User{Id=2,Name="chavi",Address="add2",Email="add2@",Password="4576"},
        };
    // GET: api/<UserController>
    [HttpGet]
    public IEnumerable<User> GetUsers()
    {
      return users;
    }

    // GET api/<UserController>/5
    //[HttpGet("{name}")]
    //public bool GetByName(string name)
    //{
    //  var user = users.Find(x => x.Name == name);
    //  Console.WriteLine(user);
    //  return user!=null;
    //}
    //[HttpGet("{name}")]
    //public User GetByName(string name)
    //{
    //  return users.Find(u => u.Name == name);
    //}
    [HttpGet("{id}")]
    public User GetById(int id)
    {
      return users.Find(u => u.Id == id);
    }
    // POST api/<UserController>
    [HttpPost]
    public IEnumerable<User> Post([FromBody] User user)
    {
      users.Add(user);
      return users;
    }

    // PUT api/<UserController>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] User user)
    {
      var u = users.Find(x => x.Id == id);
      u.Name = user.Name;
      u.Email = user.Email;
      u.Address = user.Address;
      u.Password = user.Password;
    }

    // DELETE api/<UserController>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      var u = users.Find(x => x.Id == id);
      users.Remove(u);
    
    }
  }

}

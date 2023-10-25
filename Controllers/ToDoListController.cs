using Microsoft.AspNetCore.Mvc;
// using Microsoft.VisualBasic; 

namespace ASPWithReactTesting.Controllers;

[ApiController]
[Route("[controller]")]
public class ToDoListController : ControllerBase
{
    // private static readonly string[] Summaries = new[]
    // {
    //     "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    // };

	private static IEnumerable<ToDoItem> ListItems = new[] {
		new ToDoItem { Id=1, DueDate=DateOnly.FromDateTime(DateTime.Now), Item="Testing task"},
		new ToDoItem { Id=2, DueDate=DateOnly.FromDateTime(DateTime.Now), Item="Testing task 2"}

	};

    private readonly ILogger<ToDoListController> _logger;

    public ToDoListController(ILogger<ToDoListController> logger)
    {
        _logger = logger;
    }

	/*

	[HttpGet]
        public ActionResult<IEnumerable<User>> List()
        {
            // in real life - retrieve from database
            var users = new List<User>{
                new User {
                    Id = 1,
                    Name = "Jon Hilton",
                    Summary = "36 / Lead Software Developer" }
            };

            return Ok(users);
        }

	*/

    [HttpGet]
    public IEnumerable<ToDoItem> Get()
    {

		return ListItems;
		
		// if (ListItems.Count == 0)
		// {
		// 	ListItems.Add(new ToDoItem{
		// 		DueDate = DateOnly.FromDateTime(DateTime.Now),
		// 		Item = "Test task"
		// 	});
		// }
		
		// return ListItems;
    }

	// [HttpPost]
	// public IActionResult PostToDoItem(ToDoItem toDoItem) 
	// {
	// 	// supposed to be an async/await because we will be waiting for response from DB

	// 	// DB SQL query or sumthin

	// 	ListItems.Add(toDoItem);

	// 	return Ok();

	// }
}


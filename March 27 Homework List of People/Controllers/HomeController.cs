using March_27_Homework_List_of_People.Data;
using March_27_Homework_List_of_People.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace March_27_Homework_List_of_People.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            PeopleDB db = new PeopleDB();
            HomeViewModel vm = new HomeViewModel
            {
                People = db.GetPeople()
            };
            if (TempData["message"] != null)
            {
                vm.Message = (string)TempData["message"];
            }
            return View(vm);
        }

        public IActionResult Add()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Add(List<Person> people)
        {
            var db = new PeopleDB();
            db.AddPeople(people);
            if(people.Count == 1)
            {
                TempData["message"] = $"{people.Count} person has been added!";
            }
            else
            {
                TempData["message"] = $"{people.Count} people have been added!";
            }
            return Redirect("/Home/index");
        }

    }
}
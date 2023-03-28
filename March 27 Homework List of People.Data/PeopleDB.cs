using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace March_27_Homework_List_of_People.Data
{
    public class PeopleDB
    {
        private readonly string _connectionString = "Data Source=.\\sqlexpress;Initial Catalog=People;Integrated Security=True";

        public void AddPerson(Person p)
        {
            using var connection = new SqlConnection(_connectionString);
            using var command = connection.CreateCommand();
            command.CommandText = "INSERT INTO People (FirstName, LastName, Age) " +
                                  "VALUES (@firstname, @lastname, @age)";
            command.Parameters.AddWithValue("@firstname", p.FirstName);
            command.Parameters.AddWithValue("@lastname", p.LastName);
            command.Parameters.AddWithValue("@age", p.Age);
            connection.Open();
            command.ExecuteNonQuery();
        }
        public void AddPeople(List<Person> people)
        {
            foreach(Person p in people)
            {
                AddPerson(p);
            }
        }

        public List<Person> GetPeople()
        {
            using var connection = new SqlConnection(_connectionString);
            using var command = connection.CreateCommand();
            command.CommandText = "SELECT * FROM People";
            connection.Open();
            List<Person> people = new List<Person>();
            SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                people.Add(new Person
                {
                    Id = (int)reader["Id"],
                    FirstName = (string)reader["FirstName"],
                    LastName = (string)reader["LastName"],
                    Age = (int)reader["Age"]
                });
            }

            return people;
        }
    }
}

using System;
using System.Collections.Generic;

#nullable disable

namespace WhoIsMyGrandDaddy.Models
{
    public partial class Person
    {
        public short Id { get; set; }
        public string FatherId { get; set; }
        public string MotherId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime Birthdate { get; set; }
        public string IdentityNumber { get; set; }
    }
}

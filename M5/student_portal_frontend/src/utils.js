export const fetchStudents = async () => {
  try {
    const res = await fetch("http://localhost:3001/students");
    if (res.ok) {
        const students = await res.json();
        console.log(students)
      return students;
    } else {
      console.log(res.error);
    }
  } catch {
    console.log("there was a problem fetching students");
  }
};

//Get one student by id

export const getStudentById = async (id) => {
  try {
    const res = await fetch("http://localhost:3001/students/"+id);
    if (res.ok) {
      const student = await res.json();
      console.log(student);
      return student;
    } else {
      console.log(res.error);
    }
  } catch {
    console.log("there was a problem fetching the student");
  }
};

//Create a new student
export const postStudent = async (student) => {
  try {
      const res = await fetch("http://localhost:3001/students", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body:JSON.stringify(student)
          
    });
    if (res.ok) {
      const data = await res.json();
        console.log('student successfully create', data);
                        alert("student correctly created");

      return data;
    } else {
        console.log('there was an error posting a new student');
        return res.json()
    }
  } catch {
      console.log("there was an error posting a new student from catch side");
  }
};

//Modify selected student
export const editStudent = async (id,student) => {
  try {
      const res = await fetch("http://localhost:3001/students/"+id, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body:JSON.stringify(student)
          
    });
    if (res.ok) {
      const data = await res.json();
        console.log('student successfully edited', data);
                alert("student correctly edited");

      return data;
    } else {
      console.log('there was an error editing the student');
    }
  } catch {
      console.log("there was an error editing the student from catch side");
  }
};
//Modify selected student
export const deleteStudent = async (id) => {
  try {
      const res = await fetch("http://localhost:3001/students/"+id, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" }
          
    });
    if (res.ok) {
      const data = await res.json();
        console.log('student successfully deleted', data);
        alert('student correctly deleted')
      return data;
    } else {
      console.log('there was an error deleting the student');
    }
  } catch {
      console.log("there was an error deleting the student from catch side");
  }
};
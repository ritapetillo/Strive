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
//Delete selected student
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

//Get all projects
export const getAllProjects = async () => {
  try {
    const res = await fetch("http://localhost:3001/projects");
    if (res.ok) {
      const projects = await res.json();
      console.log(projects);
      return projects;
    } else {
      console.log(res.error);
    }
  } catch {
    console.log("there was a problem fetching projects");
  }
};

//Create a new project
export const postProject = async (project) => {
  try {
      const res = await fetch("http://localhost:3001/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body:JSON.stringify(project)
          
    });
    if (res.ok) {
      const data = await res.json();
        console.log('project successfully create', data);
                        alert("project correctly created");

      return data;
    } else {
        console.log('there was an error posting a new project');
        return res.json()
    }
  } catch {
      console.log("there was an error posting a new project from catch side");
  }
};

//Modify selected project
export const editProject = async (id,project) => {
  try {
      const res = await fetch("http://localhost:3001/projects/"+id, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body:JSON.stringify(project)
          
    });
    if (res.ok) {
      const data = await res.json();
        console.log('project successfully edited', data);
                alert("project correctly edited");

      return data;
    } else {
      console.log('there was an error editing the project');
    }
  } catch {
      console.log("there was an error editing the project from catch side");
  }
};

//Delete selected project
export const deleteProject = async (id) => {
  try {
      const res = await fetch("http://localhost:3001/projects/"+id, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" }
          
    });
    if (res.ok) {
      const data = await res.json();
        console.log('project successfully deleted', data);
        alert('project correctly deleted')
      return data;
    } else {
      console.log('there was an error deleting the project');
    }
  } catch {
      console.log("there was an error deleting the project from catch side");
  }
};

//Get project by ID
export const getProjectById = async (id) => {
  try {
    const res = await fetch("http://localhost:3001/projects/" + id);
    if (res.ok) {
      const project = await res.json();
      console.log(project);
      return project;
    } else {
      console.log(res.error);
    }
  } catch {
    console.log("there was a problem fetching the project");
  }
};

//Get all project by student ID
export const getProjectByStudentId = async (studentID) => {
  try {
    const res = await fetch("http://localhost:3001/students/" + studentID + "/projects");
    if (res.ok) {
      const projects = await res.json();
      console.log(projects);
      return projects;
    } else {
      console.log(res.error);
    }
  } catch {
    console.log("there was a problem fetching the projects");
  }
};

//Get one student by id

export const getReviewsByProjectId = async (id) => {
  try {
    const res = await fetch("http://localhost:3001/projects/"+id+"/reviews");
    if (res.ok) {
      const reviews = await res.json();
      console.log(reviews);
      return reviews;
    } else {
      console.log(res.error);
    }
  } catch {
    console.log("there was a problem fetching the reviews");
  }
};

//Create a new review 
export const postReview = async (projectID, review) => {
  console.log(review)
  try {
      const res = await fetch("http://localhost:3001/projects/" + projectID +'/reviews', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body:JSON.stringify(review)
          
    });
    if (res.ok) {
      const data = await res.json();
        console.log('review successfully create', data);
                        alert("review correctly created");

      return data;
    } else {
        console.log('there was an error posting a new review');
        return res.json()
    }
  } catch {
      console.log("there was an error posting a new review from catch side");
  }
};

//Modify selected review
export const editReview = async (projectID,reviewID,review) => {
  try {
      const res = await fetch("http://localhost:3001/projects/" + projectID+"/reviews/"+ reviewID, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
      });
    if (res.ok) {
      const data = await res.json();
        console.log('preview successfully edited', data);
                alert("review correctly edited");

      return data;
    } else {
      console.log('there was an error editing the review');
    }
  } catch {
      console.log("there was an error editing the project from catch side");
  }
};

//Delete selected review
export const deleteReview = async (id) => {
  try {
      const res = await fetch("http://localhost:3001/projects/reviews/"+id, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" }
          
    });
    if (res.ok) {
      const data = await res.json();
        console.log('review successfully deleted', data);
        alert('review correctly deleted')
      return data;
    } else {
      console.log('there was an error deleting the review');
    }
  } catch {
      console.log("there was an error deleting the review from catch side");
  }
};
//Get one student by id

export const getReviewByID = async (id) => {
  console.log(id)
  try {
    const res = await fetch("http://localhost:3001/projects/reviews/"+id);
    if (res.ok) {
      const review = await res.json();
      console.log(review);
      return review;
    } else {
      console.log(res.error);
    }
  } catch {
    console.log("there was a problem fetching the review");
  }
};

//POST -> POST upload student image :studentsID/uploadPhoto/

export const uploadStudentImage = async (id,image) => {
  const formdata = new FormData();
  formdata.append("avatar", image);
  try {
    const res = await fetch("http://localhost:3001/students/" + id + "/uploadPhoto", {
      method: "POST",
      body:formdata
    });
    if (res.ok) {
      
      alert('image correctly uploaded')
    } else {
      console.log(res.error);
    }
  } catch {
    console.log("there was a problem uploading the image");
  }
};
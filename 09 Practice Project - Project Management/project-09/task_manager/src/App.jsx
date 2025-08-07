import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [displayProject, setDisplayProject] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setDisplayProject((prev) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prev.selectedProjectId,
        id: taskId,
      };
      return {
        ...prev,
        tasks: [newTask, ...prev.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    setDisplayProject((prev) => {
      return {
        ...prev,

        tasks: prev.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleStartAddProject() {
    setDisplayProject((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  function handleADDProject(projecData) {
    setDisplayProject((prev) => {
      const projectId = Math.random();
      const newProject = {
        ...projecData,
        id: projectId,
      };
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }
  function handleCancel() {
    setDisplayProject((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }
  function handleSelectProject(id) {
    setDisplayProject((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  }
  function handleDeleteProject() {
    setDisplayProject((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = displayProject.projects.find(
    (project) => project.id === displayProject.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      ondelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={displayProject.tasks}
    ></SelectedProject>
  );

  if (displayProject.selectedProjectId === null) {
    content = <NewProject onAdd={handleADDProject} onCancel={handleCancel} />;
  } else if (displayProject.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={displayProject.projects}
        onselect={handleSelectProject}
        id={displayProject.selectedProjectId}
      ></Sidebar>
      {content}
    </main>
  );
}

export default App;

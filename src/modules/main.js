<div id="main">
      <h1 class="project-title">Tasks</h1>
			<button class="add-task">+ Add Task</button>
			<div class="border" class="active">
				<div class="add-task-form">
				<form>
					<div class="top-add-task">
						<h4>Add Task</h4>
					  <i class="fa-solid fa-xmark"></i>
					</div>
					<input type="text" id="Title" name="Title" placeholder="Title" maxlength="25">
					<div class="inline">
						<label for="new-todo-date">Due Date:</label>
					  <input type="date" class="create-new__date-input" id="new-todo-date" name="new-todo" required>
					</div>
					<div class="inline">
					  <label for="priority">Priority:</label>
					  <div class="importants">
					    <div>
						    <input type="radio" id="low" name="priority" value="low" checked>
						    <label for="low">Low</label>
					    </div>
					    <div>
					      <input type="radio" id="medium" name="priority" value="medium">
						    <label for="medium">Medium</label>
				      </div>
				      <div>
						    <input type="radio" id="high" name="priority" value="high">
						    <label for="high">High</label>
					    </div>
					  </div>
				  </div>
					<div class="buttonsToDo">
						<button class="btn" id="addToDO" type="button">Add</button>
						<button class="btn" id="cancelToDO" type="button">Cancel</button>
					</div>
				</form>
			</div>
			</div>

			<div id="tasks">
				<div class="task" id="low"> 
					<div class="task-title">
					  <span>item 1</span>
						<p><time duedate="1914-12-20">1914-12-20</time></p>
					  <i class="fa-solid fa-ellipsis-vertical"></i>
				  </div>
				</div>
				<div class="task" id="medium"> 
					<div class="task-title">
					  <span>item 2</span>
						<p><time duedate="1914-12-20">1914-12-20</time></p>
					  <i class="fa-solid fa-ellipsis-vertical"></i>
				  </div>
				</div>
				<div class="task" id="high"> 
					<div class="task-title">
					  <span>item 3</span>
						<p><time duedate="1914-12-20">1914-12-20</time></p>
					  <i class="fa-solid fa-ellipsis-vertical"></i>
				  </div>
				</div>
				<div class="task" id="medium">
					<div class="task-title">
						<span>item 4</span>
						<p><time duedate="1914-12-20">1914-12-20</time></p>
					  <i class="fa-solid fa-ellipsis-vertical"></i>
					</div>
				</div>
			</div>	
			<div class="border" class="active">
				<div class="add-task-form">
				<form>
					<div class="top-add-task">
						<h4>Add Task</h4>
					  <i class="fa-solid fa-xmark"></i>
					</div>
					<input type="text" id="Title" name="Title" placeholder="Title" maxlength="25">
					<div class="inline">
						<label for="new-todo-date">Due Date:</label>
					  <input type="date" class="create-new__date-input" id="new-todo-date" name="new-todo" required>
					</div>
					<div class="inline">
					  <label for="priority">Priority:</label>
					  <div class="importants">
					    <div>
						    <input type="radio" id="low" name="priority" value="low" checked>
						    <label for="low">Low</label>
					    </div>
					    <div>
					      <input type="radio" id="medium" name="priority" value="medium">
						    <label for="medium">Medium</label>
				      </div>
				      <div>
						    <input type="radio" id="high" name="priority" value="high">
						    <label for="high">High</label>
					    </div>
					  </div>
				  </div>
					<div class="buttonsToDo">
						<button class="btn" id="updateToDo" type="button">Update</button>
						<button class="btn" id="deleteToDo" type="button">Delete</button>
					</div>
				</form>
			</div>
		</div>	

	</div>
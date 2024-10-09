// Hàm thêm công việc vào danh sách
function addTask() {
    var taskInput = document.getElementById('task').value;
    var timeInput = document.getElementById('time').value;
    var dateInput = document.getElementById('date').value;
    var priority = document.getElementById('priority').value;

    // Kiểm tra nếu không nhập gì vào task
    if (taskInput === '') {
        alert('Vui lòng nhập công việc');
        return;
    }

    var ul = document.getElementById('task-list'); // Lấy danh sách công việc
    var li = document.createElement('li'); // Tạo một phần tử li

    // Tạo HTML cho mỗi công việc, bao gồm checkbox, tên công việc, ngày, giờ và icon thùng rác
    li.innerHTML = `
        <input type="checkbox" onclick="toggleTask(this)">
        <span>${taskInput}</span> 
        <span class="date"> - ${dateInput}</span>
        <span class="time"> - ${timeInput}</span>
        <span class="priority-${priority}"></span>
        <i class="fas fa-trash-alt" onclick="removeTask(this)"></i>
    `;

    // Thêm công việc vào danh sách
    ul.appendChild(li);

    // Xóa nội dung input sau khi thêm
    document.getElementById('task').value = '';
    document.getElementById('time').value = '';
    document.getElementById('date').value = '';
}

// Hàm xóa công việc
function removeTask(icon) {
    var li = icon.parentElement;
    li.remove();
}

// Hàm đánh dấu công việc hoàn thành hoặc chưa hoàn thành
function toggleTask(checkbox) {
    var li = checkbox.parentElement;
    li.classList.toggle('completed');
}


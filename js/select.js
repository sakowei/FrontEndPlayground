const selectBtn = document.querySelector('.select-btn'),
      items = document.querySelectorAll('.item');

selectBtn.addEventListener('click', () => {
  selectBtn.classList.toggle('open');
});

items.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('checked')
    let checked = document.querySelectorAll('.checked'),
        title = document.querySelector('.title');
    if (checked && checked.length > 0) {
      title.innerText = `选中了 ${checked.length} 项`;
    } else {
      title.innerText = '选择语言';
    }
  });
});
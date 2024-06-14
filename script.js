function toggleCheckbox(checkboxElement) {
    checkboxElement.classList.toggle('checked');
  }


  function scrollbtn(){
    window.scrollTo({ top: 10000, behavior: 'smooth' });

    var btnArrow = document.getElementById('arrowbt');
    btnArrow.classList.toggle('rowbtn');

    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 100) {
    
        window.scrollTo({ top: -10000, behavior: 'smooth' });

  }
}

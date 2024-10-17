window.addEventListener("load", function () {

    document.querySelector('.projects-block__more .btn').addEventListener('click', function (){

        this.textContent = "Загрузка...";

        var items = document.querySelectorAll('.projects-block__items .projects-block__item');

        var more = document.querySelector('.projects-block__items .projects-block__item.more');


        var url = '/wp-admin/admin-ajax.php?action=more';
        var data = new FormData();
        data.append('count', items.length);

        var xhr = new XMLHttpRequest();

        xhr.open('POST', url);

        xhr.send(data);

        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) return;

            if (xhr.status !== 200) {
            } else {

                var result = createElementFromHTML(xhr.responseText);

                result.querySelectorAll('.projects-block__item').forEach(function (el){
                    items.parentElement.appendChild(el);
                })

                this.textContent = "Показать еще";

            }

        }

    })

});

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}
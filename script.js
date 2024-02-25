function is_empty(str)
{
    return (str == null) || (str.length == 0);
}

function modal(message)
{
    alert(message);
}

function my_function()
{
    var str = document.getElementById("Email").value;
    var re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    var right_email = true;
    
    console.log(str);

    if (!re.test(str))
        right_email = false;


    var text = document.getElementById("Text").value;
    var right_text = true;

    console.log(text);

    if (is_empty(text))
        right_text = false;
    

    if (right_email && right_text)
        modal("Данные успешно обработаны и отправлены");
    else if (!right_email && !right_text)
        modal("Данные некорректны:\n email введен неправильно\n текст сообщения пуст");
    else if (!right_email && right_text)
        modal("Данные некорректны:\n email введен неправильно");
    else
        modal("Данные некорректны:\n текст сообщения пуст");
}

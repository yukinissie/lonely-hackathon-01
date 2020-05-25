window.onload = function() {
    // food = document.getElementById("food");

    // ジャンルの選択肢が変更された際の動作

    category = document.getElementById("category");
    linkType = category.value;

    category.onchange = changeCategory;
}

function changeCategory() {
    // 変更後のカテゴリを取得
    linkType = category.value;
}
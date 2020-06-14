window.onload = function() {
  category = document.getElementById("category");
  linkType = category.value;
  category.onchange = changeCategory;
}

function changeCategory() {
  // 変更後のカテゴリを取得
  linkType = category.value;
}
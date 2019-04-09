chrome.extension.onRequest.addListener (
  (request, sender, sendResponse) => {
    let table = request.table;
    let input = [];
    input.push({
      form : document.getElementsByName("message3")[0],
      value : document.getElementsByName("message3")[0].parentElement.parentElement.parentElement.parentElement.children[0].innerText
    })
    input.push({
      form : document.getElementsByName("message4")[0],
      value : document.getElementsByName("message4")[0].parentElement.parentElement.parentElement.parentElement.children[0].innerText
    })
    input.push({
      form : document.getElementsByName("message5")[0],
      value : document.getElementsByName("message5")[0].parentElement.parentElement.parentElement.parentElement.children[0].innerText
    })
    for (let i of input) {
      let a = i.value.match(/\[(.),(.)\]/);
      let x = Number(a[1].charCodeAt(0)) - 65
      let y = Number(a[2]) - 1
      // console.log(`[${x} ${y}] = ${table[y][x]}`)
      i.form.value = table[y][x];
    }
    console.log("autoinput");
    document.getElementsByName("login")[0].submit();
  }
)

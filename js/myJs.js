const textConfig = {
  text1: "Tèn tèn ten tennnnnn. Xin chào bé Vy đáng yêu xinh đẹp dễ thương !!!!",
  text2: "Cậu có biết hôm nay tớ chuẩn bị quà gì cho cậu không?",
  text3: "Tớ có 2 thứ không biết cậu muốn chọn cái nào? 1 là 5 tỷ VNĐ, 2 là món quà nhỏ của tớ, chỉ có một ít lòng thoy!",
  text4: "Nếu chọn món quà nhỏ thì cùng đi tiếp nhé <3.",
  text5: "+ 5 tỷ <3.",
  text6: "Món quà của Khiêm <3",
  text7: `Trời ơi không thể tin được là em lại không chọn 5 tỷ luôn á. Vậy đợi món quà của anh qua sau nhé. ! `,
  text8: "Tiếp",
  text9: "......",
  text10: "Lời chúc từ bạng Khiêm",
  text11: `Hôm nay không chỉ là ngày một thiên thần của mẹ em chào đời, nó còn là một ngày đánh dấu cột móc trưởng thành của em. Sắp tới sẽ có nhiều điều mới cần được em khám phá. Anh chúc em có một ngày sinh nhật vui vẻ. Tuổi mới đầy thành công, nhiều may mắn, vạn sự như ý. Lên đại học vẫn sẽ luôn là bông hoa đẹp nhất trường nhé !`,
  text12: "Tiếp. Password nằm sau món quà nhé.",
};

$(document).ready(function () {
  // Thanh process
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // Đổi điểm của nút không cho chọn
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // Đổi cái nút sang chỗ ngẫu n hiên
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,

      padding: "3em",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/vy1.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://bekhiem8tuoi.github.io/happybirthdaybeVy/";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});

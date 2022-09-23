//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");
// let userData;

// fetch belirtilen adresten bilgileri al getir.
// then ile de bu istekden gelen veriyi yakalıyoruz.
// aşağıdaki örnekte then ile yakaladık yakaladığımızı consola yazdırdık.
// bize dönen bir promise obje yapısıdır. adı da Response'dur.
// Dönen obje -->Response {type: 'cors', url: 'https://api.github.com/users', redirected: false, status: 200, ok: true, …}body: (...)bodyUsed: falseheaders: Headers {}ok: trueredirected: falsestatus: 200statusText: ""type: "cors"url: "https://api.github.com/users"[[Prototype]]: Response

// dönen objedeki status 2 ile başlıyorsa veya ok: true ise başarılı bir işlemdir.

// dönen response'yi json metodu ile json türüne çeviriyoruz.
// ham veri jsaon haline geldikten sonra data adını alıyor.
// datayı consola yazdırdığımızda  bi array içerisinde objeleri yakalamış oluyoruz. (json formatı.)
// eğer başarısız olursa catch ile bana yakala
// altına console.log yazdık

fetch("https://api.github.com/users")
  .then((res) => {
    // console.log(res);
    //! Error handling
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => updateDOM(data))
  .catch((hata) => console.log(hata));

// console.log(userData);

const updateDOM = (users) => {
  console.log(users);
  const userDiv = document.querySelector(".users");
  users.forEach((user) => {
    const { login, avatar_url, following_url } = user;
    userDiv.innerHTML += ` <h2>${login}</h2>
    <img src="${avatar_url}" width="300px" alt="" />
    `;
  });
};

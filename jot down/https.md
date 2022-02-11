<div style="padding:10px;">

### 01. HTTP _Hypertext Markup Protocol_

<div style="background : #d0d0d0; margin:auto; padding:10px;">

> request method에는 GET, POST, PATCH, PUT, DELETE 등 다양하게 있다. GET과 POST가 중요하다. header란, 어떤 정보를 줄 때 authorization 등에 필요한 것들을 위해 정보 등등 여러가지 부가 정보를 담아서 함께 보내주는 장소라고 할 수 있다. 가장 간단한 예시는 로그인을 구현하면서 알게 될 것이다. request 등에 대한 내용도 포함되어 있어서 아무런 header가 전달되지 않는다면 아무런 respon-se 도 받을 수 없을 것이다.

- HTTP
- _`GET`_ method
  이름 그대로 어떤 정보를 얻을 때 이용하는 method이다. payload를 보낼 수 없다.
- _`POST`_ method
  웹 상에 어떤 데이터를 게시할 때 이용하는 method이다.
- Headers
  브라우저가 무엇을 원하는지, 요청받은 페이지를 찾았는지, 등의 부가적인 데이터를 담고있다. 추가 데이터 / 메타 데이터라고 생각하면 편하다.
- PAYLOAD
  실질적인 데이터이다. 클라이언트는 `GET` method를 이용한 request를 제외한 request를 통해 통신할 때 payload를 보낼 수 있고, 서버는 항상 클라이언트에게 payload를 보낼 수 있다.

### 02. Express.js의 이해

> **Node.js**를 이용한 웹 서버는 일반적인 웹 서버와 전혀 다르지 않다. **Express.js**란 **Node.js**로 서버를 빠르고 간편하게 만들 수 있게 도와주는 웹 프레임워크이다. 오늘날 수많은 웹사이트가 **Express.js**를 이용해 만들어졌다.
> _웹 서버를_ **_Express.js_** _를 이용해 만들 수 있지만, 그 자체는 웹 서버가 아니다._

### 03. Express.js로 웹 서버 구현하기

</div>

</div>

# This is a H1

## This is a H2

### This is a H3

#### This is a H4

##### This is a H5

###### This is a H6

> This is a first blockqute.

>     > This is a second blockqute.1

>     >    	> This is a third blockqute.2

- 빨강
  - 녹색
    - 파랑

* 빨강
  - 녹색
    - 파랑

- 빨강
  - 녹색
    - 파랑

* 1단계
  - 2단계
    - 3단계
      - 4단계

This is a normal paragraph:

    This is a code block.

end code block.

<pre>
<code>
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }

}
</code>
</pre>

```
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
```

```java
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
```

---

---

---

---

---

[link keyword][id]

[id]: URL "Optional Title here"

// code
Link: [Google][googlelink]

[googlelink]: https://google.com "Go google"

일반적인 URL 혹은 이메일주소인 경우 적절한 형식으로 링크를 형성한다.

- 외부링크: <http://example.com/>
- 이메일링크: <address@example.com>

_single asterisks_
_single underscores_
**double asterisks**
**double underscores**
~~cancelline~~

![Alt text](/path/to/img.jpg)
![Alt text](/path/to/img.jpg "Optional title")

사이즈 조절 기능은 없기 때문에 <img width="" height=""></img>를 이용한다

<img src="/path/to/img.jpg" width="450px" height="300px" title="px(픽셀) 크기 설정" alt="RubberDuck"></img><br/>
<img src="/path/to/img.jpg" width="40%" height="30%" title="px(픽셀) 크기 설정" alt="RubberDuck"></img>

[![Vue](/images/vue.png)](https://kr.vuejs.org/)

- 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다.
  이렇게

- 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다.\_\_\_\\ 띄어쓰기
  이렇게

`background`혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있습니다.

```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
```

| 값         |                  의미                  |   기본값 |
| ---------- | :------------------------------------: | -------: |
| `static`   |     유형(기준) 없음 / 배치 불가능      | `static` |
| `relative` |       요소 자신을 기준으로 배치        |          |
| `absolute` | 위치 상 부모(조상)요소를 기준으로 배치 |          |
| `fixed`    |      브라우저 창을 기준으로 배치       |          |

| 값         |                     의미                     |   기본값 |
| ---------- | :------------------------------------------: | -------: |
| `static`   |        유형(기준) 없음 / 배치 불가능         | `static` |
| `relative` |        요소 **자신**을 기준으로 배치         |
| `absolute` | 위치 상 **_부모_(조상)요소**를 기준으로 배치 |
| `fixed`    |       **브라우저 창**을 기준으로 배치        |

인용문(blockQuote)

> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.
> _(네이버 국어 사전)_

BREAK!

> 인용문을 작성하세요!
>
> > 중첩된 인용문(nested blockquote)을 만들 수 있습니다.
> >
> > > 중중첩된 인용문 1
> > > 중중첩된 인용문 2
> > > 중중첩된 인용문 3

동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세 <!--띄어쓰기 2번-->
무궁화 삼천리 화려 강산<br>
대한 사람 대한으로 길이 보전하세

<u>안녕</u>

# h1

## h2

**강조된 텍스트입니다**
_기울여진 텍스트입니다_
**_굵고 기울여진 텍스트입니다_**
<span style="color:blue">파란 글씨입니다.</span>

<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">

😎숨겨진 내용😎

</div>
</details>

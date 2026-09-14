# BỘ QUY TẮC THIẾT KẾ & CHUẨN MỰC HỆ THỐNG TRẮC NGHIỆM TOÁN HỌC THPT
*Biên soạn phục vụ giảng dạy môn Toán học THPT (Lớp 10 - Lớp 11 - Lớp 12 theo Chương trình Giáo dục phổ thông 2018)*  
**Tác giả định hướng & chuẩn mực sư phạm:** Thầy Trần Mạnh Tùng  
**Bộ sách:** Toán Học – Kết nối tri thức với cuộc sống (NXB Giáo dục Việt Nam)  
*(Bộ quy tắc chuẩn mực hợp nhất toàn diện duy nhất của hệ thống Toán học THPT)*

---

## 1. QUY TẮC BẮT BUỘC: KIỂM CHỨNG BẰNG HÌNH ẢNH CUỐI CÙNG (MANDATORY FINAL VISUAL VERIFICATION)
- **Bắt buộc 100%:** Sau bất kỳ thao tác chỉnh sửa mã nguồn, cập nhật CSS, cấu trúc dữ liệu câu hỏi hay tính năng mới nào, **BẮT BUỘC** phải chụp ảnh màn hình bằng trình duyệt thực tế (Chrome Headless) và gọi công cụ view_file để kiểm tra trực quan giao diện thực tế trước khi kết luận hoàn thành công việc.
- **Tuyệt đối không suy đoán:** Không bao giờ kết luận hay khẳng định lỗi đã được xử lý mà không có ảnh chụp kiểm chứng thực tế tại bước cuối cùng.
- **Kiểm thử đa trạng thái:** Phải kiểm tra ảnh chụp tại cả trạng thái tĩnh bình thường, trạng thái tương tác, trạng thái điều hướng và trạng thái hiển thị kết quả Đúng / Sai.

---

## 2. NGUYÊN TẮC SƯ PHẠM & CẤU TRÚC ĐỀ THI TOÁN HỌC (CHUẨN BỘ GD&ĐT 2025)

### 2.1. Đa dạng hóa 4 định dạng câu hỏi đánh giá năng lực môn Toán
Không dùng trắc nghiệm 1 phương án đơn điệu, tích hợp 4 hình thức tương tác hiện đại theo đúng cấu trúc đề thi tốt nghiệp THPT từ năm 2025 của Bộ GD&ĐT:
1. **Trắc nghiệm nhiều lựa chọn (MCQ):** Đầy đủ 4 phương án A, B, C, D rõ ràng, không trùng lặp, không lộ đáp án. Đảo ngẫu nhiên vị trí đáp án đúng qua thuật toán Fisher-Yates mỗi khi làm bài; xóa bỏ hoàn toàn hiện tượng thiên lệch đáp án.
2. **Trắc nghiệm Đúng / Sai (TF - Cụm 4 nhận định độc lập):** Yêu cầu học sinh phân tích 4 mệnh đề a), b), c), d) từ một ngữ cảnh toán học, khảo sát hàm số, hình học không gian, toạ độ vectơ hoặc bảng thống kê/xác suất.
3. **Ghép nối tương ứng (Match Pair):** Ghép đôi giữa biểu thức/hàm số/khái niệm toán học (Cột A) với đồ thị/tính chất/tiệm cận/công thức tính nhanh tương ứng (Cột B). Tiền tố đơn nhất (1., 2. cho Cột A; A., B. cho Cột B), không bao giờ lặp tiền tố 1. 1. hay A. A..
4. **Điền khuyết khép kín (Tap to Drop / Word Bank / Numpad):** Học sinh chọn từ khóa chính xác trong ngân hàng từ (đồng biến, nghịch biến, cực đại, tiệm cận...) hoặc nhập giá trị số tính toán (tọa độ, thể tích, diện tích, tích phân, xác suất...) để gắn vào các vị trí trống của định lý, tính chất hoặc kết quả bài toán. Token hóa 2 bước độc lập %%%SLOT_i%%%, không lồng thẻ, không sót ký tự thô [blank].

### 2.2. Chuẩn hóa thang điểm phân hóa của Bộ GD&ĐT
Với câu hỏi Đúng/Sai dạng chùm 4 ý, áp dụng chuẩn thang điểm bậc thang:
* Đúng 1 ý: **+0,10 điểm**
* Đúng 2 ý: **+0,25 điểm**
* Đúng 3 ý: **+0,50 điểm**
* Đúng trọn vẹn cả 4 ý: **+1,00 điểm**

### 2.3. Nguyên tắc sư phạm trong phản hồi và phân tích kết quả môn Toán
* **Hiện đáp án trước, giải thích sau:** Đầu khung phản hồi luôn in hoa, đậm thẻ đáp án đúng để học sinh đối chiếu ngay lập tức (Ví dụ: `ĐÁP ÁN ĐÚNG: Đáp án D (x = 2; y = -1)`).
* **Trình bày rõ 3 bước tư duy toán học:** Lời giải trình bày chặt chẽ theo trình tự:
  1. *Định lý / Khái niệm toán học gốc* $\rightarrow$ 
  2. *Biến đổi đại số / Hình học giải tích / Giải tích* $\rightarrow$ 
  3. *Kết luận tập nghiệm, giá trị cần tìm hoặc kết quả hình học*.
* **Tích hợp Bảng Rà Soát Chi Tiết (Exam Review Table):** Sau khi hoàn thành chế độ thi thử, tự động hiển thị bảng đối chiếu 10 câu gồm: Trạng thái kết quả, Điểm đạt được, Lựa chọn của học sinh và Đáp án chuẩn của giáo viên.

---

## 3. QUY TẮC HIỂN THỊ CÔNG THỨC TOÁN HỌC, VECTƠ, CĂN THỨC & PHÂN SỐ (MATH FORMULA & NOTATION ENGINE)

### 3.1. Chuẩn Hóa Vectơ Bằng Pure Inline SVG Co Giãn Toàn Phần (Stretchy SVG Vector Engine)
- **Tuyệt đối cấm sử dụng:**
  - **Cấm dùng ký tự kết hợp Unicode `\u20D7`** (ví dụ: `a\u20D7`, `b\u20D7`): Trên hệ điều hành Windows hoặc thiết bị thiếu font toán, ký tự này bị lỗi vỡ phông thành các ô vuông đen/trắng `▯` (Tofu box).
  - **Cấm dùng MathML `<mover><mi>...</mi><mo>→</mo></mover>` cho vectơ nhiều chữ cái:** MathML trong trình duyệt Chromium trên Windows không tự co giãn mũi tên nếu máy tính học sinh thiếu font OpenType MATH chuyên dụng (STIX Two Math). Hậu quả là mũi tên chỉ nằm cụt lủn trên ký tự đầu tiên (ví dụ: chỉ che chữ A trên $\vec{AC'}, \vec{AB}, \vec{AA'}$).
- **Chuẩn cấu trúc Pure Inline SVG co giãn 100% (`preserveAspectRatio="none"`):**
  - Mọi vectơ (từ đơn chữ cái $\vec{a}, \vec{b}, \vec{0}, \vec{u}, \vec{v}, \vec{n}$ đến nhiều chữ cái $\vec{AB}, \vec{AC}, \vec{AC'}, \vec{AA'}, \vec{A'B'}, \vec{A'D'}$) bắt buộc phải định dạng bằng thẻ Inline SVG chuẩn mực:
    ```html
    <span class="vec"><svg class="vec-arr" viewBox="0 0 100 20" preserveAspectRatio="none"><line x1="0" y1="10" x2="96" y2="10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M 82 2 L 98 10 L 82 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="vec-sym">AC'</span></span>
    ```
  - **Quy chuẩn CSS toàn cục:**
    ```css
    .vec {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      vertical-align: middle;
      position: relative;
      padding-top: 0.38em;
      margin: 0 0.12em;
      line-height: 1;
    }
    .vec-arr {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0.42em;
      overflow: visible;
    }
    .vec-sym {
      font-style: italic;
      font-weight: 600;
      line-height: 1;
    }
    ```
  - **Ưu điểm vượt trội:**
    - Mũi tên tự động căng 100% bề rộng theo đúng kích thước bất kỳ của nhóm ký tự (`width: 100%`, `preserveAspectRatio="none"`).
    - Thân mũi tên thẳng, đầu nhọn thanh thoát, không biến dạng chiều cao (`height: 0.42em`).
    - Kế thừa màu sắc `stroke="currentColor"` linh hoạt theo mọi trạng thái: trắng trong câu hỏi, xanh ngọc `#a7f3d0` khi chọn đúng, đỏ `#fecaca` khi chọn sai, cyan `#38bdf8` trong khung lời giải.
    - 100% Offline, Zero External Fonts, triệt tiêu vĩnh viễn lỗi ô vuông `▯`.

### 3.2. Chuẩn Hóa Ký Hiệu Căn Thức Với Thanh Gạch Ngang Vinculum (`.sqrt`)
- **Tuyệt đối không dùng ký hiệu căn đơn điệu kết hợp ngoặc đơn:** Không viết `√(x² + 2x)` hay `√ (2)`.
- **Chuẩn cấu trúc HTML/CSS có thanh gạch ngang vinculum liền khối:**
  ```html
  <span class="sqrt"><span class="rad">√</span><span class="radicand">ax² + bx + c</span></span>
  ```
- **Quy chuẩn CSS:**
  ```css
  .sqrt {
    display: inline-flex;
    align-items: flex-end;
    vertical-align: middle;
    margin: 0 0.15em;
    line-height: 1;
  }
  .rad {
    font-size: 1.15em;
    margin-right: 1px;
    font-family: 'Cambria Math', 'Times New Roman', serif;
    line-height: 1;
  }
  .radicand {
    border-top: 1.6px solid currentColor;
    padding-top: 1px;
    padding-left: 2px;
    padding-right: 2px;
    line-height: 1.2;
  }
  ```
- **Đặc tính sư phạm:** Dấu căn $\sqrt{}$ nối liền mạch với thanh ngang vinculum phía trên toàn bộ biểu thức dưới căn, giúp học sinh phân định trực quan chính xác phần trong căn và phần ngoài căn chuẩn SGK.

### 3.3. Chuẩn Hóa Phân Số Đồng Bộ Màu Sắc Tuyệt Đối (Color Inheritance & currentColor)
- **Cấu trúc HTML thuần:**
  ```html
  <span class="fraction"><span class="numerator">Tử số</span><span class="denominator">Mẫu số</span></span>
  ```
- **Quy chuẩn CSS:**
  ```css
  .fraction {
    display: inline-flex;
    flex-direction: column;
    vertical-align: middle;
    text-align: center;
    padding: 0 0.2em;
    font-size: 0.95em;
    color: inherit;
  }
  .numerator {
    border-bottom: 1.6px solid currentColor;
    padding-bottom: 1px;
    line-height: 1.1;
  }
  .denominator {
    padding-top: 1px;
    line-height: 1.1;
  }
  ```
- **Đồng bộ màu sắc tuyệt đối:**
  - Toàn bộ tử số, mẫu số và gạch phân số phải luôn dùng `color: inherit;` và `border-bottom: 1.6px solid currentColor;`.
  - Trong tiêu đề câu hỏi và các phương án trắc nghiệm: Phân số hiển thị đồng màu trắng hoàn toàn với văn bản xung quanh (#ffffff / #f8fafc).
  - Khi hiển thị kết quả đáp án:
    - **Đáp án ĐÚNG:** Toàn bộ tử số, mẫu số và gạch phân số tự động mang màu xanh ngọc `#a7f3d0`.
    - **Đáp án SAI:** Toàn bộ tử số, mẫu số và gạch phân số tự động mang màu đỏ nhạt `#fecaca`.

### 3.4. Chuẩn Hóa Ký Hiệu Toán Học Bằng Unicode Thuần (Zero Raw LaTeX)
- **100% Không dùng mã LaTeX thô (`$...$`, `\cdot`, `\approx`, `\frac`, `\text{...}`):** Toàn bộ dữ liệu JSON/HTML phải dùng Unicode chuẩn và thẻ HTML trực tiếp.
- **Bảng quy chuẩn ký hiệu Toán học:**
  - **Tích vô hướng / Phép nhân:** Dùng dấu chấm trung tâm `·` (`&middot;` hoặc Unicode `\u00B7`). Tuyệt đối không dùng dấu sao `*` hoặc dấu nhân `×` cho tích vô hướng giữa 2 vectơ.
  - **Góc & Độ:** Dùng `30°`, `45°`, `60°`, `90°` (ký hiệu độ `°`), góc `∠ABC` hoặc góc giữa 2 vectơ `(u, v)`.
  - **Giới hạn (Limit):** `lim` kết hợp thẻ `<sub>`, ví dụ `lim<sub>x→2</sub> f(x)`, `lim<sub>x→+∞</sub> y`.
  - **Tích phân & Đạo hàm:** Dùng `∫` với cận `<sub>` và `<sup>`, ví dụ `∫<sub>a</sub><sup>b</sup> f(x)dx`, đạo hàm `y'`, `f'(x)`, `y''`.
  - **Ký hiệu tập hợp & Logic:** `∈, ∉, ⊂, ⊃, ∪, ∩, \, ∅, ∀, ∃, ⇒, ⇔`.
  - **Số mũ & Chỉ số dưới:** Dùng trực tiếp thẻ `<sup>` và `<sub>` hoặc ký tự Unicode chuẩn (`x²`, `y³`, `x₁`, `x₂`, `⁻¹`, `⁻²`).
  - **Hằng số & Đại lượng:** `π, e, +∞, -∞, ≈, ≠, ≤, ≥, Δ, α, β, γ`.
  - **Tổ hợp, Chỉnh hợp, Hoán vị:** `C<sub>n</sub><sup>k</sup>`, `A<sub>n</sub><sup>k</sup>`, `P<sub>n</sub>`.
  - **Hệ phương trình & Tuyển nghiệm:** Dấu ngoặc nhọn `{` hoặc ngoặc vuông `[` dạng khối hiển thị chuẩn giải tích.

### 3.5. Khung Công Thức Nổi Bật Sư Phạm Trong Lời Giải (.formula-box)
- Công thức nằm trong khung lời giải chi tiết được đặt trong `.formula-box` mang màu xanh cyan `#38bdf8` làm điểm nhấn sư phạm.
- **Nền & Viền:** Nền kính mờ `rgba(56, 189, 248, 0.08)`, viền `1px solid rgba(56, 189, 248, 0.25)`, bo góc `8px`, đệm lề thoáng đãng `8px 14px`.

---

## 4. QUY TẮC ĐIỀU HƯỚNG BẰNG BÀN PHÍM (KEYBOARD NAVIGATION)
- **Phím điều hướng câu hỏi (Mũi tên Trái / Phải):**
  - **Phím Mũi tên Trái (ArrowLeft):** Lùi về câu hỏi trước đó (`prevQuestion()`).
  - **Phím Mũi tên Phải (ArrowRight):** Chuyển sang câu hỏi tiếp theo (`nextQuestion()`).
- **Phím điều hướng bài học (Mũi tên Lên / Xuống):**
  - **Phím Mũi tên Lên (ArrowUp):** Lùi về bài học trước đó (`prevLesson()` - ví dụ từ Bài 2 về Bài 1).
  - **Phím Mũi tên Xuống (ArrowDown):** Chuyển sang bài học tiếp theo (`nextLesson()` - ví dụ từ Bài 1 sang Bài 2).
- **Cơ chế an toàn & Cách ly:**
  - **Giới hạn câu hỏi:** Đang ở Câu 1, bấm phím Trái giữ nguyên Câu 1, không bị âm chỉ số. Đang ở Câu 10 (câu cuối), bấm phím Phải không tự ý nộp bài đột ngột trong chế độ Thi thử; trong chế độ Luyện tập chỉ xem bảng điểm tổng kết khi câu hỏi đã được kiểm tra xong.
  - **Giới hạn bài học:** Đang ở Bài 1, bấm phím Lên giữ nguyên Bài 1; đang ở bài cuối cùng, bấm phím Xuống giữ nguyên bài cuối cùng. Trong chế độ Thi thử nếu có câu đã làm dở dang, hỏi xác nhận học sinh trước khi chuyển bài để tránh mất kết quả thi.
  - **Vô hiệu hóa form controls:** Vô hiệu hóa phím tắt khi người dùng đang nhập văn bản trong ô `input`, `textarea`, dropdown `select`, hoặc khi đang mở Modal chỉnh sửa tên giáo viên.
  - **Chặn cuộn trang:** Kích hoạt `e.preventDefault()` để chặn thanh cuộn màn hình nhảy ngoài ý muốn khi bấm các phím mũi tên.

---

## 5. NGUYÊN TẮC THIẾT KẾ GIAO DIỆN & TRẢI NGHIỆM NGƯỜI DÙNG (UX/UI)

### 5.1. Kiến trúc Card Trọng Tâm & Không Cần Cuộn Chuột (Centered Glassmorphic Assessment Card)
* **Xóa bỏ hoàn toàn khoảng trống thừa (Zero Wasted Space):** Khung làm bài được đóng gói trong một Card trung tâm viền kính mờ phát quang vi tế, căn giữa hoàn hảo cả chiều ngang lẫn chiều dọc màn hình.
* **Không cần cuộn chuột trên màn hình ngang (PC, Laptop, iPad, Landscape mobile):** Chiều cao thẻ làm bài tự động khống chế trong giới hạn `max-height: calc(100vh - 84px)` với thanh cuộn nội bộ mượt mà chỉ khi lời giải mở dài.
* **Tự động thích ứng trên điện thoại xoay dọc (Portrait):** Chuyển đổi thành 1 cột dọc duy nhất và mở thanh cuộn trang tự nhiên giúp học sinh thao tác bằng 1 tay thuận tiện.

### 5.2. Cơ chế phân tách thông minh theo định dạng câu hỏi
* **Câu hỏi không có hình/đồ thị (.quiz-card-unified, max-width: 960px):** Đề bài trang trọng phía trên; 4 phương án dàn thành lưới 2 cột cân đối bên dưới; nút "Kiểm tra kết quả 🎯" gắn liền sát dưới phương án, loại bỏ hoàn toàn khoảng đen vô nghĩa.
* **Câu hỏi có đồ thị hàm số / hình không gian vector SVG (.quiz-card-split, max-width: 1240px):** Chia lưới 2 cột cân xứng (1.15fr : 0.85fr) với cơ chế tự động duỗi thẳng (align-items: stretch):
  * **Cột trái:** Đề bài + Hình vẽ vector SVG mở rộng chiếm trọn vẹn không gian trống.
  * **Cột phải:** Phương án tương tác + Cụm nút hành động + Khung giải thích chi tiết mở dòng chảy bên dưới.

### 5.3. Thanh Header 1 Hàng Duy Nhất (Single-Row Slim Header)
* **Cấu trúc 1 Hàng Ngang Bất Biến (flex-wrap: nowrap):** Toàn bộ thanh Header gom trọn trên 1 hàng duy nhất trên PC, Laptop và iPad, hỗ trợ cuộn chuột ngang mượt mà, không bao giờ bị rớt dòng:
  * **Cụm quản trị & cấu hình (Bên trái):** [👨‍🏫 Thầy Trần Mạnh Tùng ✏️] (có thể nhấp đổi tên giáo viên và lưu localStorage) + [Menu chọn bài học theo từng khối ⌄] + [A- | % | A+] (Bộ chỉnh cỡ chữ) + [📊 Học Bạ] (Bảng điểm tiến độ).
  * **Cụm thi đấu & điều hướng (Bên phải):** [📘 Luyện Tập | ⏱️ Thi Thử] + [Đồng hồ đếm ngược kỹ thuật số] + [Mini-map 1..10] (Chuyển câu tức thì chỉ với 1 chạm).
* **Tối giản hóa tối đa & Chuẩn nhận diện:** Không có chữ thừa, không có mã QR che khuất, giữ thanh Header luôn thanh thoát, hiện đại và tập trung 100% vào trải nghiệm làm bài.

### 5.4. Hệ thống Typography Chuẩn Tiếng Việt & Bộ Điều Khiển Cỡ Chữ Linh Hoạt (Font Scaler)
* **Font Stack Hiện Đại & Chuẩn Mực Glyph Tiếng Việt:**
  - Tuyệt đối không đưa `'SF Pro Display'` vào đầu font stack vì trên Windows, font cài lậu/thiếu dấu chỉ chứa ký tự ASCII, dẫn đến lỗi văng font serif/Times New Roman đối với các nguyên âm có dấu (`Ắ, Ầ, Ấ, Ư, Ờ, Ộ`).
  - Chuẩn hóa Font Stack tối tân: `'Plus Jakarta Sans', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif` kết hợp nhúng Google Fonts `Plus Jakarta Sans` (`wght@400;500;600;700;800;900`).
  - **Bắt buộc kế thừa phông cho Form Controls & Nút bấm:** Trình duyệt không tự kế thừa font cho `button, input, select, textarea`. Bắt buộc khai báo toàn cục:
    `*, button, input, select, textarea { font-family: var(--font-family); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }`
  - **Quy chuẩn độ đậm & Kiểu chữ tiếng Việt:** Khuyên dùng `font-weight: 800` hoặc `700`, và dùng Title Case chuẩn mực (ví dụ: *"Bắt Đầu Đấu Trường Ngay"*) để chữ đều tăm tắp, tròn trịa và sang trọng.
* **Bộ Phím Tăng Giảm Kích Cỡ Chữ Tức Thời (A- | % | A+):** Cung cấp 4 mức tỷ lệ hiển thị (90% - 100% - 115% - 130%) lưu tự động vào `localStorage.setItem('TOAN_FONT_SCALE_IDX')`. Toàn bộ văn bản, công thức, bảng Đúng/Sai và lời giải đều co giãn mượt mà theo biến `--font-scale`.

---

## 6. NGUYÊN TẮC KỸ THUẬT: ĐỒ THỊ TOÁN HỌC VECTOR SVG & HÌNH KHÔNG GIAN
* **100% Không dùng ảnh raster (.png, .jpg):** Tránh hiện tượng mờ nhòe, vỡ hạt hoặc mất liên kết ảnh khi chia sẻ offline.
* **Đồ họa SVG khoa học phong cách Dark Neon:** Tự vẽ trực tiếp bằng các thẻ `<svg>`, `<line>`, `<circle>`, `<path>`, `<rect>`, `<polygon>` với màu sắc phát quang tương phản cao (#38bdf8, #34d399, #f43f5e, #fbbf24):
  - Đồ thị hàm số bậc 3, bậc 4 trùng phương, phân thức hữu tỉ bậc nhất/bậc nhất, phân thức bậc 2/bậc 1 với đầy đủ tiệm cận đứng, ngang, xiên.
  - Hình không gian chuẩn: chóp, lăng trụ, hình hộp, hình nón, hình trụ, mặt cầu, hệ toạ độ không gian $Oxyz$ với các nét đứt / nét liền chuẩn mực vẽ hình học.
* **Không làm lộ đáp án:** Tuyệt đối không bao giờ ghi kết quả tính toán hay đánh dấu lộ đáp án trực tiếp trên hình vẽ đồ thị.
* **Cơ chế lấp đầy không gian còn trống (Dynamic Space-Filling):**
  * Khung `.graph-box` mở rộng trọn vẹn 100% chiều rộng cột (width: 100%).
  * Khung `.graph-container` sử dụng `flex: 1` và giới hạn tối đa lên tới 52vh (`max-height: 52vh`).
  * Hình vẽ tự động tính toán kích thước dựa trên khoảng trống còn lại bên dưới đề bài, mở lớn tối đa mà vẫn giữ nguyên tỷ lệ chuẩn mực (`object-fit: contain`).

---

## 7. NGUYÊN TẮC TƯƠNG TÁC ĐA GIÁC QUAN (AUDIO & GAMIFICATION)

### 7.1. Âm thanh Web Audio API tổng hợp độc lập 100% (Offline Sound Synth)
Không sử dụng file âm thanh nén bên ngoài (.mp3, .wav) để đảm bảo không bị chặn chính sách bảo mật trình duyệt hay lỗi đường dẫn. Toàn bộ âm thanh được tổng hợp thời gian thực bằng Web Audio API với hiệu ứng ngân vang phong phú:
* **Âm thanh Click nút (playClick()):** Tiếng pop bong bóng giòn tan, thanh thoát (0,05 giây, 600 Hz -> 900 Hz).
* **Âm thanh Đúng (playCorrect()):** Kéo dài 1,4 giây với chuỗi rải hợp âm ngũ cung tươi sáng Arpeggio 5 nốt (E5 -> G5 -> B5 -> E6 -> G6) kết hợp chuông ngân lấp lánh (Sparkling Shimmer).
* **Âm thanh Sai (playWrong()):** Kéo dài 0,9 giây với giai điệu trượt 3 nốt nhẹ nhàng (G3 -> E3 -> C3), mang tính động viên học sinh thử lại thay vì âm thanh chói gắt tiêu cực.
* **Âm thanh Khải Hoàn (playWin()):** Kéo dài 2,8 giây với khúc ca khải hoàn Triumphant Fanfare mô phỏng kèn đồng Synth đa âm ngân vang rực rỡ khi học sinh đạt điểm tuyệt đối.

### 7.2. Hiệu ứng hạt rơi rực rỡ (Canvas Confetti)
Mỗi khi học sinh hoàn thành đúng câu hỏi hoặc nộp bài thi thử đạt điểm số cao, kích hoạt hiệu ứng pháo hoa màu rơi trên màn hình bằng `<canvas>` thuần để tạo cảm xúc khích lệ học tập.

---

## 8. NGUYÊN TẮC QUẢN TRỊ TIẾN ĐỘ & TỔ CHỨC TỆP ĐỘC LẬP MÔN TOÁN

### 8.1. Bảng Học Bạ Tiến Độ Toàn Diện Theo Khối (LocalStorage Dashboard)
* Tự động lưu điểm số cao nhất của từng bài học vào bộ nhớ trình duyệt localStorage:
  * **Toán 10 (27 bài):** `TOAN10_LESSON_SCORE_1` $\rightarrow$ `TOAN10_LESSON_SCORE_27`
  * **Toán 11 (32 bài):** `TOAN11_LESSON_SCORE_1` $\rightarrow$ `TOAN11_LESSON_SCORE_32`
  * **Toán 12 (19 bài):** `TOAN12_LESSON_SCORE_1` $\rightarrow$ `TOAN12_LESSON_SCORE_19`
* Phân nhóm trực quan theo các Chương của SGK Toán học Kết nối tri thức:
  * **Chương trình Toán 10 (27 bài / 6 Chương):**
    * *Chương I: Mệnh đề và tập hợp* (Bài 1 - Bài 2)
    * *Chương II: Bất phương trình & Hệ BPT bậc nhất hai ẩn* (Bài 3 - Bài 4)
    * *Chương III: Hệ thức lượng trong tam giác* (Bài 5 - Bài 6)
    * *Chương IV: Vectơ* (Bài 7 - Bài 11)
    * *Chương V: Các số đặc trưng của mẫu số liệu không ghép nhóm* (Bài 12 - Bài 14)
    * *Chương VI: Hàm số, đồ thị và đại số tổ hợp* (Bài 15 - Bài 27: Hàm số bậc hai, Dấu tam thức, Ba đường conic, Quy tắc đếm, Nhị thức Newton, Xác suất...)
  * **Chương trình Toán 11 (32 bài / 9 Chương):**
    * *Chương I: Hàm số lượng giác và phương trình lượng giác* (Bài 1 - Bài 4)
    * *Chương II: Dãy số. Cấp số cộng và cấp số nhân* (Bài 5 - Bài 7)
    * *Chương III: Các số đặc trưng đo xu thế trung tâm mẫu ghép nhóm* (Bài 8 - Bài 9)
    * *Chương IV: Quan hệ song song trong không gian* (Bài 10 - Bài 14)
    * *Chương V: Giới hạn. Hàm số liên tục* (Bài 15 - Bài 17)
    * *Chương VI: Hàm số mũ và hàm số logarit* (Bài 18 - Bài 21)
    * *Chương VII: Quan hệ vuông góc trong không gian* (Bài 22 - Bài 27)
    * *Chương VIII: Các quy tắc tính xác suất* (Bài 28 - Bài 30)
    * *Chương IX: Đạo hàm* (Bài 31 - Bài 32)
  * **Chương trình Toán 12 (19 bài / 6 Chương):**
    * *Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số* (Bài 1 - Bài 5)
    * *Chương II: Vectơ và hệ toạ độ trong không gian* (Bài 6 - Bài 8)
    * *Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm* (Bài 9 - Bài 10)
    * *Chương IV: Nguyên hàm và tích phân* (Bài 11 - Bài 13)
    * *Chương V: Phương pháp toạ độ trong không gian* (Bài 14 - Bài 17)
    * *Chương VI: Xác suất có điều kiện* (Bài 18 - Bài 19)
* Thống kê số bài đã làm, Điểm trung bình và Tổng điểm tích lũy; cho phép nhấp chuyển nhanh bài học hoặc xóa lịch sử điểm để ôn tập lại từ đầu.

### 8.2. Cấu trúc đóng gói hoàn chỉnh (Standalone & Inlined Hub)
* **Cổng Tổng Hợp Master Hub từng khối (`index.html`):** Tích hợp trọn vẹn toàn bộ các bài học trong một ứng dụng duy nhất (Lớp 10: 27 bài / 270 câu; Lớp 11: 32 bài / 320 câu; Lớp 12: 19 bài / 190 câu).
* **Bộ 78 tệp độc lập:** Mỗi bài học hoạt động riêng lẻ như một Single-File SPA hoàn chỉnh, thuận tiện cho giáo viên gửi từng bài qua Zalo lớp sau mỗi tiết dạy.

---

## 9. QUY TRÌNH BIÊN DỊCH VÀ BÀN GIAO MÔN TOÁN (BUILD & DEPLOY)
Mỗi lần thực hiện bất kỳ thay đổi nào trong hệ thống Toán học:
1. Đồng bộ file dữ liệu nguồn `lessons_data.json` và `lessons_data.js` tại từng thư mục khối lớp (`lop10`, `lop11`, `lop12`).
2. Chạy `node generate_suite.js` để tái tạo Cổng Tổng Hợp Master Hub và toàn bộ các file bài học lẻ.
3. Đồng bộ kết quả sang thư mục phân phối `WEB_DEPLOY_TOAN` qua kịch bản `build_web_deploy_toan.py`.
4. **Chụp ảnh màn hình kiểm thử thực tế bằng Chrome Headless.**
5. **Gọi công cụ view_file xem lại ảnh chụp cuối cùng để nghiệm thu trực quan bằng mắt (Rule 1).**
6. Commit & Push lên kho GitHub Pages: `https://github.com/Tikz-Physics/trac-nghiem-toan-hoc-thpt.git`.

---

## 10. KÊNH PHÁT HÀNH, TRUYỀN THÔNG & QUẢNG BÁ SẢN PHẨM (COMMUNITY & SOCIAL OUTREACH)

### 10.1. Hệ thống Kênh Truyền Thông Chính Thức
* **Fanpage Facebook chính thức:** [T-Apps - Phần mềm hỗ trợ giáo viên](https://www.facebook.com/profile.php?id=61593943503646)  
  *(Địa chỉ liên kết: `https://www.facebook.com/profile.php?id=61593943503646`)*
* **Tác giả phát triển & định hướng chuyên môn:** Thầy Trần Mạnh Tùng.
* **Cổng ứng dụng Web Trắc Nghiệm Toán Học THPT (PWA Offline):** `https://tikz-physics.github.io/trac-nghiem-toan-hoc-thpt/`

### 10.2. Quy Chuẩn Bài Viết Giới Thiệu & Quảng Bá Môn Toán (Marketing Guidelines)
Mọi bài viết truyền thông giới thiệu ứng dụng trên Fanpage và các cộng đồng giáo dục phải tuân thủ nghiêm ngặt các nguyên tắc sau:
1. **Khẳng định chuẩn mực sư phạm:** Nêu rõ bám sát Chương trình GDPT 2018 (SGK Kết nối tri thức với cuộc sống), định dạng cấu trúc đánh giá năng lực mới nhất của Bộ GD&ĐT 2025 (MCQ đảo vị trí, Đúng/Sai tính điểm bậc thang 0,1 - 0,25 - 0,5 - 1,0, Ghép nối khái niệm, Điền khuyết từ khóa & giá trị số).
2. **Nêu bật công nghệ PWA Offline 100%:** Nhấn mạnh tính năng mở trực tiếp trên mọi thiết bị di động (iPhone, Android, Máy tính bảng, PC) qua trình duyệt hoặc Zalo, và khả năng cài đặt ra màn hình chính để dùng trọn đời không cần Internet.
3. **Lời giải chi tiết sư phạm & Công thức Toán SVG chuẩn mực:** Mũi tên vectơ tự động co giãn theo chiều rộng chữ, căn thức vinculum liền khối, phân số đồng màu, đồ thị hàm số và hình không gian Dark Neon sắc nét, hỗ trợ máy chiếu / bảng tương tác trên lớp.
4. **Kêu gọi hành động (Call to Action):** Cung cấp đầy đủ đường link truy cập trực tiếp, hướng dẫn học sinh thao tác một chạm và khuyến khích giáo viên chia sẻ miễn phí phục vụ giảng dạy.

### 10.3. Phong Cách Bài Viết Ngắn Gọn & Cơ Chế Kéo Tương Tác (Comment-to-Receive Engagement)
Mọi bài viết quảng bá trên Fanpage T-Apps cần áp dụng cấu trúc kéo tương tác ngắn gọn, cô đọng chuẩn mực đã được kiểm chứng hiệu quả:
1. **Tiêu đề quà tặng nổi bật:** Mở đầu bằng icon quà tặng (`🎁 CHIA SẺ MIỄN PHÍ: HỆ THỐNG TRẮC NGHIỆM TƯƠNG TÁC TOÁN HỌC THPT (DÙNG 100% OFFLINE)`).
2. **Liệt kê tính năng cốt lõi súc tích:** Điểm nhanh 5 giá trị thiết thực (Chuẩn 4 dạng thức Bộ GD&ĐT 2025; Công thức Toán SVG sắc nét không lỗi phông; 2 chế độ Luyện tập & Thi thử 10 phút; Đấu trường bấm chuông QR; Cài App dùng ngoại tuyến không cần mạng).
3. **Kêu gọi thả tim lan tỏa:** Sử dụng câu kêu gọi ấm áp, thân thiện (`❤️ Nếu thấy hay và hữu ích, hãy để lại cho mình 1 TYM để lan tỏa nhé!`).
4. **Cơ chế kêu gọi bình luận để nhận tài liệu (Bắt buộc):** Yêu cầu giáo viên để lại bình luận để nhận link ứng dụng hoặc tài nguyên (`💬 Thầy Cô cần nhận trọn bộ link web & bộ cài App Offline thì cứ ĐỂ LẠI BÌNH LUẬN bên dưới (kèm khối lớp đang dạy), mình sẽ gửi link ngay trong tin nhắn nhé!`).
5. **Hệ thống Hashtag định vị:** `#TApps #PhanMemHoTroGiaoVien #ThayTranManhTung #Toan10 #Toan11 #Toan12 #ToanHocTHPT #TracNghiemTuongTac #DauTruongQR #ChiaSeMienPhi #TaiLieuGiaoVien #CongNgheGiaoDuc`.

---

## 11. BỘ QUY CHUẨN ĐẤU TRƯỜNG TOÁN HỌC LIÊN NHÓM (MULTI-FORMAT WIRELESS QR BUZZER ARENA)

### 11.1. Sảnh Thiết Lập Trận Đấu Trước Khi Vào Đấu Trường (`#setupView`)
- **Màn hình sảnh chờ mặc định:** Khi vào Đấu Trường, giao diện đầu tiên luôn là `#setupView` trước khi bước vào trận đấu.
- **Bố cục 2 cột cân xứng:**
  - **Cột trái (Thiết lập trận đấu):** Chọn Khối lớp (10, 11, 12, Toàn diện 3 khối), Chọn Bài học (phân nhóm theo từng chương) hoặc Toàn bộ bài học của khối, và Chọn Số lượng câu hỏi thi đấu.
  - **Cột phải (Kết nối QR thời gian thực - Zero Idle Time):** Hiển thị trực tiếp Mã phòng & Mã QR để học sinh các tổ quét kết nối điện thoại ngay trong khi giáo viên đang chọn bài; 4 đèn trạng thái báo `🟢 Đã kết nối` theo thời gian thực.
- **Nút "🚀 Bắt Đầu Đấu Trường Ngay ➔":** Sử dụng Title Case với `font-family: var(--font-family) !important; font-weight: 800;`, hiệu ứng phát quang xung nhịp, kích hoạt Khúc ca xuất trận 5,5s khi bắt đầu.
- **Nút "⚙️ Đổi Bài Học":** Luôn hiện diện trên thanh Header của màn hình thi đấu, cho phép giáo viên chuyển bài học bất kỳ lúc nào mà không cần tải lại trang.

### 11.2. Cơ Chế Tự Động Thích Ứng Số Lượng Câu Hỏi Theo Bài Học (Dynamic Question Adaptation)
- **Khi chọn 1 Bài học cụ thể:**
  - Giao diện BẮT BUỘC tự động co lại chỉ hiển thị 2 mức:
    - `[ 5 Câu (Nhanh ⚡) ]`
    - `[ 10 Câu (Toàn Bộ Bài Học 🎯) ]` *(Tự động kích hoạt mặc định)*
  - **Tuyệt đối ẩn/chặn các mức 15 câu, 20 câu** để triệt tiêu 100% lỗi người dùng bấm nhầm vượt quá số câu của bài học.
  - Hiển thị huy hiệu chỉ dẫn sư phạm: `💡 Bài học này có 10 câu hỏi chuẩn SGK. Đã tự động giới hạn số câu để không bị chọn nhầm vượt quá.`
  - Nếu người dùng trước đó đang chọn 15/20 câu ở chế độ Toàn khối rồi chuyển sang 1 bài lẻ, hệ thống tự động chuyển ngay về 10 câu.
- **Khi chọn "Toàn bộ bài học của khối" hoặc "Toàn Diện 3 Khối":**
  - Mở rộng linh hoạt 5 mức: `[ 5 Câu ]` • `[ 10 Câu (Chuẩn) ]` • `[ 15 Câu ]` • `[ 20 Câu ]` • `[ 30 Câu (Đại Chiến) ]`.
- **Cơ chế chốt chặn an toàn (Safety Clamping):**
  - Trong hàm `loadQuestionsForBattle`, luôn thực hiện:
    `const finalCount = Math.min(count, battleQuestions.length);` bảo đảm trò chơi vận hành mượt mà, không bao giờ lỗi.

### 11.3. Kho Dữ Liệu 850 Câu Hỏi Đấu Trường Toàn Diện 3 Khối (85 Bài Thi Đấu)
- Đầy đủ 85 bài học chuẩn SGK mới (Lớp 10: 34 bài / 340 câu; Lớp 11: 26 bài / 260 câu; Lớp 12: 25 bài / 250 câu).
- Toàn bộ câu hỏi Đúng/Sai, Ghép nối và Điền khuyết đều được chuẩn hóa sang định dạng trắc nghiệm phản hồi nhanh, bảo đảm mỗi bài học có đúng 10 câu hỏi phong phú phục vụ bấm chuông thi đấu tốc độ cao.

### 11.4. Động Cơ Âm Thanh Web Audio Đa Tầng Kích Thích & Sôi Động (>= 5 Giây)
- **Khúc Ca Xuất Trận (`playOpeningAnthem()`):** Kéo dài ít nhất 5 giây (chuẩn 5,5 giây), nhịp điệu dồn dập 140 BPM, dàn kèn đồng Synth đa âm + Bassline 12 nhịp nảy lửa, cao trào hợp âm khải hoàn ngân vang rực rỡ.
- **Khúc Ca Khải Hoàn Chiến Thắng (`playVictoryFanfare5s()`):** Kéo dài ít nhất 5 giây (chuẩn 5,2 giây), rải hợp âm ngũ cung lấp lánh (Arpeggio C5 -> G6) kết hợp kèn đồng Triumphant Brass và pháo hoa Confetti.
- **Âm Thanh Chuông Bấm Đa Tầng Kích Thích (`soundExtremeBuzzer()`):** Tổ hợp âm thanh 3 tầng mô phỏng Gameshow chuyên nghiệp:
  1. Sub-punch (Kick transient 220Hz ➔ 45Hz, gain 0.7): Cú nện âm trầm uy lực gây giật mình hưng phấn.
  2. Laser zap sweep (900Hz ➔ 1750Hz ➔ 750Hz sawtooth, gain 0.55): Quét laser sắc sảo đặc trưng chuông bấm gameshow.
  3. Metallic gong bell (3 bội âm 880Hz, 1320Hz, 1760Hz ngân dài 1,2s): Chuông đồng vang xa khắp phòng học.
- Phím tắt máy tính cho giáo viên: `Space` (Tiếp tục/Tạm dừng), `Enter` (Hiện đáp án), `B` (Mở chuông), `1`, `2`, `3`, `4` (Kích hoạt chuông thủ công cho từng tổ).

### 11.5. Hệ Thống Bàn Bấm Chuông Học Sinh Đa Định Dạng Môn Toán Học (Multi-Format Wireless Student Buzzer Engine)

#### 11.5.1. Bốn Định Dạng Bàn Bấm Chuông Thời Gian Thực
Bàn bấm chuông di động (`buzzer.html`) của Đấu Trường Toán Học tích hợp 4 bàn điều khiển chuyên biệt theo đúng 4 định dạng câu hỏi đánh giá năng lực của Bộ GD&ĐT 2025:
1. **Bàn Trắc Nghiệm 4 Phương Án (`#pad_mcq`):**
   - 4 nút cảm ứng khổng lồ A, B, C, D xếp lưới 2x2 viền neon tương phản cao.
   - Thao tác 1 chạm (One-Touch Instant Submit): Chạm là gửi ngay lập tức lên màn hình máy chiếu, ghi nhận thời gian phản hồi chính xác đến mili-giây.
2. **Bàn Đúng / Sai Chùm 4 Mệnh Đề Toán Học (`#pad_tf`):**
   - 4 hàng tương ứng với 4 nhận định độc lập `a)`, `b)`, `c)`, `d)` về khảo sát hàm số, hình học không gian, vectơ Oxyz hoặc xác suất thống kê.
   - Mỗi hàng gồm 2 nút gạt công thái học: `[ 🟢 Đ ]` (Đúng) và `[ 🔴 S ]` (Sai), đổi màu neon rực rỡ khi được chọn.
   - Nút nộp bài tổng hợp hiển thị bản xem trước kết quả thời gian thực: `🚀 GỬI ĐÁP ÁN (Đ - S - Đ - Đ)` hoặc `(Chưa chọn đủ 4 ý)`.
3. **Bàn Ghép Nối Tương Ứng Khái Niệm & Công Thức Toán (`#pad_match`):**
   - 4 hàng mục Cột A (`1.`, `2.`, `3.`, `4.` - Ví dụ: Tên hàm số / Phương trình / Khái niệm hình học), mỗi hàng gắn kèm cụm nút chọn nhanh Cột B (`A`, `B`, `C`, `D` - Đồ thị / Tiệm cận / Công thức tính nhanh).
   - Giao diện dạng viên thuốc (Pill buttons), tự động làm nổi bật cặp ghép đã chọn.
   - Nút nộp bài tổng hợp: `🚀 GỬI GHÉP NỐI (1-B, 2-A, 3-D, 4-C)`.
4. **Bàn Điền Khuyết / Trả Lời Ngắn Chế Độ Kép (`#pad_fill`):**
   - Tích hợp 2 chế độ tương tác linh hoạt: **Gõ Chữ / Từ Khóa Toán Học** và **Bàn Phím Số Nhanh**.
   - Thanh chuyển đổi 1 chạm (`#fillModeSwitch`): `[ ✍️ Gõ Chữ & Từ Khóa ]` ↔ `[ 🔢 Bàn Phím Số Nhanh ]`.

#### 11.5.2. Chế Độ Kép Cho Câu Hỏi Điền Khuyết Toán Học (Fill-in Dual Mode)
- **Chế độ 1: ✍️ Gõ Chữ & Ngân Hàng Từ Khóa Toán Học (Text & Word Bank Mode):**
  - Dành cho các câu hỏi điền từ khóa, tính chất đơn điệu hàm số, loại cực trị, vị trí tương đối hình học hoặc dạng phương trình.
  - Ô nhập văn bản lớn `#fillInputText` kích hoạt bàn phím ảo tiếng Việt của điện thoại di động, hỗ trợ gõ nhanh phím `Enter` trên bàn phím để gửi bài tức thì.
  - **Ngân Hàng Từ Khóa Chạm Nhanh (Word Bank Chips):** Lưới các từ khóa phổ biến trong Toán học được thiết kế dạng nút bấm nhỏ gọn viền neon. Học sinh chỉ cần chạm 1 lần là từ khóa tự động nhảy vào ô nhập và sẵn sàng bấm gửi.
  - **Ngân Hàng Từ Khóa Động Theo Câu Hỏi (Dynamic Word Bank):** Khi Host phát câu hỏi có kèm mảng từ gợi ý `words: [...]`, giao diện chuông học sinh sẽ ưu tiên nạp chính xác các từ này lên đầu thanh từ khóa gợi ý.
- **Chế độ 2: 🔢 Bàn Phím Số Nhanh (15-Key Touch Numpad Mode):**
  - Dành cho các câu hỏi tính toán giá trị số: giá trị lớn nhất/nhỏ nhất (max/min), tọa độ điểm, độ dài khoảng cách, diện tích, thể tích, tích phân, xác suất, tham số m...
  - Màn hình hiển thị số `#fillDisplay` cỡ chữ lớn (1.85rem), căn giữa, màu neon vàng hổ phách `#fde047`.
  - Bàn phím số 15 phím vật lý công thái học:
    - Hàng 1: `[ 1 ]`, `[ 2 ]`, `[ 3 ]`
    - Hàng 2: `[ 4 ]`, `[ 5 ]`, `[ 6 ]`
    - Hàng 3: `[ 7 ]`, `[ 8 ]`, `[ 9 ]`
    - Hàng 4: `[ ± ]` (Đổi dấu âm/dương), `[ 0 ]`, `[ . ]` (Dấu thập phân)
    - Hàng 5: `[ C ]` (Xóa hết), `[ ⌫ ]` (Xóa lùi 1 ký tự), `[ 🚀 GỬI ]` (Gửi kết quả số).

#### 11.5.3. Ngân Hàng Từ Khóa Chuyên Sâu Môn Toán Học (Mathematics Word Bank)
Hệ thống chuông bấm định nghĩa sẵn ngân hàng từ khóa chuẩn mực bao phủ toàn diện chương trình Toán học THPT:
- *Tính chất hàm số & Đồ thị:* `đồng biến`, `nghịch biến`, `cực đại`, `cực tiểu`, `dương`, `âm`, `bằng 0`, `vô số`, `vô nghiệm`, `nghiệm kép`, `đổi dấu`, `bội lẻ`.
- *Đường tiệm cận & Tương giao:* `tiệm cận đứng`, `tiệm cận ngang`, `tiệm cận xiên`, `song song`, `vuông góc`, `tiếp xúc`, `cắt nhau`, `trùng nhau`, `chéo nhau`.
- *Hình học & Vectơ không gian:* `đồng phẳng`, `cùng phương`, `ngược hướng`, `tọa độ`, `trọng tâm`, `tâm đối xứng`, `mặt cầu`, `mặt phẳng`, `đường thẳng`, `tích vô hướng`.
- *Giải tích & Ký hiệu toán học:* `π`, `e`, `+∞`, `-∞`, `vô cực`, `tập rỗng`, `liên tục`, `gián đoạn`, `nguyên hàm`, `tích phân`, `đạo hàm`.

#### 11.5.4. Động Cơ Chấm Điểm Đa Định Dạng & Chuẩn Hiển Thị Olympia Live Bar
- **Bảng Trực Tiếp Olympia Tại Màn Hình Host (Olympia Live Bar):**
  - Khi học sinh gửi đáp án, Host cập nhật ngay thanh trạng thái gồm: Avatar đội, Tên tổ, Icon định dạng (`⚡` MCQ, `⚖️` Đúng/Sai, `🔗` Ghép đôi, `✍️` Điền chữ, `🔢` Điền số), Nội dung câu trả lời và Thời gian phản hồi tính bằng giây.
- **Động Cơ So Khớp & Chấm Điểm Thông Minh (Smart Multi-Format Grading Engine):**
  - *Trắc nghiệm MCQ:* So khớp mã phương án chính xác (`A`, `B`, `C`, `D`).
  - *Đúng / Sai:* So khớp chuỗi tổ hợp hoặc mảng boolean (`Đ-S-Đ-Đ` hoặc `[true, false, true, true]`).
  - *Ghép nối:* So khớp cấu trúc cặp ghép dạng object `{1: "B", 2: "A", 3: "D", 4: "C"}`.
  - *Điền khuyết chuỗi văn bản:*
    - Chuẩn hóa chuỗi bằng cách loại bỏ khoảng trắng thừa và chuyển về chữ thường (`answer.trim().toLowerCase()`).
    - Hỗ trợ mảng đáp án đồng nghĩa: `acceptableAnswers: ["đồng biến", "dong bien", "tăng"]`.
  - *Điền khuyết giá trị số:* So khớp giá trị số thực với ngưỡng sai số cho phép: `Math.abs(parseFloat(studentAns) - parseFloat(correctAns)) < 0.01`.
- **Quy Chuẩn Chống Tràn Giao Diện Di Động (Zero-Clipping Guard):**
  - Thẻ bao ngoài bàn bấm `#buzzerView` luôn khai báo `max-width: 440px; padding: 8px; box-sizing: border-box; margin: 0 auto;`.
  - Thanh chuyển đổi tab 4 định dạng `.student-format-tabs` sử dụng CSS Grid 4 cột đều nhau: `display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; box-sizing: border-box;`.
  - Bảo đảm trên mọi kích cỡ màn hình di động (từ 360px đến 480px), giao diện không bao giờ bị cắt viền, tràn ngang hay che lấp các nút bấm quan trọng.

---

## 12. BỘ ĐẶC TẢ YÊU CẦU & PROMPT MẪU TẠO HỆ THỐNG TOÁN HỌC TƯƠNG TỰ (SPECIFICATION BLUEPRINT & PROMPT TEMPLATE)

### 12.1. Mục Tiêu & Phạm Vi Áp Dụng
Bộ đặc tả này là **chuẩn mực kỹ thuật và sư phạm cao nhất**, được đóng gói dưới dạng Blueprint để người dùng hoặc AI có thể tái tạo ngay lập tức một hệ thống web trắc nghiệm tương tác và đấu trường bấm chuông tương tự cho môn **Toán học** (Khối 10, Khối 11, Khối 12) theo chương trình GDPT 2018 (SGK Kết nối tri thức với cuộc sống).

### 12.2. Danh Mục 10 Yêu Cầu Kỹ Thuật Cốt Lõi Bắt Buộc
1. **Kiến trúc Ngoại Tuyến 100% (Zero External Dependencies):** 100% không dùng CDN bên ngoài (không KaTeX/MathJax mạng), không dùng file âm thanh rời, hoạt động trọn đời không cần Internet.
2. **Đóng Gói Độc Lập (Monolithic Inlined HTML):** Mỗi bài học xuất bản thành 1 file `.html` duy nhất (Single-File SPA), chứa trọn vẹn HTML5, CSS, JS, Audio Synthesizer và dữ liệu câu hỏi Toán học. Master Hub (`index.html`) tích hợp toàn bộ các bài học trong một ứng dụng duy nhất.
3. **Tiêu Chuẩn Ứng Dụng Web Tiến Bộ (PWA):** `manifest.json` và `sw.js` theo cơ chế `Cache-First`, cài đặt 1 chạm (Add to Home Screen) lên điện thoại/máy tính.
4. **Chuẩn Hóa Font Stack Tránh Lỗi Font Windows:** `'Plus Jakarta Sans', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif`. Khai báo bắt buộc kế thừa phông chữ: `*, button, input, select, textarea { font-family: var(--font-family); -webkit-font-smoothing: antialiased; }`.
5. **Giao Diện Trọng Tâm & Không Cần Cuộn Chuột (Zero Wasted Space & No-Scroll):** Card làm bài Dark Glassmorphism khống chế `max-height: calc(100vh - 84px)`, căn giữa hoàn hảo trên PC/Laptop/Tablet ngang; tự động chuyển 1 cột mượt mà trên mobile dọc.
6. **Thanh Header 1 Hàng Duy Nhất (Single-Row Slim Header):** [Tên Giáo Viên ✏️] + [Menu chọn bài] + [Bộ đổi font A-/A+] + [Học Bạ LocalStorage] + [Luyện Tập / Thi Thử 10 phút] + [Timer đếm ngược] + [Mini-map 1..10].
7. **Động Cơ Âm Thanh Web Audio API Tự Sinh Đa Tầng:** Tự tổng hợp bằng mã nguồn: Click bong bóng (0,05s), Đúng Arpeggio 5 nốt + chuông shimmer (1,4s), Sai trượt nốt nhẹ nhàng (0,9s), Khải hoàn fanfare (2,8s), Chuông bấm Đấu Trường 3 tầng Gameshow (Sub-punch + Laser zap + Metallic gong bell), Khúc ca xuất trận 140 BPM (5,5s), Khúc ca khải hoàn (5,2s).
8. **Đấu Trường Bấm Chuông Không Dây (Wireless QR Buzzer Arena):** Sảnh Chờ `#setupView` 2 cột trực quan (Cột chọn bài + Cột hiển thị mã QR kết nối tức thì Zero Idle Time); kết nối WebSockets MQTT thời gian thực (< 50ms) + Kênh nội bộ `BroadcastChannel`. Cơ chế tự thích ứng số câu hỏi: 1 bài lẻ chỉ chọn 5 hoặc 10 câu; toàn khối mở 5, 10, 15, 20, 30 câu.
9. **Hệ Thống Bàn Bấm Chuông Học Sinh Đa Định Dạng (Multi-Format Buzzer Engine):**
   - Hỗ trợ đầy đủ 4 định dạng thi đấu tương ứng 4 loại câu hỏi: Trắc nghiệm A-B-C-D 1 chạm, Đúng/Sai 4 nhận định độc lập, Ghép đôi Cột A với Cột B, và Điền khuyết chế độ kép.
   - Chế độ kép cho câu hỏi điền khuyết Toán học: Tích hợp linh hoạt giữa chế độ **✍️ Gõ Chữ & Ngân Hàng Từ Khóa Toán Học Chạm Nhanh** (cho tính chất hàm số, cực trị, tiệm cận, vị trí tương đối) và **🔢 Bàn Phím Số Nhanh 15 Phím** (cho tính toán tọa độ, tích phân, khoảng cách, max/min).
   - Động cơ chấm điểm thông minh: Chuẩn hóa chuỗi ký tự không phân biệt hoa thường/dấu cách, hỗ trợ mảng từ đồng nghĩa và kiểm tra số thực trong ngưỡng sai số cho phép.
   - Chuẩn chống tràn tuyệt đối (Zero-Clipping Guard): Khống chế `max-width: 440px`, padding 8px, CSS Grid 4 cột hiển thị hoàn hảo trên 100% điện thoại di động.
10. **Hệ Thống Điều Hướng Bàn Phím Chuẩn Mực (Keyboard Navigation):** Mũi tên Trái/Phải đổi câu, Lên/Xuống đổi bài, an toàn chốt chặn, cách ly form controls và modal.

### 12.3. Danh Mục Yêu Cầu Sư Phạm Chuẩn Toán Học GD&ĐT 2025
1. **Cấu Trúc 4 Định Dạng Câu Hỏi Đánh Giá Năng Lực (10 câu/bài):**
   - 6 câu MCQ (Đảo ngẫu nhiên 4 phương án bằng thuật toán Fisher-Yates mỗi lần làm bài).
   - 2 câu Đúng/Sai (Cụm 4 nhận định độc lập a, b, c, d), tính điểm bậc thang: 1 ý = 0,1đ; 2 ý = 0,25đ; 3 ý = 0,5đ; 4 ý = 1,0đ.
   - 1 câu Ghép nối tương ứng (Match Pair) tiền tố 1, 2... ghép với A, B...
   - 1 câu Điền khuyết khép kín (Tap to Drop / Word Bank) với cả dạng điền từ khóa toán học (tính chất, khẳng định) và dạng điền giá trị số (tính toán đại số / hình học).
2. **Quy Chuẩn Hiển Thị Công Thức Toán Học & Vectơ Thuần CSS/SVG (Zero Raw LaTeX):**
   - 100% không dùng mã `$...$`. Vectơ dùng Pure Inline SVG co giãn toàn phần (`preserveAspectRatio="none"`). Dấu căn dùng vinculum `.sqrt` liền khối. Phân số dùng `.fraction` đồng màu tuyệt đối (`color: inherit; border-bottom: 1.6px solid currentColor;`).
3. **Nguyên Tắc Lời Giải Chi Tiết Sư Phạm:**
   - In hoa, in đậm thẻ đáp án đúng ở đầu khung phản hồi.
   - Trình bày mạch lạc theo 3 bước tư duy: Định lý / Khái niệm toán gốc $\rightarrow$ Biến đổi công thức đại số $\rightarrow$ Kết luận và tập nghiệm.
   - Tích hợp Bảng Rà Soát Chi Tiết 10 câu sau khi nộp bài thi thử.

---

### 12.4. Mẫu Prompt Chuẩn Một Chạm Môn Toán Học (Master Mathematics Prompt Template)
*Giáo viên hoặc lập trình viên chỉ cần sao chép toàn bộ đoạn prompt dưới đây để tạo ngay một hệ thống web Toán học:*

```text
Hãy đóng vai trò là Chuyên gia Lập trình Web Giáo dục & Chuyên gia Sư phạm Toán học THPT. 
Hãy tạo một Hệ thống Web Trắc Nghiệm Tương Tác và Đấu Trường Liên Nhóm cho môn TOÁN HỌC 12 (hoặc TOÁN HỌC 10, TOÁN HỌC 11) theo Chương trình GDPT 2018 (Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG), tuân thủ 100% các tiêu chuẩn kỹ thuật và sư phạm sau:

1. KIẾN TRÚC & OFFLINE-FIRST:
- 100% Không dùng thư viện ngoài qua CDN (Không jQuery, không Bootstrap, không KaTeX/MathJax, không font ngoài phụ thuộc mạng).
- Monolithic Inlining: Toàn bộ CSS, JS, Audio Synthesizer và dữ liệu câu hỏi được nhúng trực tiếp trong 1 tệp HTML duy nhất (gồm Cổng Master Hub và các file bài học lẻ).
- Tích hợp PWA (manifest.json + sw.js Cache-First) để học sinh cài đặt 1 chạm ra màn hình chính điện thoại và dùng trọn đời ngoại tuyến 100%.

2. GIAO DIỆN & TYPOGRAPHY:
- Thiết kế phong cách Dark Glassmorphism Neon (#070a14 nền tối, viền kính mờ phát quang).
- Bố cục Card trung tâm Zero Wasted Space: Trên PC/Laptop/iPad khống chế chiều cao trong màn hình, KHÔNG BỊ CUỘN TRANG; tự động co giãn 1 cột trên điện thoại xoay dọc.
- Thanh Header 1 hàng duy nhất không rớt dòng: [Tên Giáo Viên có thể sửa ✏️] + [Menu chọn bài] + [Bộ chỉnh cỡ chữ A-/A+] + [Học Bạ LocalStorage] + [Luyện Tập / Thi Thử 10 phút] + [Timer] + [Minimap 1..10].
- Font Stack chuẩn mực chống lỗi font tiếng Việt trên Windows: 'Plus Jakarta Sans', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif. Khai báo bắt buộc: *, button, input, select, textarea { font-family: var(--font-family); }.

3. DỮ LIỆU & NGUYÊN TẮC SƯ PHẠM TOÁN HỌC:
- Mỗi bài học gồm đúng 10 câu hỏi chuẩn 4 định dạng của Bộ GD&ĐT 2025:
  + 6 câu MCQ (Đảo ngẫu nhiên vị trí đáp án bằng Fisher-Yates mỗi lần làm bài).
  + 2 câu Đúng/Sai (Cụm 4 nhận định độc lập a, b, c, d tính điểm bậc thang 0,1 - 0,25 - 0,5 - 1,0).
  + 1 câu Ghép nối tương ứng (Match Pair) giữa hàm số/phương trình với tính chất/đồ thị.
  + 1 câu Điền khuyết từ khóa / giá trị số tính toán (Tap to Drop / Word Bank).
- Công thức toán học thuần Unicode HTML 100% (Zero Raw LaTeX):
  + Vectơ: Pure Inline SVG co giãn toàn phần (preserveAspectRatio="none", triệt tiêu vĩnh viễn lỗi Tofu box và lỗi mũi tên cụt lủn).
  + Căn thức: Thẻ vinculum .sqrt liền khối.
  + Phân số: Thẻ .fraction dùng color: inherit và border-bottom: 1.6px solid currentColor đồng màu với chữ.
- Lời giải hiện thẻ đáp án đúng trước, giải thích rõ ràng 3 bước tư duy khoa học.

4. ÂM THANH WEB AUDIO API THỜI GIAN THỰC:
- 100% tự tổng hợp bằng mã nguồn: Click bong bóng (0,05s), Đúng Arpeggio 5 nốt + chuông ngân, Sai trượt nốt nhẹ nhàng, Khải hoàn Fanfare chiến thắng, Chuông bấm Đấu Trường 3 tầng Gameshow (Sub-punch + Laser zap + Metallic gong bell), Khúc ca xuất trận 5,5s nhịp 140 BPM, Khúc ca khải hoàn 5,2s.

5. ĐẤU TRƯỜNG BẤM CHUÔNG KHÔNG DÂY ĐA ĐỊNH DẠNG MÔN TOÁN (MULTI-FORMAT WIRELESS QR BUZZER ARENA):
- Màn hình Sảnh Chờ 2 cột trực quan (Cột chọn bài + Cột hiển thị mã QR kết nối tức thì Zero Idle Time).
- Bàn bấm chuông di động buzzer.html tích hợp đầy đủ 4 định dạng tương tác:
  + Bàn trắc nghiệm MCQ 4 nút lớn A, B, C, D (1 chạm nộp ngay).
  + Bàn Đúng/Sai 4 mệnh đề a, b, c, d với công tắc gạt [🟢 Đ] / [🔴 S] và nút nộp tổng hợp có xem trước kết quả thời gian thực.
  + Bàn ghép nối 4 hàng tương ứng Cột A ghép Cột B với giao diện viên thuốc (Pill buttons).
  + Bàn điền khuyết chế độ kép: Chuyển đổi 1 chạm giữa [✍️ Gõ Chữ & Ngân Hàng Từ Khóa] (hỗ trợ bàn phím ảo, phím Enter gửi bài, ngân hàng từ khóa chạm nhanh Toán học và từ khóa động theo câu hỏi) và [🔢 Bàn Phím Số Nhanh] (15 phím vật lý: 0..9, ±, ., C, ⌫, 🚀 GỬI).
- Ngân hàng từ khóa Toán học tích hợp sẵn: đồng biến, nghịch biến, cực đại, cực tiểu, dương, âm, bằng 0, vô số, vô nghiệm, nghiệm kép, tiệm cận đứng, tiệm cận ngang, tiệm cận xiên, song song, vuông góc, tiếp xúc, cắt nhau, trùng nhau, đồng phẳng, π, e, +∞, -∞...
- Bảng hiển thị trực tiếp Host (Olympia Live Bar): Hiện avatar, tổ, icon định dạng (⚡, ⚖️, 🔗, ✍️, 🔢), nội dung học sinh gửi và thời gian phản hồi mili-giây.
- Động cơ chấm điểm đa định dạng: Tự động so khớp chuỗi chuẩn hóa trim().toLowerCase(), mảng từ đồng nghĩa và so sánh số thực sai số cho phép < 0.01.
- Chuẩn chống tràn Zero-Clipping Guard: Khống chế max-width: 440px, padding: 8px, grid 4 cột, hiển thị trọn vẹn 100% trên mọi điện thoại di động (360px - 480px).
- Cơ chế tự thích ứng số câu hỏi: Khi chọn 1 bài lẻ, tự động chỉ hiện 5 câu và 10 câu; khi chọn toàn khối mở rộng 5, 10, 15, 20, 30 câu.
- Kết nối truyền thông kép: WebSockets MQTT thời gian thực (< 50ms) kết hợp kênh nội bộ BroadcastChannel.

6. ĐIỀU HƯỚNG BÀN PHÍM CHUẨN MỰC:
- Phím Mũi tên Trái / Phải: Lùi / Tiến câu hỏi (prevQuestion / nextQuestion) có chặn biên an toàn.
- Phím Mũi tên Lên / Xuống: Lùi / Tiến bài học (prevLesson / nextLesson), có hộp thoại xác nhận nếu học sinh đang làm bài thi thử dở dang để tránh mất kết quả thi.
- Tự động vô hiệu hóa phím tắt khi người dùng đang nhập văn bản trong input/textarea/select hoặc đang mở Modal đổi tên giáo viên; kích hoạt e.preventDefault() để chống cuộn trang ngoài ý muốn.
```

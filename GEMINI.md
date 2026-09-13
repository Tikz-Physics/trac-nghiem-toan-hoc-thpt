# BỘ QUY TẮC THIẾT KẾ & CHUẨN MỰC HỆ THỐNG TRẮC NGHIỆM VẬT LÍ 12
*Biên soạn phục vụ giảng dạy môn Vật Lí THPT (Chương trình Giáo dục phổ thông 2018)*  
**Tác giả định hướng & chuẩn mực sư phạm:** Thầy Trần Mạnh Tùng  
**Bộ sách:** Vật Lí 12 – Kết nối tri thức với cuộc sống (NXB Giáo dục Việt Nam)  
*(Bộ quy tắc chuẩn mực hợp nhất toàn diện duy nhất của hệ thống)*

---

## 1. QUY TẮC BẮT BUỘC: KIỂM CHỨNG BẰNG HÌNH ẢNH CUỐI CÙNG (MANDATORY FINAL VISUAL VERIFICATION)
- **Bắt buộc 100%:** Sau bất kỳ thao tác chỉnh sửa mã nguồn, cập nhật CSS, cấu trúc dữ liệu câu hỏi hay tính năng mới nào, **BẮT BUỘC** phải chụp ảnh màn hình bằng trình duyệt thực tế (Chrome Headless) và gọi công cụ view_file để kiểm tra trực quan giao diện thực tế trước khi kết luận hoàn thành công việc.
- **Tuyệt đối không suy đoán:** Không bao giờ kết luận hay khẳng định lỗi đã được xử lý mà không có ảnh chụp kiểm chứng thực tế tại bước cuối cùng.
- **Kiểm thử đa trạng thái:** Phải kiểm tra ảnh chụp tại cả trạng thái tĩnh bình thường, trạng thái tương tác, trạng thái điều hướng và trạng thái hiển thị kết quả Đúng / Sai.

---

## 2. NGUYÊN TẮC SƯ PHẠM & CẤU TRÚC ĐỀ THI (CHUẨN BỘ GD&ĐT 2025)

### 2.1. Đa dạng hóa 4 định dạng câu hỏi đánh giá năng lực
Không dùng trắc nghiệm 1 phương án đơn điệu, tích hợp 4 hình thức tương tác hiện đại:
1. **Trắc nghiệm nhiều lựa chọn (MCQ):** Đầy đủ 4 phương án A, B, C, D rõ ràng, không trùng lặp, không lộ đáp án. Đảo ngẫu nhiên vị trí đáp án đúng qua thuật toán Fisher-Yates mỗi khi làm bài; xóa bỏ hoàn toàn hiện tượng thiên lệch đáp án.
2. **Trắc nghiệm Đúng / Sai (TF - Cụm 4 nhận định độc lập):** Yêu cầu học sinh phân tích 4 mệnh đề a), b), c), d) từ một ngữ cảnh khoa học, tình huống thực tế đời sống hoặc bảng số liệu/đồ thị đo đạc.
3. **Ghép nối tương ứng (Match Pair):** Ghép đôi giữa hiện tượng đời sống/ứng dụng kĩ thuật (cột A) với bản chất vật lí/định luật nhiệt động học/từ trường/hạt nhân tương ứng (cột B). Tiền tố đơn nhất (1., 2. cho Cột A; A., B. cho Cột B), không bao giờ lặp tiền tố 1. 1. hay A. A..
4. **Điền khuyết khép kín (Tap to Drop / Word Bank):** Học sinh chọn từ khóa chính xác trong ngân hàng từ để gắn vào các vị trí trống của định nghĩa, quy tắc hoặc định luật vật lí. Token hóa 2 bước độc lập %%%SLOT_i%%%, không lồng thẻ, không sót ký tự thô [blank].

### 2.2. Chuẩn hóa thang điểm phân hóa của Bộ GD&ĐT
Với câu hỏi Đúng/Sai dạng chùm 4 ý, áp dụng chuẩn thang điểm bậc thang:
* Đúng 1 ý: **+0,10 điểm**
* Đúng 2 ý: **+0,25 điểm**
* Đúng 3 ý: **+0,50 điểm**
* Đúng trọn vẹn cả 4 ý: **+1,00 điểm**

### 2.3. Nguyên tắc sư phạm trong phản hồi và phân tích kết quả
* **Hiện đáp án trước, giải thích sau:** Đầu khung phản hồi luôn in hoa, đậm thẻ đáp án đúng để học sinh đối chiếu ngay lập tức (Ví dụ: ĐÁP ÁN ĐÚNG: Đáp án B (420 s)).
* **Trình bày rõ 3 bước tư duy:** Lời giải trình bày chặt chẽ theo trình tự: Hiện tượng / Định luật gốc -> Biến đổi công thức đại số -> Thay số và chỉ rõ đơn vị.
* **Tích hợp Bảng Rà Soát Chi Tiết (Exam Review Table):** Sau khi hoàn thành chế độ thi thử, tự động hiển thị bảng đối chiếu 10 câu gồm: Trạng thái kết quả, Điểm đạt được, Lựa chọn của học sinh và Đáp án chuẩn của giáo viên.

---

## 3. QUY TẮC HIỂN THỊ CÔNG THỨC TOÁN - LÍ, VECTƠ, CĂN THỨC & PHÂN SỐ (MATH FORMULA & NOTATION ENGINE)

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

### 3.4. Chuẩn Hóa Các Ký Hiệu Toán Học & Vật Lí Bằng Unicode Thuần (Zero Raw LaTeX)
- **100% Không dùng mã LaTeX thô (`$...$`, `\cdot`, `\approx`, `\frac`, `\text{...}`):** Toàn bộ dữ liệu JSON/HTML phải dùng Unicode chuẩn và thẻ HTML trực tiếp.
- **Bảng quy chuẩn ký hiệu:**
  - **Tích vô hướng / Phép nhân:** Dùng dấu chấm trung tâm `·` (`&middot;` hoặc Unicode `\u00B7`). Tuyệt đối không dùng dấu sao `*` hoặc dấu nhân `×` cho tích vô hướng.
  - **Góc & Độ:** Dùng `30°`, `60°`, `90°` (ký hiệu độ `°`), góc `∠ABC` hoặc `(u, v)`.
  - **Giới hạn (Limit):** `lim` kết hợp thẻ `<sub>`, ví dụ `lim<sub>x→2</sub> f(x)`.
  - **Tích phân & Đạo hàm:** Dùng `∫` với cận `<sub>` và `<sup>`, đạo hàm `f'(x)`, `y''`.
  - **Ký hiệu tập hợp & Logic:** `∈, ∉, ⊂, ∪, ∩, ∅, ∀, ∃, ⇒, ⇔`.
  - **Số mũ & Chỉ số dưới:** Dùng trực tiếp thẻ `<sup>` và `<sub>` hoặc ký tự Unicode chuẩn (`x²`, `y³`, `x₁`, `x₂`, `⁻¹`, `⁻²`).
  - **Hằng số & Đại lượng:** `π, ≈, ≠, ≤, ≥, Δ, α, β, γ, λ, ρ, ω`.
  - **Ký hiệu hạt nhân phóng xạ:** `<span class="isotope"><sup>A</sup><sub>Z</sub>X</span>`.

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
* **Không cần cuộn chuột trên màn hình ngang (PC, Laptop, iPad, Landscape mobile):** Chiều cao thẻ làm bài tự động khống chế trong giới hạn max-height: calc(100vh - 84px) với thanh cuộn nội bộ mượt mà chỉ khi lời giải mở dài.
* **Tự động thích ứng trên điện thoại xoay dọc (Portrait):** Chuyển đổi thành 1 cột dọc duy nhất và mở thanh cuộn trang tự nhiên giúp học sinh thao tác bằng 1 tay thuận tiện.

### 5.2. Cơ chế phân tách thông minh theo định dạng câu hỏi
* **Câu hỏi không có đồ thị (.quiz-card-unified, max-width: 960px):** Đề bài trang trọng phía trên; 4 phương án dàn thành lưới 2 cột cân đối bên dưới; nút "Kiểm tra kết quả 🎯" gắn liền sát dưới phương án, loại bỏ hoàn toàn khoảng đen vô nghĩa.
* **Câu hỏi có đồ thị vector SVG (.quiz-card-split, max-width: 1240px):** Chia lưới 2 cột cân xứng (1.15fr : 0.85fr) với cơ chế tự động duỗi thẳng (align-items: stretch):
  * **Cột trái:** Đề bài + Hình vẽ vector SVG mở rộng chiếm trọn vẹn không gian trống.
  * **Cột phải:** Phương án tương tác + Cụm nút hành động + Khung giải thích chi tiết mở dòng chảy bên dưới.

### 5.3. Thanh Header 1 Hàng Duy Nhất (Single-Row Slim Header)
* **Cấu trúc 1 Hàng Ngang Bất Biến (flex-wrap: nowrap):** Toàn bộ thanh Header gom trọn trên 1 hàng duy nhất trên PC, Laptop và iPad, hỗ trợ cuộn chuột ngang mượt mà, không bao giờ bị rớt dòng:
  * **Cụm quản trị & cấu hình (Bên trái):** [👨‍🏫 Thầy Trần Mạnh Tùng ✏️] (có thể nhấp đổi tên giáo viên và lưu localStorage) + [Menu chọn 25 bài học ⌄] + [A- | % | A+] (Bộ chỉnh cỡ chữ) + [📊 Học Bạ] (Bảng điểm tiến độ).
  * **Cụm thi đấu & điều hướng (Bên phải):** [📘 Luyện Tập | ⏱️ Thi Thử] + [Đồng hồ đếm ngược kỹ thuật số] + [Mini-map 1..10] (Chuyển câu tức thì chỉ với 1 chạm).
* **Tối giản hóa tối đa & Chuẩn nhận diện:** Không có chữ 'CTN', không có mã QR code, không có nút mở trang riêng lẻ để giữ thanh Header luôn thanh thoát, hiện đại và tập trung 100% vào việc học.

### 5.4. Hệ thống Typography Chuẩn Tiếng Việt & Bộ Điều Khiển Cỡ Chữ Linh Hoạt (Font Scaler)
* **Font Stack Hiện Đại & Chuẩn Mực Glyph Tiếng Việt:**
  - Tuyệt đối không đưa `'SF Pro Display'` vào đầu font stack vì trên Windows, font cài lậu/thiếu dấu chỉ chứa ký tự ASCII, dẫn đến lỗi văng font serif/Times New Roman đối với các nguyên âm có dấu (`Ắ, Ầ, Ấ, Ư, Ờ, Ộ`).
  - Chuẩn hóa Font Stack tối tân: `'Plus Jakarta Sans', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif` kết hợp nhúng Google Fonts `Plus Jakarta Sans` (`wght@400;500;600;700;800;900`).
  - **Bắt buộc kế thừa phông cho Form Controls & Nút bấm:** Trình duyệt không tự kế thừa font cho `button, input, select, textarea`. Bắt buộc khai báo toàn cục:
    `*, button, input, select, textarea { font-family: var(--font-family); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }`
  - **Quy chuẩn độ đậm & Kiểu chữ tiếng Việt:** Tránh dùng `font-weight: 900` kết hợp All-Caps cho tiếng Việt có dấu phức tạp nếu font hệ thống không có native black weight (tránh lỗi synthetic bolding). Khuyên dùng `font-weight: 800` hoặc `700`, và dùng Title Case chuẩn mực (ví dụ: *"Bắt Đầu Đấu Trường Ngay"*) để chữ đều tăm tắp, tròn trịa và sang trọng.
* **Bộ Phím Tăng Giảm Kích Cỡ Chữ Tức Thời (A- | % | A+):** Cung cấp 4 mức tỷ lệ hiển thị (90% - 100% - 115% - 130%) lưu tự động vào localStorage.setItem('VT12_FONT_SCALE_IDX'). Toàn bộ văn bản, công thức, bảng Đúng/Sai và lời giải đều co giãn mượt mà theo biến --font-scale.

---

## 6. NGUYÊN TẮC KỸ THUẬT: ĐỒ THỊ VECTOR SVG & CÔNG THỨC THUẦN CSS
* **100% Không dùng ảnh raster (.png, .jpg):** Tránh hiện tượng mờ nhòe, vỡ hạt hoặc mất liên kết ảnh khi chia sẻ offline.
* **Đồ họa SVG khoa học phong cách Dark Neon:** Tự vẽ trực tiếp bằng các thẻ <svg>, <line>, <circle>, <path>, <rect> với màu sắc phát quang tương phản cao (#38bdf8, #34d399, #f43f5e, #fbbf24).
* **Không làm lộ đáp án:** Tuyệt đối không bao giờ ghi kết quả tính toán hay đánh dấu lộ đáp án trực tiếp trên hình vẽ đồ thị.
* **Cơ chế lấp đầy không gian còn trống (Dynamic Space-Filling):**
  * Khung .graph-box mở rộng trọn vẹn 100% chiều rộng cột (width: 100%).
  * Khung .graph-container sử dụng flex: 1 và giới hạn tối đa lên tới 52vh (max-height: 52vh).
  * Hình vẽ tự động tính toán kích thước dựa trên khoảng trống còn lại bên dưới đề bài, mở lớn tối đa mà vẫn giữ nguyên tỷ lệ chuẩn mực (object-fit: contain).

---

## 7. NGUYÊN TẮC TƯƠNG TÁC ĐA GIÁC QUAN (AUDIO & GAMIFICATION)

### 7.1. Âm thanh Web Audio API tổng hợp độc lập 100% (Offline Sound Synth)
Không sử dụng file âm thanh nén bên ngoài (.mp3, .wav) để đảm bảo không bị chặn chính sách bảo mật trình duyệt hay lỗi đường dẫn. Toàn bộ âm thanh được tổng hợp thời gian thực bằng Web Audio API với hiệu ứng ngân vang phong phú:
* **Âm thanh Click nút (playClick()):** Tiếng pop bong bóng giòn tan, thanh thoát (0,05 giây, 600 Hz -> 900 Hz).
* **Âm thanh Đúng (playCorrect()):** Kéo dài 1,4 giây với chuỗi rải hợp âm ngũ cung tươi sáng Arpeggio 5 nốt (E5 -> G5 -> B5 -> E6 -> G6) kết hợp chuông ngân lấp lánh (Sparkling Shimmer).
* **Âm thanh Sai (playWrong()):** Kéo dài 0,9 giây với giai điệu trượt 3 nốt nhẹ nhàng (G3 -> E3 -> C3), mang tính động viên học sinh thử lại thay vì âm thanh chói gắt tiêu cực.
* **Âm thanh Khải Hoàn (playWin()):** Kéo dài 2,8 giây với khúc ca khải hoàn Triumphant Fanfare mô phỏng kèn đồng Synth đa âm ngân vang rực rỡ khi học sinh đạt điểm tuyệt đối.

### 7.2. Hiệu ứng hạt rơi rực rỡ (Canvas Confetti)
Mỗi khi học sinh hoàn thành đúng câu hỏi hoặc nộp bài thi thử đạt điểm số cao, kích hoạt hiệu ứng pháo hoa màu rơi trên màn hình bằng <canvas> thuần để tạo cảm xúc khích lệ học tập.

---

## 8. NGUYÊN TẮC QUẢN TRỊ TIẾN ĐỘ & TỔ CHỨC TỆP ĐỘC LẬP

### 8.1. Bảng Học Bạ Tiến Độ 25 Bài Học (LocalStorage Dashboard)
* Tự động lưu điểm số cao nhất của từng bài học vào bộ nhớ trình duyệt localStorage (VT12_LESSON_SCORE_1 -> VT12_LESSON_SCORE_25).
* Phân nhóm trực quan theo 4 Chương của SGK Kết nối tri thức:
  * **Chương I: Vật lí nhiệt** (Bài 1 -> Bài 7)
  * **Chương II: Khí lí tưởng** (Bài 8 -> Bài 13)
  * **Chương III: Từ trường** (Bài 14 -> Bài 20)
  * **Chương IV: Vật lí hạt nhân** (Bài 21 -> Bài 25)
* Thống kê số bài đã làm, Điểm trung bình và Tổng điểm tích lũy; cho phép nhấp chuyển nhanh bài học hoặc xóa lịch sử điểm để ôn tập lại từ đầu.

### 8.2. Cấu trúc đóng gói hoàn chỉnh (Standalone & Inlined Hub)
* **Cổng Tổng Hợp Master Hub:** 1 tệp HTML duy nhất tích hợp trọn vẹn toàn bộ 250 câu hỏi của 25 bài học, bảng học bạ, bộ chọn bài, bộ đếm giờ và bộ tạo âm thanh. Thầy cô chỉ cần gửi duy nhất 1 file HTML qua Zalo lớp là học sinh có thể sử dụng trọn đời 100% offline trên mọi thiết bị (máy tính, iPad, điện thoại).
* **Bộ 25 tệp độc lập:** Mỗi bài học có thể hoạt động riêng lẻ như một ứng dụng độc lập, thuận tiện cho giáo viên gửi từng bài sau mỗi tiết dạy trên lớp.

---

## 9. QUY TRÌNH BIÊN DỊCH VÀ BÀN GIAO (BUILD & DEPLOY)
Mỗi lần thực hiện bất kỳ thay đổi nào:
1. Đồng bộ file dữ liệu nguồn lessons_data.json và lessons_data.js.
2. Chạy node generate_suite.js để tái tạo Cổng Tổng Hợp Master Hub và 25 file bài học.
3. **Chụp ảnh màn hình kiểm thử thực tế bằng Chrome Headless.**
4. **Gọi công cụ view_file xem lại ảnh chụp cuối cùng để nghiệm thu bằng mắt.**
5. Cập nhật tài liệu walkthrough.md.

---

## 10. KÊNH PHÁT HÀNH, TRUYỀN THÔNG & QUẢNG BÁ SẢN PHẨM (COMMUNITY & SOCIAL OUTREACH)

### 10.1. Hệ thống Kênh Truyền Thông Chính Thức
* **Fanpage Facebook chính thức:** [T-Apps - Phần mềm hỗ trợ giáo viên](https://www.facebook.com/profile.php?id=61593943503646)  
  *(Địa chỉ liên kết: `https://www.facebook.com/profile.php?id=61593943503646`)*
* **Tác giả phát triển & định hướng chuyên môn:** Thầy Trần Mạnh Tùng.
* **Cổng ứng dụng Web Trực tuyến (PWA Offline):** `https://tikz-physics.github.io/trac-nghiem-vat-li-thpt/`

### 10.2. Quy Chuẩn Bài Viết Giới Thiệu & Quảng Bá (Marketing Guidelines)
Mọi bài viết truyền thông giới thiệu ứng dụng trên Fanpage và các cộng đồng giáo dục phải tuân thủ nghiêm ngặt các nguyên tắc sau:
1. **Khẳng định chuẩn mực sư phạm:** Nêu rõ bám sát Chương trình GDPT 2018 (SGK Kết nối tri thức với cuộc sống), định dạng cấu trúc đánh giá năng lực mới nhất của Bộ GD&ĐT 2025 (MCQ đảo vị trí, Đúng/Sai tính điểm bậc thang 0,1 - 0,25 - 0,5 - 1,0, Ghép nối bản chất, Điền khuyết từ khóa).
2. **Nêu bật công nghệ PWA Offline 100%:** Nhấn mạnh tính năng mở trực tiếp trên mọi thiết bị di động (iPhone, Android, Máy tính bảng, PC) qua trình duyệt hoặc Zalo, và khả năng cài đặt ra màn hình chính để dùng trọn đời không cần Internet.
3. **Lời giải chi tiết sư phạm & Đồ họa Dark Neon:** Giới thiệu bộ đồ thị SVG vector phát quang sắc nét, công thức toán Unicode đồng màu, tính năng phóng to toàn màn hình hỗ trợ máy chiếu / bảng tương tác trên lớp.
4. **Kêu gọi hành động (Call to Action):** Cung cấp đầy đủ đường link truy cập trực tiếp, hướng dẫn học sinh thao tác một chạm và khuyến khích giáo viên chia sẻ miễn phí phục vụ giảng dạy.

### 10.3. Phong Cách Bài Viết & Cơ Chế Kéo Tương Tác (Comment-to-Receive Engagement)
Mọi bài viết quảng bá trên Fanpage T-Apps cần áp dụng cấu trúc kéo tương tác chuẩn mực đã được kiểm chứng hiệu quả:
1. **Tiêu đề quà tặng nổi bật:** Mở đầu bằng icon quà tặng (`🎁 CHIA SẺ MIỄN PHÍ: ...`) nêu rõ quy mô sản phẩm (Trọn bộ 3 khối lớp 10 - 11 - 12 hoặc từng lớp cụ thể, dùng 100% offline).
2. **Liệt kê tính năng cốt lõi súc tích:** Điểm nhanh các giá trị thiết thực (Luyện tập, thi thử bấm giờ, đồ họa SVG trực quan, học bạ lưu điểm, cài App dùng không cần mạng).
3. **Kêu gọi thả tim lan tỏa:** Sử dụng câu kêu gọi ấm áp, thân thiện (`❤️ Nếu thấy hay và hữu ích, hãy để lại cho mình 1 TYM để lan tỏa nhé!`).
4. **Cơ chế kêu gọi bình luận để nhận tài liệu (Bắt buộc):** Yêu cầu giáo viên để lại bình luận để nhận link ứng dụng hoặc tài nguyên (`💬 Thầy Cô cần nhận trọn bộ link web & bộ cài App Offline thì cứ ĐỂ LẠI BÌNH LUẬN bên dưới (kèm khối lớp đang dạy), mình sẽ gửi link ngay trong tin nhắn nhé!`). Kỹ thuật này giúp thuật toán Facebook đẩy tương tác tự nhiên lên cực cao.
5. **Hệ thống Hashtag định vị:** Đầy đủ `#TApps #PhanMemHoTroGiaoVien #VatLi10 #VatLi11 #VatLi12 #TracNghiemTuongTac #ChiaSeMienPhi #TaiLieuGiaoVien #CongNgheGiaoDuc`.

---

## 11. BỘ QUY CHUẨN ĐẤU TRƯỜNG VẬT LÍ LIÊN NHÓM (WIRELESS QR BUZZER ARENA)

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

### 11.3. Kho Dữ Liệu 850 Câu Hỏi Toàn Diện 3 Khối (85 Bài Chuẩn SGK)
- Đầy đủ 85 bài học chuẩn SGK mới (Lớp 10: 34 bài / 340 câu; Lớp 11: 26 bài / 260 câu; Lớp 12: 25 bài / 250 câu).
- Toàn bộ câu hỏi Đúng/Sai, Ghép nối và Điền khuyết đều được chuẩn hóa sang định dạng trắc nghiệm phản hồi nhanh, bảo đảm mỗi bài học có đúng 10 câu hỏi phong phú phục vụ bấm chuông thi đấu.

### 11.4. Động Cơ Âm Thanh Web Audio Đa Tầng Kích Thích & Sôi Động (>= 5 Giây)
- **Khúc Ca Xuất Trận (`playOpeningAnthem()`):** Kéo dài ít nhất 5 giây (chuẩn 5,5 giây), nhịp điệu dồn dập 140 BPM, dàn kèn đồng Synth đa âm + Bassline 12 nhịp nảy lửa, cao trào hợp âm khải hoàn ngân vang rực rỡ.
- **Khúc Ca Khải Hoàn Chiến Thắng (`playVictoryFanfare5s()`):** Kéo dài ít nhất 5 giây (chuẩn 5,2 giây), rải hợp âm ngũ cung lấp lánh (Arpeggio C5 -> G6) kết hợp kèn đồng Triumphant Brass và pháo hoa Confetti.
- **Âm Thanh Chuông Bấm Đa Tầng Kích Thích (`soundExtremeBuzzer()`):** Tổ hợp âm thanh 3 tầng mô phỏng Gameshow chuyên nghiệp:
  1. Sub-punch (Kick transient 220Hz ➔ 45Hz, gain 0.7): Cú nện âm trầm uy lực gây giật mình hưng phấn.
  2. Laser zap sweep (900Hz ➔ 1750Hz ➔ 750Hz sawtooth, gain 0.55): Quét laser sắc sảo đặc trưng chuông bấm gameshow.
  3. Metallic gong bell (3 bội âm 880Hz, 1320Hz, 1760Hz ngân dài 1,2s): Chuông đồng vang xa khắp phòng học.
- Phím tắt máy tính cho giáo viên: `Space` (Tiếp tục/Tạm dừng), `Enter` (Hiện đáp án), `B` (Mở chuông), `1`, `2`, `3`, `4` (Kích hoạt chuông thủ công cho từng tổ).



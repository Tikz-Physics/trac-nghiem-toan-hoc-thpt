const lessonsData = {
  "1": [
    {
      "type": "mcq",
      "q": "Cho hàm số y = f(x) có đạo hàm trên khoảng (a; b). Mệnh đề nào sau đây là <b>đúng</b> về mối liên hệ giữa đạo hàm và tính đơn điệu?",
      "opts": [
        "Nếu f'(x) ≥ 0 với mọi x ∈ (a; b) và f'(x) = 0 chỉ tại một số hữu hạn điểm thì hàm số đồng biến trên (a; b).",
        "Nếu hàm số đồng biến trên (a; b) thì f'(x) > 0 với mọi x ∈ (a; b).",
        "Nếu f'(x) = 0 với mọi x ∈ (a; b) thì hàm số đồng biến trên (a; b).",
        "Nếu f'(x) ≤ 0 với mọi x ∈ (a; b) thì hàm số luôn có cực trị trên (a; b)."
      ],
      "ans": 0,
      "correctText": "Phương án A: Nếu f'(x) ≥ 0 với mọi x ∈ (a; b) và f'(x) = 0 chỉ tại một số hữu hạn điểm thì hàm số đồng biến trên (a; b).",
      "exp": "• <b>Định lý về tính đơn điệu (SGK Toán 12):</b> Cho hàm số y = f(x) có đạo hàm trên khoảng (a; b).<br>• Nếu f'(x) ≥ 0 với mọi x ∈ (a; b) và f'(x) = 0 chỉ tại một số hữu hạn điểm thì hàm số <b>đồng biến</b> trên (a; b).<br>• Lưu ý: Nếu hàm số đồng biến thì f'(x) ≥ 0 (có thể triệt tiêu tại hữu hạn điểm), do đó khẳng định f'(x) > 0 là chưa đủ tổng quát."
    },
    {
      "type": "mcq",
      "q": "Tìm khoảng nghịch biến của hàm số y = x³ - 3x² + 2.",
      "opts": [
        "(0; 2)",
        "(-∞; 0)",
        "(2; +∞)",
        "(-∞; 2)"
      ],
      "ans": 0,
      "correctText": "Phương án A: (0; 2)",
      "exp": "• <b>Bước 1: Tính đạo hàm:</b> y' = 3x² - 6x.<br>• <b>Bước 2: Giải nghiệm đạo hàm:</b> 3x(x - 2) = 0 ⇔ x = 0 hoặc x = 2.<br>• <b>Bước 3: Xét dấu y':</b> Hệ số a = 3 > 0, trong khoảng hai nghiệm (0; 2) đạo hàm mang dấu âm (y' < 0).<br>⇒ Hàm số <b>nghịch biến</b> trên khoảng (0; 2)."
    },
    {
      "type": "mcq",
      "q": "Cho hàm số y = <span class=\"fraction\"><span class=\"numerator\">2x - 1</span><span class=\"denominator\">x + 1</span></span>. Khẳng định nào sau đây là <b>đúng</b>?",
      "opts": [
        "Hàm số đồng biến trên từng khoảng (-∞; -1) và (-1; +∞).",
        "Hàm số đồng biến trên tập xác định ℝ \\ {-1}.",
        "Hàm số nghịch biến trên từng khoảng (-∞; -1) và (-1; +∞).",
        "Hàm số nghịch biến trên khoảng (-∞; +∞)."
      ],
      "ans": 0,
      "correctText": "Phương án A: Hàm số đồng biến trên từng khoảng (-∞; -1) và (-1; +∞).",
      "exp": "• <b>Tập xác định:</b> D = ℝ \\ {-1}.<br>• <b>Tính đạo hàm:</b> y' = <span class=\"fraction\"><span class=\"numerator\">2·1 - (-1)·1</span><span class=\"denominator\">(x + 1)²</span></span> = <span class=\"fraction\"><span class=\"numerator\">3</span><span class=\"denominator\">(x + 1)²</span></span> > 0, ∀x ≠ -1.<br>• <b>Quy chuẩn kết luận:</b> Hàm số đồng biến trên <b>từng khoảng xác định</b> (-∞; -1) và (-1; +∞), tuyệt đối không dùng ký hiệu hợp hoặc phép trừ tập hợp."
    },
    {
      "type": "tf",
      "q": "Cho hàm số y = f(x) = -x³ + 3x² + 9x - 1. Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Đạo hàm của hàm số là f'(x) = -3x² + 6x + 9.",
        "Phương trình f'(x) = 0 có hai nghiệm phân biệt là x₁ = -1 và x₂ = 3.",
        "Hàm số đạt cực tiểu tại điểm x = -1 với giá trị cực tiểu y<sub style=\"font-size:0.8em\">CT</sub> = -6.",
        "Điểm cực đại của đồ thị hàm số là điểm M(3; 26)."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> f'(x) = -3x² + 6x + 9.<br>• <b>Ý b [Đúng]:</b> -3x² + 6x + 9 = 0 ⇔ x² - 2x - 3 = 0 ⇔ x = -1 hoặc x = 3.<br>• <b>Ý c [Đúng]:</b> Qua x = -1, f'(x) đổi dấu từ (-) sang (+) nên x = -1 là điểm cực tiểu. y(-1) = -(-1) + 3 - 9 - 1 = -6.<br>• <b>Ý d [Đúng]:</b> Qua x = 3, f'(x) đổi dấu từ (+) sang (-) nên x = 3 là điểm cực đại. y(3) = -27 + 27 + 27 - 1 = 26. Điểm cực đại của đồ thị là M(3; 26)."
    },
    {
      "type": "match",
      "q": "Ghép các mô hình hàm số biến thiên thực tế (Cột A) với khoảng thời gian đại lượng tăng/giảm tương ứng (Cột B):",
      "colA": [
        "Nồng độ oxy trong hồ nước: C(t) = 5 - <span class=\"fraction\"><span class=\"numerator\">4t</span><span class=\"denominator\">t² + 1</span></span> (t ≥ 0)",
        "Số lượng cá thể vi khuẩn: N(t) = 1000 + 300t - 15t² (t ≥ 0)",
        "Lợi nhuận theo sản lượng x: P(x) = -0,01x² + 40x - 100 (x ≥ 0)",
        "Vận tốc chuyển động của hạt: v(t) = t³ - 6t² + 9t (t ≥ 0)"
      ],
      "colB": [
        "Tăng trong khoảng [0; 10], đạt cực đại tại thời điểm t = 10",
        "Giảm trong khoảng (0; 1), đạt cực tiểu tại thời điểm t = 1",
        "Tăng trên [0; 1) và (3; +∞), giảm trên khoảng (1; 3)",
        "Tăng khi sản lượng x thuộc khoảng [0; 2000]"
      ],
      "ans": [
        1,
        0,
        3,
        2
      ],
      "correctText": "1-B • 2-A • 3-D • 4-C",
      "exp": "• <b>1 ghép B:</b> C'(t) = 4(t² - 1)/(t² + 1)². Trên (0; 1) thì C'(t) < 0 nên nồng độ giảm, đạt cực tiểu tại t = 1.<br>• <b>2 ghép A:</b> N'(t) = 300 - 30t = 0 ⇔ t = 10. Trên (0; 10) thì N'(t) > 0 nên số cá thể tăng.<br>• <b>3 ghép D:</b> P'(x) = -0,02x + 40 = 0 ⇔ x = 2000. Lợi nhuận tăng khi x ∈ [0; 2000].<br>• <b>4 ghép C:</b> v'(t) = 3(t - 1)(t - 3)."
    },
    {
      "type": "drag",
      "q": "Chọn từ ngữ thích hợp điền vào chỗ trống để hoàn thiện định lý về dấu đạo hàm và điểm cực trị:",
      "text": "Giả sử y = f(x) liên tục trên khoảng (a; b) chứa x₀ và có đạo hàm trên (a; x₀) và (x₀; b). Nếu f'(x) đổi dấu từ [blank] sang [blank] khi x đi qua x₀ thì x₀ là điểm [blank] của hàm số. Nếu f'(x) đổi dấu từ [blank] sang [blank] khi x đi qua x₀ thì x₀ là điểm [blank] của hàm số.",
      "words": [
        "dương",
        "âm",
        "cực đại",
        "cực tiểu",
        "đồng biến",
        "nghịch biến"
      ],
      "ans": [
        0,
        1,
        2,
        1,
        0,
        3
      ],
      "correctText": "(1) dương • (2) âm • (3) cực đại • (4) âm • (5) dương • (6) cực tiểu",
      "exp": "• <b>Quy tắc cực trị 1 (SGK Toán 12):</b><br>- Đổi dấu từ (+) sang (-) ⇒ hàm số chuyển từ tăng sang giảm ⇒ đạt <b>cực đại</b>.<br>- Đổi dấu từ (-) sang (+) ⇒ hàm số chuyển từ giảm sang tăng ⇒ đạt <b>cực tiểu</b>."
    },
    {
      "type": "mcq",
      "q": "Cho hàm số y = f(x) xác định trên ℝ có bảng xét dấu của đạo hàm f'(x) như hình vẽ. Hàm số y = f(x) có bao nhiêu điểm cực trị?",
      "opts": [
        "3 điểm cực trị",
        "4 điểm cực trị",
        "2 điểm cực trị",
        "1 điểm cực trị"
      ],
      "ans": 0,
      "correctText": "Phương án A: 3 điểm cực trị",
      "exp": "• <b>Quan sát bảng xét dấu đạo hàm f'(x):</b><br>- Tại x = -2: f'(x) đổi dấu từ (+) sang (-) ⇒ Điểm cực đại.<br>- Tại x = 1: f'(x) đổi dấu từ (-) sang (+) ⇒ Điểm cực tiểu.<br>- Tại x = 3: f'(x) = 0 nhưng hai bên đều mang dấu (+) (không đổi dấu) ⇒ Không phải cực trị.<br>- Tại x = 5: f'(x) đổi dấu từ (+) sang (-) ⇒ Điểm cực đại.<br>• <b>Tổng kết:</b> Đạo hàm đổi dấu đúng 3 lần ⇒ Có đúng <b>3 điểm cực trị</b>.",
      "svgGraph": "<svg viewBox=\"0 0 440 150\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"8\" y=\"8\" width=\"424\" height=\"134\" rx=\"10\" fill=\"rgba(15,23,42,0.95)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/>\n  <!-- Grid Lines -->\n  <line x1=\"8\" y1=\"52\" x2=\"432\" y2=\"52\" stroke=\"rgba(255,255,255,0.2)\" stroke-width=\"1.4\"/>\n  <line x1=\"75\" y1=\"8\" x2=\"75\" y2=\"142\" stroke=\"rgba(255,255,255,0.2)\" stroke-width=\"1.4\"/>\n  <!-- Row 1: Header & x values -->\n  <text x=\"42\" y=\"36\" fill=\"#38bdf8\" font-size=\"15\" font-weight=\"800\" text-anchor=\"middle\">x</text>\n  <text x=\"95\" y=\"36\" fill=\"#cbd5e1\" font-size=\"13\" text-anchor=\"middle\">-∞</text>\n  <text x=\"150\" y=\"36\" fill=\"#ffffff\" font-size=\"14\" font-weight=\"800\" text-anchor=\"middle\">-2</text>\n  <text x=\"215\" y=\"36\" fill=\"#ffffff\" font-size=\"14\" font-weight=\"800\" text-anchor=\"middle\">1</text>\n  <text x=\"280\" y=\"36\" fill=\"#ffffff\" font-size=\"14\" font-weight=\"800\" text-anchor=\"middle\">3</text>\n  <text x=\"345\" y=\"36\" fill=\"#ffffff\" font-size=\"14\" font-weight=\"800\" text-anchor=\"middle\">5</text>\n  <text x=\"405\" y=\"36\" fill=\"#cbd5e1\" font-size=\"13\" text-anchor=\"middle\">+∞</text>\n  <!-- Row 2: f'(x) and signs -->\n  <text x=\"42\" y=\"105\" fill=\"#34d399\" font-size=\"15\" font-weight=\"800\" text-anchor=\"middle\">f'(x)</text>\n  <text x=\"150\" y=\"105\" fill=\"#fbbf24\" font-size=\"15\" font-weight=\"800\" text-anchor=\"middle\">0</text>\n  <text x=\"215\" y=\"105\" fill=\"#fbbf24\" font-size=\"15\" font-weight=\"800\" text-anchor=\"middle\">0</text>\n  <text x=\"280\" y=\"105\" fill=\"#fbbf24\" font-size=\"15\" font-weight=\"800\" text-anchor=\"middle\">0</text>\n  <text x=\"345\" y=\"105\" fill=\"#fbbf24\" font-size=\"15\" font-weight=\"800\" text-anchor=\"middle\">0</text>\n  <text x=\"122\" y=\"107\" fill=\"#38bdf8\" font-size=\"18\" font-weight=\"800\" text-anchor=\"middle\">+</text>\n  <text x=\"182\" y=\"107\" fill=\"#f43f5e\" font-size=\"18\" font-weight=\"800\" text-anchor=\"middle\">-</text>\n  <text x=\"247\" y=\"107\" fill=\"#38bdf8\" font-size=\"18\" font-weight=\"800\" text-anchor=\"middle\">+</text>\n  <text x=\"312\" y=\"107\" fill=\"#38bdf8\" font-size=\"18\" font-weight=\"800\" text-anchor=\"middle\">+</text>\n  <text x=\"375\" y=\"107\" fill=\"#f43f5e\" font-size=\"18\" font-weight=\"800\" text-anchor=\"middle\">-</text>\n</svg>"
    },
    {
      "type": "mcq",
      "q": "Tìm tất cả các giá trị thực của tham số m để hàm số y = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">3</span></span>x³ - mx² + (m + 2)x - 5 đồng biến trên ℝ.",
      "opts": [
        "-1 ≤ m ≤ 2",
        "m < -1 hoặc m > 2",
        "-1 < m < 2",
        "m ≤ 2"
      ],
      "ans": 0,
      "correctText": "Phương án A: -1 ≤ m ≤ 2",
      "exp": "• <b>Tính đạo hàm:</b> y' = x² - 2mx + (m + 2).<br>• <b>Điều kiện đồng biến trên ℝ:</b> y' ≥ 0, ∀x ∈ ℝ ⇔ Δ' = m² - (m + 2) ≤ 0.<br>• <b>Giải bất phương trình:</b> m² - m - 2 ≤ 0 ⇔ (m + 1)(m - 2) ≤ 0 ⇔ <b>-1 ≤ m ≤ 2</b>."
    },
    {
      "type": "tf",
      "q": "Nồng độ thuốc C(t) trong máu của một bệnh nhân sau khi tiêm t giờ được mô hình hoá bởi hàm số C(t) = <span class=\"fraction\"><span class=\"numerator\">0,4t</span><span class=\"denominator\">t² + 4</span></span> (mg/mL), với t ≥ 0. Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Tại thời điểm bắt đầu tiêm (t = 0), nồng độ thuốc trong máu bằng 0.",
        "Đạo hàm của nồng độ thuốc là C'(t) = <span class=\"fraction\"><span class=\"numerator\">0,4(4 - t²)</span><span class=\"denominator\">(t² + 4)²</span></span>.",
        "Trong 2 giờ đầu tiên sau khi tiêm (0 < t < 2), nồng độ thuốc trong máu liên tục tăng dần.",
        "Sau khi tiêm 2 giờ, nồng độ thuốc trong máu đạt giá trị lớn nhất là 0,1 mg/mL."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> C(0) = 0.<br>• <b>Ý b [Đúng]:</b> C'(t) = [0,4(t² + 4) - 0,4t(2t)] / (t² + 4)² = 0,4(4 - t²) / (t² + 4)².<br>• <b>Ý c [Đúng]:</b> Với 0 < t < 2 thì 4 - t² > 0 nên C'(t) > 0 ⇒ nồng độ thuốc tăng liên tục.<br>• <b>Ý d [Đúng]:</b> C'(t) = 0 khi t = 2. C(2) = 0,8 / 8 = 0,1 mg/mL là nồng độ lớn nhất."
    },
    {
      "type": "mcq",
      "q": "Một công ty sản xuất máy lọc nước ước tính hàm doanh thu (triệu đồng) khi bán x chiếc máy là R(x) = -0,02x² + 600x (với 0 ≤ x ≤ 25000). Để doanh thu tiếp tục tăng khi bán thêm sản phẩm, số lượng máy bán ra phải nằm trong khoảng nào?",
      "opts": [
        "Từ 0 đến 15000 chiếc",
        "Từ 15000 đến 25000 chiếc",
        "Từ 0 đến 30000 chiếc",
        "Từ 10000 đến 20000 chiếc"
      ],
      "ans": 0,
      "correctText": "Phương án A: Từ 0 đến 15000 chiếc",
      "exp": "• Doanh thu tăng khi hàm số đồng biến, tức R'(x) > 0.<br>• R'(x) = -0,04x + 600 > 0 ⇔ 0,04x < 600 ⇔ x < 15000.<br>• Kết hợp x ≥ 0 ⇒ Số lượng bán ra cần từ <b>0 đến 15000 chiếc</b>."
    }
  ],
  "2": [
    {
      "type": "mcq",
      "q": "Cho hàm số y = f(x) xác định trên tập D. Mệnh đề nào sau đây định nghĩa chính xác số M là giá trị lớn nhất (GTLN) của f(x) trên D?",
      "opts": [
        "f(x) ≤ M với mọi x ∈ D và tồn tại x₀ ∈ D sao cho f(x₀) = M.",
        "f(x) < M với mọi x ∈ D.",
        "f(x) ≤ M với mọi x ∈ D.",
        "Tồn tại x₀ ∈ D sao cho f(x₀) = M."
      ],
      "ans": 0,
      "correctText": "Phương án A: f(x) ≤ M với mọi x ∈ D và tồn tại x₀ ∈ D sao cho f(x₀) = M.",
      "exp": "• <b>Định nghĩa chuẩn (SGK Toán 12):</b> Số M được gọi là giá trị lớn nhất của hàm số y = f(x) trên tập D nếu:<br>1. f(x) ≤ M với mọi x ∈ D.<br>2. <b>Tồn tại x₀ ∈ D sao cho f(x₀) = M</b> (điều kiện đạt dấu bằng)."
    },
    {
      "type": "mcq",
      "q": "Tìm giá trị lớn nhất M của hàm số y = x⁴ - 2x² + 3 trên đoạn [0; 2].",
      "opts": [
        "M = 11",
        "M = 3",
        "M = 2",
        "M = 19"
      ],
      "ans": 0,
      "correctText": "Phương án A: M = 11",
      "exp": "• <b>Bước 1: Tính đạo hàm:</b> y' = 4x³ - 4x = 4x(x² - 1).<br>• <b>Bước 2: Tìm nghiệm thuộc [0; 2]:</b> 4x(x² - 1) = 0 ⇔ x = 0 hoặc x = 1.<br>• <b>Bước 3: Tính giá trị tại các điểm biên và nghiệm đạo hàm:</b><br>- y(0) = 3.<br>- y(1) = 1 - 2 + 3 = 2.<br>- y(2) = 2⁴ - 2(2²) + 3 = 16 - 8 + 3 = 11.<br>• So sánh các giá trị: Max là <b>M = 11</b> (đạt tại x = 2)."
    },
    {
      "type": "mcq",
      "q": "Tìm giá trị nhỏ nhất m của hàm số y = x + <span class=\"fraction\"><span class=\"numerator\">4</span><span class=\"denominator\">x</span></span> trên khoảng (0; +∞).",
      "opts": [
        "m = 4",
        "m = 2",
        "m = 5",
        "m = 0"
      ],
      "ans": 0,
      "correctText": "Phương án A: m = 4",
      "exp": "• <b>Cách 1 (Bất đẳng thức Cauchy):</b> Với x > 0, áp dụng BĐT Cauchy cho 2 số dương: x + <span class=\"fraction\"><span class=\"numerator\">4</span><span class=\"denominator\">x</span></span> ≥ 2√(x · <span class=\"fraction\"><span class=\"numerator\">4</span><span class=\"denominator\">x</span></span>) = 2·2 = 4.<br>Dấu bằng xảy ra khi x = 4/x ⇔ x² = 4 ⇔ x = 2 (nhận). Vậy <b>m = 4</b>.<br>• <b>Cách 2 (Đạo hàm):</b> y' = 1 - 4/x² = 0 ⇔ x = 2. Lập BBT suy ra GTNN là y(2) = 4."
    },
    {
      "type": "tf",
      "q": "Cho hàm số f(x) = x³ - 3x² - 9x + 35 trên đoạn [-2; 4]. Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Đạo hàm của hàm số là f'(x) = 3x² - 6x - 9.",
        "Trên khoảng (-2; 4), phương trình f'(x) = 0 có hai nghiệm x = -1 và x = 3.",
        "Giá trị lớn nhất của hàm số trên đoạn [-2; 4] là M = 40.",
        "Giá trị nhỏ nhất của hàm số trên đoạn [-2; 4] là m = 8."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> f'(x) = 3x² - 6x - 9.<br>• <b>Ý b [Đúng]:</b> 3(x² - 2x - 3) = 0 ⇔ x = -1 hoặc x = 3, cả hai đều thuộc (-2; 4).<br>• <b>Ý c [Đúng]:</b> Tính các giá trị:<br>- f(-2) = -8 - 12 + 18 + 35 = 33.<br>- f(-1) = -1 - 3 + 9 + 35 = 40.<br>- f(3) = 27 - 27 - 27 + 35 = 8.<br>- f(4) = 64 - 48 - 36 + 35 = 15.<br>⇒ Giá trị lớn nhất M = f(-1) = 40.<br>• <b>Ý d [Đúng]:</b> Giá trị nhỏ nhất m = f(3) = 8."
    },
    {
      "type": "match",
      "q": "Ghép các bài toán tối ưu hình học trong thực tế (Cột A) với kích thước tối ưu tương ứng (Cột B):",
      "colA": [
        "Hộp chữ nhật không nắp từ bìa vuông 24 cm cắt 4 góc vuông cạnh x để thể tích lớn nhất",
        "Mảnh đất hình chữ nhật có chu vi 40 m đạt diện tích lớn nhất",
        "Gập tấm tôn phẳng rộng 30 cm thành máng nước tiết diện chữ nhật lớn nhất (gấp 2 mép cao x)",
        "Lon nước ngọt hình trụ thể tích 54π cm³ tốn ít vật liệu nhất"
      ],
      "colB": [
        "Mép gập cao x = 7,5 cm, đáy rộng 15 cm",
        "Cắt 4 góc cạnh x = 4 cm",
        "Mảnh đất hình vuông cạnh 10 m (diện tích 100 m²)",
        "Bán kính đáy r = 3 cm, chiều cao h = 6 cm"
      ],
      "ans": [
        1,
        2,
        0,
        3
      ],
      "correctText": "1-B • 2-C • 3-A • 4-D",
      "exp": "• <b>1 ghép B:</b> V(x) = x(24 - 2x)² = 4x(12 - x)². Đạo hàm V'(x) = 4(12 - x)(12 - 3x) = 0 ⇔ x = 4 cm.<br>• <b>2 ghép C:</b> 2(x + y) = 40 ⇒ S = x(20 - x) đạt Max tại x = 10 m (hình vuông).<br>• <b>3 ghép A:</b> S(x) = x(30 - 2x) = 30x - 2x² đạt Max tại x = 7,5 cm.<br>• <b>4 ghép D:</b> V = πr²h = 54π ⇒ h = 54/r². Diện tích toàn phần S = 2πr² + 2πrh = 2π(r² + 54/r). S' = 2π(2r - 54/r²) = 0 ⇔ r³ = 27 ⇔ r = 3 cm, h = 6 cm."
    },
    {
      "type": "drag",
      "q": "Chọn từ ngữ thích hợp điền vào chỗ trống để hoàn thiện quy tắc tìm GTLN và GTNN của hàm số liên tục trên đoạn [a; b]:",
      "text": "Bước 1: Tìm các điểm x₁, x₂, ..., xₙ trên khoảng (a; b) mà tại đó đạo hàm f'(x) bằng [blank] hoặc f'(x) [blank]. Bước 2: Tính các giá trị f(a), f(b) và f(xᵢ). Bước 3: Tìm số [blank] nhất M và số [blank] nhất m trong các giá trị đã tính.",
      "words": [
        "0",
        "không xác định",
        "lớn",
        "nhỏ",
        "dương",
        "âm"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "(1) 0 • (2) không xác định • (3) lớn • (4) nhỏ",
      "exp": "• <b>Quy trình tìm GTLN, GTNN trên đoạn [a; b]:</b><br>1. Tìm nghiệm f'(x) = 0 hoặc điểm làm f'(x) không xác định trên khoảng mở (a; b).<br>2. Tính f tại hai đầu mút và tại các điểm vừa tìm.<br>3. Kết luận giá trị lớn nhất và nhỏ nhất trong tập các giá trị đã tính."
    },
    {
      "type": "mcq",
      "q": "Cho hàm số liên tục trên đoạn [-2; 3] có đồ thị như hình vẽ bên. Gọi M và m lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên [-2; 3]. Tính giá trị biểu thức T = M + 2m.",
      "opts": [
        "T = 0",
        "T = 4",
        "T = -2",
        "T = 6"
      ],
      "ans": 0,
      "correctText": "Phương án A: T = 0",
      "exp": "• Dựa vào đồ thị trên đoạn [-2; 3]:<br>- Điểm cao nhất của đồ thị có toạ độ (1; 4) ⇒ M = 4.<br>- Điểm thấp nhất của đồ thị có toạ độ (-1; -2) ⇒ m = -2.<br>• Tính biểu thức: T = M + 2m = 4 + 2(-2) = 4 - 4 = <b>0</b>.",
      "svgGraph": "<svg viewBox=\"0 0 380 230\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrow2\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n  </defs>\n  <rect x=\"8\" y=\"8\" width=\"364\" height=\"214\" rx=\"10\" fill=\"rgba(15,23,42,0.95)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/>\n  <!-- Axes -->\n  <line x1=\"25\" y1=\"130\" x2=\"355\" y2=\"130\" stroke=\"rgba(255,255,255,0.4)\" stroke-width=\"1.4\" marker-end=\"url(#arrow2)\"/>\n  <line x1=\"170\" y1=\"210\" x2=\"170\" y2=\"20\" stroke=\"rgba(255,255,255,0.4)\" stroke-width=\"1.4\" marker-end=\"url(#arrow2)\"/>\n  <text x=\"355\" y=\"122\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"700\">x</text>\n  <text x=\"180\" y=\"24\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"700\">y</text>\n  <text x=\"156\" y=\"145\" fill=\"#cbd5e1\" font-size=\"12\" font-style=\"italic\">O</text>\n\n  <!-- Projections for Min (-1; -2) -->\n  <line x1=\"135\" y1=\"170\" x2=\"135\" y2=\"130\" stroke=\"rgba(244,63,94,0.6)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <line x1=\"135\" y1=\"170\" x2=\"170\" y2=\"170\" stroke=\"rgba(244,63,94,0.6)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"135\" y=\"122\" fill=\"#cbd5e1\" font-size=\"12\" text-anchor=\"middle\">-1</text>\n  <text x=\"180\" y=\"174\" fill=\"#cbd5e1\" font-size=\"12\">-2</text>\n\n  <!-- Projections for Max (1; 4) -->\n  <line x1=\"205\" y1=\"50\" x2=\"205\" y2=\"130\" stroke=\"rgba(52,211,153,0.6)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <line x1=\"205\" y1=\"50\" x2=\"170\" y2=\"50\" stroke=\"rgba(52,211,153,0.6)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"205\" y=\"145\" fill=\"#cbd5e1\" font-size=\"12\" text-anchor=\"middle\">1</text>\n  <text x=\"156\" y=\"54\" fill=\"#cbd5e1\" font-size=\"12\">4</text>\n\n  <!-- Endpoints on segment [-2; 3] -->\n  <text x=\"100\" y=\"145\" fill=\"#cbd5e1\" font-size=\"12\" text-anchor=\"middle\">-2</text>\n  <text x=\"275\" y=\"145\" fill=\"#cbd5e1\" font-size=\"12\" text-anchor=\"middle\">3</text>\n\n  <!-- Curve from (-2, 0) to (3, 0) -->\n  <path d=\"M 100 130 C 115 150 120 170 135 170 C 150 170 155 130 170 110 C 185 90 190 50 205 50 C 225 50 250 115 275 130\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.6\"/>\n\n  <!-- Extreme Points & Endpoints -->\n  <circle cx=\"100\" cy=\"130\" r=\"3.5\" fill=\"#38bdf8\"/>\n  <circle cx=\"135\" cy=\"170\" r=\"4.5\" fill=\"#f43f5e\"/>\n  <circle cx=\"205\" cy=\"50\" r=\"4.5\" fill=\"#34d399\"/>\n  <circle cx=\"275\" cy=\"130\" r=\"3.5\" fill=\"#38bdf8\"/>\n</svg>"
    },
    {
      "type": "mcq",
      "q": "Tìm tất cả các giá trị thực của tham số m để giá trị nhỏ nhất của hàm số y = <span class=\"fraction\"><span class=\"numerator\">x + m</span><span class=\"denominator\">x - 1</span></span> trên đoạn [2; 4] bằng 3.",
      "opts": [
        "m = 5",
        "m = 1",
        "m = -1",
        "m = 3"
      ],
      "ans": 0,
      "correctText": "Phương án A: m = 5",
      "exp": "• Đạo hàm: y' = <span class=\"fraction\"><span class=\"numerator\">-1 - m</span><span class=\"denominator\">(x - 1)²</span></span>.<br>• Nếu -1 - m > 0 ⇔ m < -1: Hàm đồng biến trên [2; 4] ⇒ min y = y(2) = 2 + m = 3 ⇔ m = 1 (loại vì m < -1).<br>• Nếu -1 - m < 0 ⇔ m > -1: Hàm nghịch biến trên [2; 4] ⇒ min y = y(4) = <span class=\"fraction\"><span class=\"numerator\">4 + m</span><span class=\"denominator\">3</span></span> = 3 ⇔ 4 + m = 9 ⇔ <b>m = 5</b> (thỏa mãn m > -1)."
    },
    {
      "type": "tf",
      "q": "Người ta muốn xây dựng một bể nước hình hộp chữ nhật không nắp có thể tích V = 4 m³, đáy là hình vuông cạnh x (mét, x > 0). Chi phí làm đáy là 300.000 đ/m², chi phí xây dựng thành bên là 300.000 đ/m². Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Diện tích đáy của bể nước là S<sub style=\"font-size:0.8em\">đáy</sub> = x² (m²).",
        "Chiều cao của bể theo biến x là h = <span class=\"fraction\"><span class=\"numerator\">4</span><span class=\"denominator\">x²</span></span> (m).",
        "Tổng chi phí xây dựng bể là hàm số C(x) = 300x² + <span class=\"fraction\"><span class=\"numerator\">4800</span><span class=\"denominator\">x</span></span> (nghìn đồng).",
        "Để tổng chi phí xây dựng thấp nhất thì cạnh đáy của bể cần chọn là x = 2 m."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> S_đáy = x².<br>• <b>Ý b [Đúng]:</b> V = x²h = 4 ⇒ h = 4/x².<br>• <b>Ý c [Đúng]:</b> C(x) = 300x² + 300·(16/x) = 300x² + 4800/x.<br>• <b>Ý d [Đúng]:</b> C'(x) = 600x - 4800/x² = 0 ⇔ x³ = 8 ⇔ x = 2 m. Chi phí nhỏ nhất đạt tại x = 2 m."
    },
    {
      "type": "mcq",
      "q": "Một xưởng cơ khí cần dập những chiếc vỏ hộp kim loại hình hộp chữ nhật có đáy là hình vuông, thể tích bằng 500 cm³ và không có nắp đậy. Để tiết kiệm nguyên liệu nhất (diện tích toàn phần nhỏ nhất), cạnh đáy x của hộp phải bằng bao nhiêu?",
      "opts": [
        "x = 10 cm",
        "x = 5 cm",
        "x = 8 cm",
        "x = 12 cm"
      ],
      "ans": 0,
      "correctText": "Phương án A: x = 10 cm",
      "exp": "• <b>Mô hình hoá:</b> Đáy vuông cạnh x, chiều cao h. Thể tích V = x²h = 500 ⇒ h = <span class=\"fraction\"><span class=\"numerator\">500</span><span class=\"denominator\">x²</span></span>.<br>• <b>Diện tích vỏ hộp không nắp:</b> S(x) = x² + 4xh = x² + 4x·<span class=\"fraction\"><span class=\"numerator\">500</span><span class=\"denominator\">x²</span></span> = x² + <span class=\"fraction\"><span class=\"numerator\">2000</span><span class=\"denominator\">x</span></span>.<br>• <b>Tìm cực trị:</b> S'(x) = 2x - <span class=\"fraction\"><span class=\"numerator\">2000</span><span class=\"denominator\">x²</span></span> = 0 ⇔ 2x³ = 2000 ⇔ x³ = 1000 ⇔ <b>x = 10 cm</b>."
    }
  ],
  "3": [
    {
      "type": "mcq",
      "q": "Đường thẳng x = x₀ được gọi là đường tiệm cận đứng của đồ thị hàm số y = f(x) nếu điều kiện nào sau đây được thoả mãn?",
      "opts": [
        "Ít nhất một trong các giới hạn: lim<sub style=\"font-size:0.8em\">x→x₀⁺</sub> f(x) = ±∞ hoặc lim<sub style=\"font-size:0.8em\">x→x₀⁻</sub> f(x) = ±∞.",
        "lim<sub style=\"font-size:0.8em\">x→+∞</sub> f(x) = x₀.",
        "f(x₀) = 0.",
        "f'(x₀) = ±∞."
      ],
      "ans": 0,
      "correctText": "Phương án A: Ít nhất một trong các giới hạn: lim<sub style=\"font-size:0.8em\">x→x₀⁺</sub> f(x) = ±∞ hoặc lim<sub style=\"font-size:0.8em\">x→x₀⁻</sub> f(x) = ±∞.",
      "exp": "• <b>Định nghĩa tiệm cận đứng (SGK Toán 12):</b> Đường thẳng x = x₀ là tiệm cận đứng của đồ thị hàm số y = f(x) nếu ít nhất một trong bốn điều kiện sau được thỏa mãn:<br>lim<sub style=\"font-size:0.8em\">x→x₀⁺</sub> f(x) = +∞; lim<sub style=\"font-size:0.8em\">x→x₀⁺</sub> f(x) = -∞; lim<sub style=\"font-size:0.8em\">x→x₀⁻</sub> f(x) = +∞; lim<sub style=\"font-size:0.8em\">x→x₀⁻</sub> f(x) = -∞."
    },
    {
      "type": "mcq",
      "q": "Tìm toạ độ giao điểm I của hai đường tiệm cận của đồ thị hàm số y = <span class=\"fraction\"><span class=\"numerator\">3x - 1</span><span class=\"denominator\">x + 2</span></span>.",
      "opts": [
        "I(-2; 3)",
        "I(2; 3)",
        "I(-2; -1)",
        "I(3; -2)"
      ],
      "ans": 0,
      "correctText": "Phương án A: I(-2; 3)",
      "exp": "• Tiệm cận đứng: Nghiệm mẫu số x + 2 = 0 ⇔ <b>x = -2</b>.<br>• Tiệm cận ngang: Giới hạn lim<sub style=\"font-size:0.8em\">x→±∞</sub> y = 3/1 ⇒ <b>y = 3</b>.<br>• Giao điểm của hai đường tiệm cận là <b>I(-2; 3)</b> (đây cũng chính là tâm đối xứng của đồ thị)."
    },
    {
      "type": "mcq",
      "q": "Tìm phương trình đường tiệm cận xiên của đồ thị hàm số y = <span class=\"fraction\"><span class=\"numerator\">x² - 2x + 3</span><span class=\"denominator\">x - 1</span></span>.",
      "opts": [
        "y = x - 1",
        "y = x + 1",
        "y = 2x - 1",
        "y = x - 2"
      ],
      "ans": 0,
      "correctText": "Phương án A: y = x - 1",
      "exp": "• Thực hiện phép chia đa thức tử cho mẫu:<br><span class=\"fraction\"><span class=\"numerator\">x² - 2x + 3</span><span class=\"denominator\">x - 1</span></span> = <span class=\"fraction\"><span class=\"numerator\">x(x - 1) - (x - 1) + 2</span><span class=\"denominator\">x - 1</span></span> = (x - 1) + <span class=\"fraction\"><span class=\"numerator\">2</span><span class=\"denominator\">x - 1</span></span>.<br>• Do lim<sub style=\"font-size:0.8em\">x→±∞</sub> <span class=\"fraction\"><span class=\"numerator\">2</span><span class=\"denominator\">x - 1</span></span> = 0 nên đường tiệm cận xiên là <b>y = x - 1</b>."
    },
    {
      "type": "tf",
      "q": "Cho hàm số y = f(x) = <span class=\"fraction\"><span class=\"numerator\">2x² - 3x + 5</span><span class=\"denominator\">x - 2</span></span>. Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Tập xác định của hàm số là D = ℝ \\ {2}.",
        "Đường thẳng x = 2 là tiệm cận đứng của đồ thị hàm số.",
        "Đường thẳng y = 2x + 1 là tiệm cận xiên của đồ thị hàm số.",
        "Giao điểm của hai đường tiệm cận có toạ độ là I(2; 5)."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Mẫu số x - 2 ≠ 0 ⇔ x ≠ 2 ⇒ D = ℝ \\ {2}.<br>• <b>Ý b [Đúng]:</b> lim<sub style=\"font-size:0.8em\">x→2⁺</sub> f(x) = +∞ (tử số bằng 7 > 0, mẫu tiến về 0⁺) ⇒ x = 2 là tiệm cận đứng.<br>• <b>Ý c [Đúng]:</b> Chia đa thức: 2x² - 3x + 5 = (2x + 1)(x - 2) + 7 ⇒ f(x) = 2x + 1 + <span class=\"fraction\"><span class=\"numerator\">7</span><span class=\"denominator\">x - 2</span></span>. Vì lim<sub style=\"font-size:0.8em\">x→±∞</sub> <span class=\"fraction\"><span class=\"numerator\">7</span><span class=\"denominator\">x - 2</span></span> = 0 nên tiệm cận xiên là y = 2x + 1.<br>• <b>Ý d [Đúng]:</b> Thay x = 2 vào pt tiệm cận xiên: y = 2(2) + 1 = 5 ⇒ Giao điểm I(2; 5)."
    },
    {
      "type": "match",
      "q": "Ghép các mô hình hàm số thực tế (Cột A) với giá trị tiệm cận tương ứng khi thời gian t hoặc số lượng x tăng rất lớn (Cột B):",
      "colA": [
        "Chi phí trung bình: C̄(x) = 50 + <span class=\"fraction\"><span class=\"numerator\">2000</span><span class=\"denominator\">x</span></span> (nghìn đồng/sản phẩm)",
        "Nồng độ muối trong bể: S(t) = <span class=\"fraction\"><span class=\"numerator\">30t</span><span class=\"denominator\">t + 10</span></span> (gam/lít, t ≥ 0)",
        "Vận tốc rơi có lực cản: v(t) = 40(1 - e⁻⁰·²ᵗ) (m/s, t ≥ 0)",
        "Tỷ lệ dân số dùng Internet: P(t) = <span class=\"fraction\"><span class=\"numerator\">95</span><span class=\"denominator\">1 + 9e⁻⁰·⁵ᵗ</span></span> (%)"
      ],
      "colB": [
        "Tiệm cận ngang y = 30 gam/lít",
        "Tiệm cận ngang y = 50 nghìn đồng",
        "Tiệm cận ngang y = 95%",
        "Tiệm cận ngang y = 40 m/s (vận tốc giới hạn)"
      ],
      "ans": [
        1,
        0,
        3,
        2
      ],
      "correctText": "1-B • 2-A • 3-D • 4-C",
      "exp": "• <b>1 ghép B:</b> Khi x → +∞ thì 2000/x → 0 ⇒ C̄(x) → 50.<br>• <b>2 ghép A:</b> Khi t → +∞ thì 30t/(t + 10) → 30.<br>• <b>3 ghép D:</b> Khi t → +∞ thì e⁻⁰·²ᵗ → 0 ⇒ v(t) → 40 m/s.<br>• <b>4 ghép C:</b> Khi t → +∞ thì e⁻⁰·⁵ᵗ → 0 ⇒ P(t) → 95%."
    },
    {
      "type": "drag",
      "q": "Chọn công thức thích hợp điền vào chỗ trống để hoàn thiện phương pháp tìm hệ số a, b của tiệm cận xiên y = ax + b:",
      "text": "Đường thẳng y = ax + b (a ≠ 0) là tiệm cận xiên của đồ thị y = f(x) khi x → +∞ nếu: a = lim<sub style=\"font-size:0.8em\">x→+∞</sub> [blank] và b = lim<sub style=\"font-size:0.8em\">x→+∞</sub> [blank]. Hoặc nếu phân tích được f(x) = ax + b + g(x) với lim<sub style=\"font-size:0.8em\">x→+∞</sub> g(x) = [blank].",
      "words": [
        "<span class=\"fraction\"><span class=\"numerator\">f(x)</span><span class=\"denominator\">x</span></span>",
        "[f(x) - ax]",
        "0",
        "f'(x)",
        "1"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "(1) <span class=\"fraction\"><span class=\"numerator\">f(x)</span><span class=\"denominator\">x</span></span> • (2) [f(x) - ax] • (3) 0",
      "exp": "• <b>Phương pháp chuẩn tìm tiệm cận xiên:</b><br>1. Hệ số góc a = lim<sub style=\"font-size:0.8em\">x→+∞</sub> [f(x)/x] (a ≠ 0).<br>2. Tung độ gốc b = lim<sub style=\"font-size:0.8em\">x→+∞</sub> [f(x) - ax].<br>3. Phần dư g(x) phải có giới hạn bằng 0 khi x tiến ra vô cực."
    },
    {
      "type": "mcq",
      "q": "Cho hàm số y = f(x) có đồ thị với hai đường tiệm cận được biểu diễn bằng nét đứt trên hình vẽ bên. Phương trình của hai đường tiệm cận đó là:",
      "opts": [
        "Tiệm cận đứng x = 1 và tiệm cận xiên y = x + 1",
        "Tiệm cận đứng x = -1 và tiệm cận xiên y = x - 1",
        "Tiệm cận đứng x = 1 và tiệm cận ngang y = 2",
        "Tiệm cận đứng x = 2 và tiệm cận xiên y = 2x + 1"
      ],
      "ans": 0,
      "correctText": "Phương án A: Tiệm cận đứng x = 1 và tiệm cận xiên y = x + 1",
      "exp": "• Dựa vào hình vẽ:<br>- Đường nét đứt thẳng đứng đi qua điểm có hoành độ x = 1 trên trục Ox ⇒ <b>Tiệm cận đứng: x = 1</b>.<br>- Đường nét đứt nghiêng đi qua điểm (0; 1) và (-1; 0) có hệ số góc a = 1 ⇒ <b>Tiệm cận xiên: y = x + 1</b>.",
      "svgGraph": "<svg viewBox=\"0 0 380 230\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrow3\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n  </defs>\n  <rect x=\"8\" y=\"8\" width=\"364\" height=\"214\" rx=\"10\" fill=\"rgba(15,23,42,0.95)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/>\n  <!-- Axes: O at (150, 130), scale = 35 -->\n  <line x1=\"25\" y1=\"130\" x2=\"355\" y2=\"130\" stroke=\"rgba(255,255,255,0.4)\" stroke-width=\"1.4\" marker-end=\"url(#arrow3)\"/>\n  <line x1=\"150\" y1=\"210\" x2=\"150\" y2=\"20\" stroke=\"rgba(255,255,255,0.4)\" stroke-width=\"1.4\" marker-end=\"url(#arrow3)\"/>\n  <text x=\"355\" y=\"122\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"700\">x</text>\n  <text x=\"160\" y=\"24\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"700\">y</text>\n  <text x=\"136\" y=\"145\" fill=\"#cbd5e1\" font-size=\"12\" font-style=\"italic\">O</text>\n\n  <!-- Vertical Asymptote at x = 1 -> X = 185 -->\n  <line x1=\"185\" y1=\"20\" x2=\"185\" y2=\"210\" stroke=\"#f43f5e\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/>\n  <circle cx=\"185\" cy=\"130\" r=\"3\" fill=\"#f43f5e\"/>\n  <text x=\"190\" y=\"145\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"700\">1</text>\n\n  <!-- Oblique Asymptote: y = x + 1 passes through (0, 1)->(150, 95) and (-1, 0)->(115, 130) -->\n  <line x1=\"45\" y1=\"200\" x2=\"305\" y2=\"40\" stroke=\"#fbbf24\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/>\n  <circle cx=\"115\" cy=\"130\" r=\"3\" fill=\"#fbbf24\"/>\n  <text x=\"110\" y=\"145\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"700\">-1</text>\n  <circle cx=\"150\" cy=\"95\" r=\"3\" fill=\"#fbbf24\"/>\n  <text x=\"135\" y=\"98\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"700\">1</text>\n\n  <!-- Two branches of the hyperbola -->\n  <path d=\"M 45 175 C 100 160 145 160 170 215\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.4\"/>\n  <path d=\"M 200 20 C 215 70 250 80 340 55\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.4\"/>\n</svg>"
    },
    {
      "type": "mcq",
      "q": "Số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số y = <span class=\"fraction\"><span class=\"numerator\">x - 1</span><span class=\"denominator\">√(x² - 4)</span></span> là:",
      "opts": [
        "4 đường tiệm cận (2 đứng, 2 ngang)",
        "3 đường tiệm cận (2 đứng, 1 ngang)",
        "2 đường tiệm cận (1 đứng, 1 ngang)",
        "1 đường tiệm cận"
      ],
      "ans": 0,
      "correctText": "Phương án A: 4 đường tiệm cận (2 đứng, 2 ngang)",
      "exp": "• <b>Tập xác định:</b> x² - 4 > 0 ⇔ x ∈ (-∞; -2) ∪ (2; +∞).<br>• <b>Tiệm cận đứng:</b><br>- lim<sub style=\"font-size:0.8em\">x→2⁺</sub> y = +∞ ⇒ <b>x = 2</b> là TCĐ.<br>- lim<sub style=\"font-size:0.8em\">x→-2⁻</sub> y = -∞ ⇒ <b>x = -2</b> là TCĐ. (Có 2 TCĐ).<br>• <b>Tiệm cận ngang:</b><br>- lim<sub style=\"font-size:0.8em\">x→+∞</sub> <span class=\"fraction\"><span class=\"numerator\">x(1 - 1/x)</span><span class=\"denominator\">x√(1 - 4/x²)</span></span> = 1 ⇒ <b>y = 1</b>.<br>- lim<sub style=\"font-size:0.8em\">x→-∞</sub> <span class=\"fraction\"><span class=\"numerator\">x(1 - 1/x)</span><span class=\"denominator\">-x√(1 - 4/x²)</span></span> = -1 ⇒ <b>y = -1</b>. (Có 2 TCN).<br>• Tổng cộng đồ thị có <b>4 đường tiệm cận</b>."
    },
    {
      "type": "tf",
      "q": "Một công ty sản xuất thiết bị gia dụng có tổng chi phí sản xuất x nghìn sản phẩm (tính bằng triệu đồng) là C(x) = 50 + 2x + 0,001x². Chi phí trung bình để sản xuất một nghìn sản phẩm là C̄(x) = <span class=\"fraction\"><span class=\"numerator\">C(x)</span><span class=\"denominator\">x</span></span>. Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Hàm chi phí trung bình là C̄(x) = <span class=\"fraction\"><span class=\"numerator\">50</span><span class=\"denominator\">x</span></span> + 2 + 0,001x (với x > 0).",
        "Đồ thị hàm số chi phí trung bình có tiệm cận đứng là trục tung x = 0.",
        "Đồ thị hàm số chi phí trung bình có tiệm cận xiên là đường thẳng y = 0,001x + 2.",
        "Khi quy mô sản xuất x tăng lên vô cùng lớn, chi phí trung bình trên mỗi sản phẩm tiến dần về 2 triệu đồng."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Sai",
      "exp": "• <b>Ý a [Đúng]:</b> C̄(x) = C(x)/x = 50/x + 2 + 0,001x.<br>• <b>Ý b [Đúng]:</b> lim<sub style=\"font-size:0.8em\">x→0⁺</sub> C̄(x) = +∞ nên trục tung x = 0 là tiệm cận đứng.<br>• <b>Ý c [Đúng]:</b> lim<sub style=\"font-size:0.8em\">x→+∞</sub> [C̄(x) - (0,001x + 2)] = lim<sub style=\"font-size:0.8em\">x→+∞</sub> (50/x) = 0 nên y = 0,001x + 2 là tiệm cận xiên.<br>• <b>Ý d [Sai]:</b> Khi x → +∞, chi phí trung bình tăng dần theo tiệm cận xiên (tiến ra vô cực) do chi phí lưu kho và quản lý (thành phần 0,001x²), không phải tiến về 2 triệu đồng."
    },
    {
      "type": "mcq",
      "q": "Một hồ chứa nước sinh hoạt bị nhiễm bẩn hữu cơ. Nồng độ chất ô nhiễm P(t) (đơn vị: mg/L) sau t ngày xử lý bằng hệ thống lọc tuần hoàn được mô hình hoá bởi P(t) = <span class=\"fraction\"><span class=\"numerator\">120</span><span class=\"denominator\">3t + 8</span></span> + 5. Khi hệ thống lọc vận hành liên tục trong thời gian rất dài (t → +∞), nồng độ chất ô nhiễm tồn dư tối thiểu trong hồ sẽ tiệm cận về giá trị nào?",
      "opts": [
        "5 mg/L",
        "20 mg/L",
        "0 mg/L",
        "15 mg/L"
      ],
      "ans": 0,
      "correctText": "Phương án A: 5 mg/L",
      "exp": "• Ta tính giới hạn của hàm nồng độ khi thời gian t tiến ra vô cùng:<br>lim<sub style=\"font-size:0.8em\">t→+∞</sub> P(t) = lim<sub style=\"font-size:0.8em\">t→+∞</sub> [<span class=\"fraction\"><span class=\"numerator\">120</span><span class=\"denominator\">3t + 8</span></span> + 5] = 0 + 5 = <b>5 mg/L</b>.<br>• Về mặt hình học, đường thẳng y = 5 là đường tiệm cận ngang của đồ thị, thể hiện ngưỡng nồng độ nền tối thiểu không thể lọc sạch hoàn toàn."
    }
  ],
  "4": [
    {
      "type": "mcq",
      "q": "Khi khảo sát và vẽ đồ thị hàm số đa thức bậc ba y = ax³ + bx² + cx + d (a ≠ 0), điểm uốn của đồ thị (điểm có hoành độ là nghiệm của y'' = 0) có vai trò gì?",
      "opts": [
        "Là tâm đối xứng của đồ thị hàm số.",
        "Là trục đối xứng của đồ thị hàm số.",
        "Luôn luôn là điểm cực đại của hàm số.",
        "Luôn luôn là điểm cực tiểu của hàm số."
      ],
      "ans": 0,
      "correctText": "Phương án A: Là tâm đối xứng của đồ thị hàm số.",
      "exp": "• <b>Tính chất hình học của đồ thị hàm bậc ba (SGK Toán 12):</b> Đồ thị của mọi hàm số bậc ba y = ax³ + bx² + cx + d (a ≠ 0) luôn nhận điểm uốn I(x₀; y₀) với x₀ = -b/(3a) làm <b>tâm đối xứng</b>."
    },
    {
      "type": "mcq",
      "q": "Tìm toạ độ tâm đối xứng I của đồ thị hàm số y = x³ - 3x + 1.",
      "opts": [
        "I(0; 1)",
        "I(1; -1)",
        "I(-1; 3)",
        "I(0; 0)"
      ],
      "ans": 0,
      "correctText": "Phương án A: I(0; 1)",
      "exp": "• y' = 3x² - 3.<br>• y'' = 6x.<br>• y'' = 0 ⇔ 6x = 0 ⇔ x = 0.<br>• Với x = 0 ⇒ y = 0³ - 3(0) + 1 = 1.<br>⇒ Toạ độ tâm đối xứng là <b>I(0; 1)</b>."
    },
    {
      "type": "mcq",
      "q": "Cho hàm số y = f(x) có đồ thị như hình vẽ bên. Số nghiệm thực của phương trình 2f(x) - 3 = 0 là:",
      "opts": [
        "3 nghiệm phân biệt",
        "2 nghiệm phân biệt",
        "1 nghiệm duy nhất",
        "4 nghiệm phân biệt"
      ],
      "ans": 0,
      "correctText": "Phương án A: 3 nghiệm phân biệt",
      "exp": "• Phương trình 2f(x) - 3 = 0 ⇔ f(x) = <span class=\"fraction\"><span class=\"numerator\">3</span><span class=\"denominator\">2</span></span> = 1,5.<br>• Quan sát đồ thị: Giá trị cực đại y<sub style=\"font-size:0.8em\">CĐ</sub> = 3 và giá trị cực tiểu y<sub style=\"font-size:0.8em\">CT</sub> = -1.<br>• Vì -1 < 1,5 < 3 nên đường thẳng nằm ngang y = 1,5 cắt đồ thị tại đúng <b>3 điểm phân biệt</b> (minh hoạ hình dưới):<div style=\"margin:12px 0; text-align:center;\">\n<svg viewBox=\"0 0 400 240\" width=\"100%\" max-width=\"400px\" height=\"180\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"8\" y=\"8\" width=\"384\" height=\"224\" rx=\"10\" fill=\"rgba(15,23,42,0.95)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/>\n  <line x1=\"25\" y1=\"120\" x2=\"375\" y2=\"120\" stroke=\"rgba(255,255,255,0.3)\" stroke-width=\"1.2\"/>\n  <line x1=\"200\" y1=\"220\" x2=\"200\" y2=\"18\" stroke=\"rgba(255,255,255,0.3)\" stroke-width=\"1.2\"/>\n  <path d=\"M 92.5,182.2 L 95.0,169.0 L 97.5,156.6 L 100.0,145.0 L 102.5,134.1 L 105.0,124.0 L 107.5,114.5 L 110.0,105.8 L 112.5,97.7 L 115.0,90.3 L 117.5,83.6 L 120.0,77.4 L 122.5,71.8 L 125.0,66.9 L 127.5,62.5 L 130.0,58.6 L 132.5,55.3 L 135.0,52.4 L 137.5,50.1 L 140.0,48.2 L 142.5,46.8 L 145.0,45.8 L 147.5,45.2 L 150.0,45.0 L 152.5,45.2 L 155.0,45.7 L 157.5,46.6 L 160.0,47.8 L 162.5,49.3 L 165.0,51.1 L 167.5,53.1 L 170.0,55.4 L 172.5,57.9 L 175.0,60.6 L 177.5,63.5 L 180.0,66.6 L 182.5,69.8 L 185.0,73.2 L 187.5,76.6 L 190.0,80.2 L 192.5,83.8 L 195.0,87.5 L 197.5,91.3 L 200.0,95.0 L 202.5,98.7 L 205.0,102.5 L 207.5,106.2 L 210.0,109.8 L 212.5,113.4 L 215.0,116.8 L 217.5,120.2 L 220.0,123.4 L 222.5,126.5 L 225.0,129.4 L 227.5,132.1 L 230.0,134.6 L 232.5,136.9 L 235.0,138.9 L 237.5,140.7 L 240.0,142.2 L 242.5,143.4 L 245.0,144.3 L 247.5,144.8 L 250.0,145.0 L 252.5,144.8 L 255.0,144.2 L 257.5,143.2 L 260.0,141.8 L 262.5,139.9 L 265.0,137.6 L 267.5,134.7 L 270.0,131.4 L 272.5,127.5 L 275.0,123.1 L 277.5,118.2 L 280.0,112.6 L 282.5,106.4 L 285.0,99.7 L 287.5,92.3 L 290.0,84.2 L 292.5,75.5 L 295.0,66.0 L 297.5,55.9 L 300.0,45.0 L 302.5,33.4 L 305.0,21.0 L 307.5,7.8\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.2\"/>\n  <!-- Extreme dots -->\n  <circle cx=\"150\" cy=\"45\" r=\"3\" fill=\"#34d399\"/>\n  <text x=\"210\" y=\"48\" fill=\"#cbd5e1\" font-size=\"11\">y=3</text>\n  <circle cx=\"250\" cy=\"145\" r=\"3\" fill=\"#f43f5e\"/>\n  <text x=\"210\" y=\"148\" fill=\"#cbd5e1\" font-size=\"11\">y=-1</text>\n  <!-- Horizontal line y = 1.5 at Y = 82.5 -->\n  <line x1=\"20\" y1=\"82.5\" x2=\"380\" y2=\"82.5\" stroke=\"#fbbf24\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/>\n  <text x=\"25\" y=\"75\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"800\">y = 1,5</text>\n  <!-- 3 Exact Intersection points -->\n  <circle cx=\"118.5\" cy=\"82.5\" r=\"5\" fill=\"#fbbf24\"/>\n  <circle cx=\"191.5\" cy=\"82.5\" r=\"5\" fill=\"#fbbf24\"/>\n  <circle cx=\"290.0\" cy=\"82.5\" r=\"5\" fill=\"#fbbf24\"/>\n</svg>\n</div>⇒ Phương trình có đúng <b>3 nghiệm thực</b> phân biệt.",
      "svgGraph": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n  </defs>\n  <rect x=\"8\" y=\"8\" width=\"384\" height=\"224\" rx=\"10\" fill=\"rgba(15,23,42,0.95)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/>\n  <!-- Axes -->\n  <line x1=\"25\" y1=\"120\" x2=\"375\" y2=\"120\" stroke=\"rgba(255,255,255,0.4)\" stroke-width=\"1.4\" marker-end=\"url(#arrow)\"/>\n  <line x1=\"200\" y1=\"220\" x2=\"200\" y2=\"18\" stroke=\"rgba(255,255,255,0.4)\" stroke-width=\"1.4\" marker-end=\"url(#arrow)\"/>\n  <text x=\"375\" y=\"112\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"700\">x</text>\n  <text x=\"210\" y=\"24\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"700\">y</text>\n  <text x=\"188\" y=\"136\" fill=\"#cbd5e1\" font-size=\"12\" font-style=\"italic\">O</text>\n\n  <!-- Projection dashed lines for Peak (-1; 3) -->\n  <line x1=\"150\" y1=\"45\" x2=\"150\" y2=\"120\" stroke=\"rgba(56,189,248,0.6)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <line x1=\"150\" y1=\"45\" x2=\"200\" y2=\"45\" stroke=\"rgba(56,189,248,0.6)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"145\" y=\"136\" fill=\"#cbd5e1\" font-size=\"12\" text-anchor=\"middle\">-1</text>\n  <text x=\"212\" y=\"49\" fill=\"#cbd5e1\" font-size=\"12\">3</text>\n\n  <!-- Projection dashed lines for Trough (1; -1) -->\n  <line x1=\"250\" y1=\"145\" x2=\"250\" y2=\"120\" stroke=\"rgba(244,63,94,0.6)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <line x1=\"250\" y1=\"145\" x2=\"200\" y2=\"145\" stroke=\"rgba(244,63,94,0.6)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"250\" y=\"114\" fill=\"#cbd5e1\" font-size=\"12\" text-anchor=\"middle\">1</text>\n  <text x=\"185\" y=\"149\" fill=\"#cbd5e1\" font-size=\"12\" text-anchor=\"end\">-1</text>\n\n  <!-- Cubic Curve -->\n  <path d=\"M 92.5,182.2 L 95.0,169.0 L 97.5,156.6 L 100.0,145.0 L 102.5,134.1 L 105.0,124.0 L 107.5,114.5 L 110.0,105.8 L 112.5,97.7 L 115.0,90.3 L 117.5,83.6 L 120.0,77.4 L 122.5,71.8 L 125.0,66.9 L 127.5,62.5 L 130.0,58.6 L 132.5,55.3 L 135.0,52.4 L 137.5,50.1 L 140.0,48.2 L 142.5,46.8 L 145.0,45.8 L 147.5,45.2 L 150.0,45.0 L 152.5,45.2 L 155.0,45.7 L 157.5,46.6 L 160.0,47.8 L 162.5,49.3 L 165.0,51.1 L 167.5,53.1 L 170.0,55.4 L 172.5,57.9 L 175.0,60.6 L 177.5,63.5 L 180.0,66.6 L 182.5,69.8 L 185.0,73.2 L 187.5,76.6 L 190.0,80.2 L 192.5,83.8 L 195.0,87.5 L 197.5,91.3 L 200.0,95.0 L 202.5,98.7 L 205.0,102.5 L 207.5,106.2 L 210.0,109.8 L 212.5,113.4 L 215.0,116.8 L 217.5,120.2 L 220.0,123.4 L 222.5,126.5 L 225.0,129.4 L 227.5,132.1 L 230.0,134.6 L 232.5,136.9 L 235.0,138.9 L 237.5,140.7 L 240.0,142.2 L 242.5,143.4 L 245.0,144.3 L 247.5,144.8 L 250.0,145.0 L 252.5,144.8 L 255.0,144.2 L 257.5,143.2 L 260.0,141.8 L 262.5,139.9 L 265.0,137.6 L 267.5,134.7 L 270.0,131.4 L 272.5,127.5 L 275.0,123.1 L 277.5,118.2 L 280.0,112.6 L 282.5,106.4 L 285.0,99.7 L 287.5,92.3 L 290.0,84.2 L 292.5,75.5 L 295.0,66.0 L 297.5,55.9 L 300.0,45.0 L 302.5,33.4 L 305.0,21.0 L 307.5,7.8\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.6\"/>\n\n  <!-- Extreme Points (Dots) -->\n  <circle cx=\"150\" cy=\"45\" r=\"4\" fill=\"#34d399\"/>\n  <circle cx=\"250\" cy=\"145\" r=\"4\" fill=\"#f43f5e\"/>\n</svg>"
    },
    {
      "type": "tf",
      "q": "Cho hàm số y = f(x) = <span class=\"fraction\"><span class=\"numerator\">x + 1</span><span class=\"denominator\">x - 1</span></span> có đồ thị (C). Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Hàm số nghịch biến trên từng khoảng (-∞; 1) và (1; +∞).",
        "Đồ thị (C) nhận giao điểm I(1; 1) của hai đường tiệm cận làm tâm đối xứng.",
        "Đồ thị (C) cắt trục tung tại điểm A(0; -1) và cắt trục hoành tại B(-1; 0).",
        "Tiếp tuyến của (C) tại điểm có hoành độ x₀ = 2 có hệ số góc k = -2."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> y' = -2/(x - 1)² < 0, ∀x ≠ 1 nên hàm số nghịch biến trên (-∞; 1) và (1; +∞).<br>• <b>Ý b [Đúng]:</b> TCĐ: x = 1, TCN: y = 1 ⇒ Giao điểm I(1; 1) là tâm đối xứng của hypebol.<br>• <b>Ý c [Đúng]:</b> Cho x = 0 ⇒ y = -1 ⇒ A(0; -1). Cho y = 0 ⇒ x = -1 ⇒ B(-1; 0).<br>• <b>Ý d [Đúng]:</b> Hệ số góc k = y'(2) = -2/(2 - 1)² = -2."
    },
    {
      "type": "match",
      "q": "Ghép các hiện tượng/kết cấu thực tế dạng đường cong (Cột A) với dạng hàm số tương ứng mô tả (Cột B):",
      "colA": [
        "Cổng parabol của trường đại học Bách Khoa",
        "Mặt cắt con dốc uốn lượn có điểm đổi chiều gia tốc",
        "Đường cong học tập biểu thị hiệu suất làm việc ban đầu tăng nhanh sau đó bão hoà",
        "Đường ray tàu lượn siêu tốc vòng cung đối xứng"
      ],
      "colB": [
        "Đồ thị hàm đa thức bậc ba y = ax³ + bx² + cx + d (có điểm uốn)",
        "Đồ thị hàm số bậc hai y = ax² + bx + c (a < 0)",
        "Đồ thị hàm phân thức bậc nhất y = <span class=\"fraction\"><span class=\"numerator\">ax + b</span><span class=\"denominator\">cx + d</span></span> (có tiệm cận ngang)",
        "Đồ thị hàm trùng phương y = ax⁴ + bx² + c"
      ],
      "ans": [
        1,
        0,
        2,
        3
      ],
      "correctText": "1-B • 2-A • 3-C • 4-D",
      "exp": "• <b>1 ghép B:</b> Cổng vòm có dạng parabol úp (bậc hai a < 0).<br>• <b>2 ghép A:</b> Con dốc đổi chiều cong từ lồi sang lõm tương ứng điểm uốn đồ thị bậc ba.<br>• <b>3 ghép C:</b> Hiệu suất tiến dần đến tiệm cận ngang khi thời gian đủ lớn.<br>• <b>4 ghép D:</b> Đường ray đối xứng qua trục tung có dạng hàm trùng phương bậc bốn."
    },
    {
      "type": "drag",
      "q": "Chọn thuật ngữ thích hợp điền vào chỗ trống để hoàn thiện đặc điểm tâm đối xứng của đồ thị hàm phân thức hữu tỉ:",
      "text": "Đồ thị của hàm số phân thức bậc nhất trên bậc nhất y = <span class=\"fraction\"><span class=\"numerator\">ax + b</span><span class=\"denominator\">cx + d</span></span> (c ≠ 0, ad - bc ≠ 0) nhận [blank] của hai đường [blank] làm [blank] của đồ thị.",
      "words": [
        "giao điểm",
        "tiệm cận",
        "tâm đối xứng",
        "trục đối xứng",
        "trung điểm"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "(1) giao điểm • (2) tiệm cận • (3) tâm đối xứng",
      "exp": "• <b>Định lý hình học phân thức:</b> Đồ thị hypebol của hàm y = (ax + b)/(cx + d) luôn nhận <b>giao điểm của hai đường tiệm cận</b> làm <b>tâm đối xứng</b>."
    },
    {
      "type": "mcq",
      "q": "Tìm tất cả các giá trị thực của tham số m để đồ thị hàm số y = x³ - 3x² + 2 cắt đường thẳng d: y = m tại 3 điểm phân biệt.",
      "opts": [
        "-2 < m < 2",
        "-2 ≤ m ≤ 2",
        "m < -2 hoặc m > 2",
        "m = 0"
      ],
      "ans": 0,
      "correctText": "Phương án A: -2 < m < 2",
      "exp": "• y' = 3x² - 6x = 0 ⇔ x = 0 hoặc x = 2.<br>• Cực đại: y(0) = 2. Cực tiểu: y(2) = 8 - 12 + 2 = -2.<br>• Để đường thẳng y = m cắt đồ thị tại 3 điểm phân biệt thì giá trị m phải nằm giữa giá trị cực tiểu và cực đại: <b>-2 < m < 2</b>."
    },
    {
      "type": "mcq",
      "q": "Cho hàm số y = <span class=\"fraction\"><span class=\"numerator\">x² + x + 1</span><span class=\"denominator\">x + 1</span></span>. Điểm cực đại của đồ thị hàm số là:",
      "opts": [
        "M(-2; -3)",
        "M(0; 1)",
        "M(-2; 3)",
        "M(0; -1)"
      ],
      "ans": 0,
      "correctText": "Phương án A: M(-2; -3)",
      "exp": "• y = x + <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">x + 1</span></span> ⇒ y' = 1 - <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">(x + 1)²</span></span> = <span class=\"fraction\"><span class=\"numerator\">(x + 1)² - 1</span><span class=\"denominator\">(x + 1)²</span></span> = <span class=\"fraction\"><span class=\"numerator\">x(x + 2)</span><span class=\"denominator\">(x + 1)²</span></span>.<br>• y' = 0 ⇔ x = 0 hoặc x = -2.<br>• Qua x = -2, y' đổi dấu từ (+) sang (-) nên x = -2 là điểm cực đại. y(-2) = (4 - 2 + 1)/(-1) = -3.<br>⇒ Toạ độ điểm cực đại của đồ thị là <b>M(-2; -3)</b>."
    },
    {
      "type": "tf",
      "q": "Một quả bóng được sút lên từ mặt đất, quỹ đạo độ cao h(t) (tính bằng mét) theo thời gian t (tính bằng giây) được mô hình hoá bởi đồ thị parabol: h(t) = -5t² + 20t (t ≥ 0). Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Quả bóng chạm đất sau 4 giây kể từ khi được sút.",
        "Vận tốc tức thời của quả bóng là v(t) = h'(t) = -10t + 20 (m/s).",
        "Quả bóng đạt độ cao cực đại tại thời điểm t = 2 giây.",
        "Độ cao cực đại mà quả bóng đạt được là 20 mét."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> h(t) = 0 ⇔ -5t(t - 4) = 0 ⇔ t = 4 giây (chạm đất).<br>• <b>Ý b [Đúng]:</b> Vận tốc tức thời v(t) = h'(t) = -10t + 20 m/s.<br>• <b>Ý c [Đúng]:</b> v(t) = 0 ⇔ t = 2 giây.<br>• <b>Ý d [Đúng]:</b> Độ cao lớn nhất h(2) = -5(4) + 20(2) = -20 + 40 = 20 mét."
    },
    {
      "type": "mcq",
      "q": "Một tuyến đường ray sắt trên cao uốn lượn được thiết kế theo đồ thị hàm số y = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">3</span></span>x³ - x (km) với -2 ≤ x ≤ 2. Điểm chuyển giao nơi đoàn tàu đổi hướng bẻ lái (gia tốc đổi dấu, tương ứng điểm uốn đồ thị) có toạ độ là:",
      "opts": [
        "(0; 0)",
        "(1; -2/3)",
        "(-1; 2/3)",
        "(2; 2/3)"
      ],
      "ans": 0,
      "correctText": "Phương án A: (0; 0)",
      "exp": "• y' = x² - 1.<br>• y'' = 2x.<br>• Gia tốc đổi chiều khi y'' = 0 ⇔ 2x = 0 ⇔ x = 0.<br>• Với x = 0 ⇒ y = 0. Vậy toạ độ điểm chuyển giao là gốc toạ độ <b>(0; 0)</b>."
    }
  ],
  "5": [
    {
      "type": "mcq",
      "q": "Trong phân tích kinh tế vi mô, nếu C(x) là tổng hàm chi phí sản xuất x đơn vị sản phẩm thì đạo hàm C'(x) biểu thị đại lượng kinh tế nào?",
      "opts": [
        "Chi phí biên (Marginal Cost) - chi phí xấp xỉ để sản xuất thêm 1 đơn vị sản phẩm tiếp theo.",
        "Chi phí trung bình trên mỗi sản phẩm.",
        "Tổng lợi nhuận của doanh nghiệp.",
        "Doanh thu thuần của doanh nghiệp."
      ],
      "ans": 0,
      "correctText": "Phương án A: Chi phí biên (Marginal Cost) - chi phí xấp xỉ để sản xuất thêm 1 đơn vị sản phẩm tiếp theo.",
      "exp": "• <b>Khái niệm kinh tế (SGK Toán 12):</b> Đạo hàm C'(x) của hàm chi phí C(x) được gọi là <b>chi phí biên</b> (Marginal Cost). Nó phản ánh tốc độ gia tăng chi phí và xấp xỉ chi phí phát sinh để sản xuất thêm một đơn vị sản phẩm thứ x + 1."
    },
    {
      "type": "mcq",
      "q": "Trong tất cả các hình chữ nhật có cùng chu vi 2p không đổi, hình chữ nhật có diện tích lớn nhất là:",
      "opts": [
        "Hình vuông có cạnh bằng p/2",
        "Hình chữ nhật có chiều dài gấp đôi chiều rộng",
        "Hình chữ nhật có chiều dài gấp ba chiều rộng",
        "Không tồn tại diện tích lớn nhất"
      ],
      "ans": 0,
      "correctText": "Phương án A: Hình vuông có cạnh bằng p/2",
      "exp": "• Gọi chiều dài là x, chiều rộng là p - x (0 < x < p).<br>• Diện tích: S(x) = x(p - x) = px - x².<br>• S'(x) = p - 2x = 0 ⇔ x = p/2.<br>• Chiều rộng khi đó là p - p/2 = p/2. Vậy hình chữ nhật có diện tích lớn nhất là <b>hình vuông cạnh p/2</b>."
    },
    {
      "type": "mcq",
      "q": "Một vật chuyển động thẳng với phương trình quãng đường s(t) = -t³ + 9t² + t (mét, t tính bằng giây). Vận tốc tức thời cực đại của vật đạt được tại thời điểm nào?",
      "opts": [
        "t = 3 giây",
        "t = 6 giây",
        "t = 9 giây",
        "t = 1 giây"
      ],
      "ans": 0,
      "correctText": "Phương án A: t = 3 giây",
      "exp": "• Vận tốc tức thời: v(t) = s'(t) = -3t² + 18t + 1.<br>• Vận tốc cực đại khi v'(t) = -6t + 18 = 0 ⇔ <b>t = 3 giây</b>.<br>• Khi đó vận tốc cực đại là v(3) = -3(9) + 18(3) + 1 = 28 m/s."
    },
    {
      "type": "tf",
      "q": "Một người nông dân có 120 mét lưới rào sắt muốn rào một khu đất hình chữ nhật giáp một bờ sông thẳng để trồng trọt (không cần rào phía bờ sông). Gọi x (mét) là chiều rộng của mảnh đất (cạnh vuông góc với bờ sông). Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Chiều dài của khu đất (cạnh song song với bờ sông) là y = 120 - 2x (m).",
        "Điều kiện thực tế của biến x là 0 < x < 60.",
        "Hàm số diện tích của khu đất là S(x) = 120x - 2x² (m²).",
        "Diện tích lớn nhất mà người nông dân có thể rào được là 1800 m² (đạt khi x = 30 m)."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Chu vi 3 cạnh rào: 2x + y = 120 ⇒ y = 120 - 2x.<br>• <b>Ý b [Đúng]:</b> Cạnh dương x > 0 và y = 120 - 2x > 0 ⇔ 0 < x < 60.<br>• <b>Ý c [Đúng]:</b> Diện tích S(x) = x · y = x(120 - 2x) = 120x - 2x².<br>• <b>Ý d [Đúng]:</b> S'(x) = 120 - 4x = 0 ⇔ x = 30 m (thỏa mãn). Diện tích tối đa là S(30) = 30(60) = 1800 m²."
    },
    {
      "type": "match",
      "q": "Ghép các tình huống ứng dụng tối ưu hoá trong đời sống (Cột A) với hàm mục tiêu cần khảo sát đạo hàm (Cột B):",
      "colA": [
        "Tối đa hoá thể tích hộp không nắp gập từ tấm bìa cạnh a",
        "Tối thiểu hoá tổng chi phí đặt đường ống nước từ trạm ven sông đến 2 khu dân cư",
        "Tối đa hoá lợi nhuận kinh doanh P(x) = R(x) - C(x)",
        "Tối thiểu hoá năng lượng tiêu hao của chim bay di cư theo vận tốc v"
      ],
      "colB": [
        "Khảo sát hàm thể tích V(x) = x(a - 2x)²",
        "Khảo sát hàm công suất E(v) = av³ + <span class=\"fraction\"><span class=\"numerator\">b</span><span class=\"denominator\">v</span></span>",
        "Khảo sát hàm hiệu số Doanh thu trừ Chi phí",
        "Khảo sát hàm tổng khoảng cách L(x) = √(x² + d₁²) + √((c - x)² + d₂²)"
      ],
      "ans": [
        0,
        3,
        2,
        1
      ],
      "correctText": "1-A • 2-D • 3-C • 4-B",
      "exp": "• <b>1 ghép A:</b> Thể tích V(x) = x(a - 2x)².<br>• <b>2 ghép D:</b> Chi phí tối thiểu theo tổng chiều dài đường ống dạng căn thức Pythagoras.<br>• <b>3 ghép C:</b> Lợi nhuận = Doanh thu - Chi phí.<br>• <b>4 ghép B:</b> Năng lượng bay của chim gồm lực cản khí động học (bậc ba) và lực nâng (nghịch đảo vận tốc)."
    },
    {
      "type": "drag",
      "q": "Chọn các cụm từ thích hợp điền vào chỗ trống để hoàn thiện quy trình 3 bước giải bài toán tối ưu hoá thực tế:",
      "text": "Bước 1: Xác định đại lượng cần tối ưu và thiết lập [blank] theo một biến số thích hợp, chỉ rõ [blank] của biến. Bước 2: Sử dụng công cụ [blank] để tìm giá trị lớn nhất hoặc giá trị nhỏ nhất của hàm số. Bước 3: [blank] kết quả tìm được theo đúng ngữ cảnh thực tế của bài toán.",
      "words": [
        "hàm mục tiêu",
        "tập xác định",
        "đạo hàm",
        "kết luận",
        "tích phân",
        "phương trình"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "(1) hàm mục tiêu • (2) tập xác định • (3) đạo hàm • (4) kết luận",
      "exp": "• <b>Quy trình giải bài toán tối ưu hoá (SGK Toán 12):</b><br>1. Xây dựng hàm mục tiêu f(x) và tìm khoảng biến thiên (tập xác định D).<br>2. Khảo sát đạo hàm f'(x), lập bảng biến thiên tìm max/min.<br>3. Trả lời và kết luận yêu cầu thực tế."
    },
    {
      "type": "mcq",
      "q": "Từ một tấm tôn hình vuông cạnh 60 cm, người ta cắt bỏ 4 hình vuông bằng nhau ở 4 góc rồi gập mép lại thành một chiếc hộp không nắp như hình vẽ. Cạnh của hình vuông bị cắt bỏ bằng bao nhiêu để chiếc hộp có thể tích lớn nhất?",
      "opts": [
        "x = 10 cm",
        "x = 15 cm",
        "x = 12 cm",
        "x = 8 cm"
      ],
      "ans": 0,
      "correctText": "Phương án A: x = 10 cm",
      "exp": "• Đáy hộp là hình vuông có cạnh là (60 - 2x) cm. Chiều cao hộp là x cm (0 < x < 30).<br>• Thể tích hộp: V(x) = x(60 - 2x)² = 4x(30 - x)².<br>• V'(x) = 4[(30 - x)² - 2x(30 - x)] = 4(30 - x)(30 - 3x).<br>• V'(x) = 0 ⇔ x = 10 cm (do 0 < x < 30).<br>• Vậy thể tích hộp lớn nhất khi cắt góc cạnh <b>x = 10 cm</b>.",
      "svgGraph": "<svg viewBox=\"0 0 360 220\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"340\" height=\"200\" rx=\"8\" fill=\"rgba(15,23,42,0.9)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/><rect x=\"80\" y=\"30\" width=\"160\" height=\"160\" fill=\"rgba(56,189,248,0.15)\" stroke=\"#38bdf8\" stroke-width=\"2\"/><rect x=\"80\" y=\"30\" width=\"35\" height=\"35\" fill=\"rgba(244,63,94,0.3)\" stroke=\"#f43f5e\" stroke-dasharray=\"3,3\"/><rect x=\"205\" y=\"30\" width=\"35\" height=\"35\" fill=\"rgba(244,63,94,0.3)\" stroke=\"#f43f5e\" stroke-dasharray=\"3,3\"/><rect x=\"80\" y=\"155\" width=\"35\" height=\"35\" fill=\"rgba(244,63,94,0.3)\" stroke=\"#f43f5e\" stroke-dasharray=\"3,3\"/><rect x=\"205\" y=\"155\" width=\"35\" height=\"35\" fill=\"rgba(244,63,94,0.3)\" stroke=\"#f43f5e\" stroke-dasharray=\"3,3\"/><text x=\"97\" y=\"52\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">x</text><text x=\"160\" y=\"25\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">60 cm</text><line x1=\"80\" y1=\"18\" x2=\"240\" y2=\"18\" stroke=\"#38bdf8\" stroke-width=\"1.2\"/><line x1=\"115\" y1=\"65\" x2=\"205\" y2=\"65\" stroke=\"#34d399\" stroke-dasharray=\"2,2\"/><line x1=\"115\" y1=\"155\" x2=\"205\" y2=\"155\" stroke=\"#34d399\" stroke-dasharray=\"2,2\"/><line x1=\"115\" y1=\"65\" x2=\"115\" y2=\"155\" stroke=\"#34d399\" stroke-dasharray=\"2,2\"/><line x1=\"205\" y1=\"65\" x2=\"205\" y2=\"155\" stroke=\"#34d399\" stroke-dasharray=\"2,2\"/><text x=\"160\" y=\"115\" fill=\"#34d399\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">Đáy hộp</text></svg>"
    },
    {
      "type": "mcq",
      "q": "Một chất điểm chuyển động thẳng có phương trình vị trí s(t) = t³ - 6t² + 24t (mét, t ≥ 0). Tại thời điểm gia tốc của chất điểm triệt tiêu (a(t) = 0), vận tốc tức thời của chất điểm bằng bao nhiêu?",
      "opts": [
        "12 m/s",
        "24 m/s",
        "0 m/s",
        "18 m/s"
      ],
      "ans": 0,
      "correctText": "Phương án A: 12 m/s",
      "exp": "• Vận tốc: v(t) = s'(t) = 3t² - 12t + 24.<br>• Gia tốc: a(t) = v'(t) = 6t - 12.<br>• Gia tốc triệt tiêu khi a(t) = 0 ⇔ 6t - 12 = 0 ⇔ t = 2 giây.<br>• Khi đó vận tốc tức thời: v(2) = 3(2²) - 12(2) + 24 = 12 - 24 + 24 = <b>12 m/s</b>."
    },
    {
      "type": "tf",
      "q": "Một doanh nghiệp độc quyền sản xuất một loại quạt tích điện thông minh. Chi phí sản xuất x nghìn chiếc quạt là C(x) = 2x² + 30x + 500 (triệu đồng). Giá bán của mỗi nghìn chiếc quạt phụ thuộc vào sản lượng x theo phương trình p(x) = 150 - x (triệu đồng). Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Tổng doanh thu khi tiêu thụ hết x nghìn chiếc quạt là R(x) = 150x - x² (triệu đồng).",
        "Hàm số lợi nhuận của doanh nghiệp là P(x) = -3x² + 120x - 500 (triệu đồng).",
        "Để lợi nhuận đạt mức tối đa, doanh nghiệp cần sản xuất và bán ra x = 20 nghìn chiếc quạt.",
        "Mức lợi nhuận tối đa mà doanh nghiệp có thể đạt được là 700 triệu đồng."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Doanh thu R(x) = x · p(x) = x(150 - x) = 150x - x².<br>• <b>Ý b [Đúng]:</b> Lợi nhuận P(x) = R(x) - C(x) = (150x - x²) - (2x² + 30x + 500) = -3x² + 120x - 500.<br>• <b>Ý c [Đúng]:</b> P'(x) = -6x + 120 = 0 ⇔ x = 20 (nghìn sản phẩm).<br>• <b>Ý d [Đúng]:</b> Lợi nhuận tối đa P(20) = -3(400) + 120(20) - 500 = -1200 + 2400 - 500 = 700 triệu đồng."
    },
    {
      "type": "mcq",
      "q": "Một quy định chuyển phát nhanh đường hàng không yêu cầu bưu kiện dạng hình hộp chữ nhật đáy hình vuông phải có tổng chiều dài (chiều cao h) và chu vi đáy (4x) không vượt quá 108 cm (tức h + 4x ≤ 108). Thể tích tối đa của một bưu kiện gửi được theo quy định này bằng bao nhiêu cm³?",
      "opts": [
        "11664 cm³",
        "8748 cm³",
        "12500 cm³",
        "9800 cm³"
      ],
      "ans": 0,
      "correctText": "Phương án A: 11664 cm³",
      "exp": "• Đáy vuông cạnh x, chiều cao h = 108 - 4x (0 < x < 27).<br>• Thể tích: V(x) = x²h = x²(108 - 4x) = 108x² - 4x³.<br>• V'(x) = 216x - 12x² = 12x(18 - x).<br>• V'(x) = 0 ⇔ x = 18 cm.<br>• Chiều cao tương ứng: h = 108 - 4(18) = 36 cm.<br>• Thể tích tối đa: V(18) = 18² · 36 = 324 · 36 = <b>11664 cm³</b>."
    }
  ],
  "6": [
    {
      "type": "mcq",
      "q": "Cho hình hộp ABCD.A'B'C'D'. Quy tắc hình hộp xác định vectơ đường chéo <span class=\"math-sym\">AC'</span> bằng tổng của ba vectơ nào có chung gốc A?",
      "opts": [
        "<span class=\"math-sym\">AC'</span> = <span class=\"math-sym\">AB</span> + <span class=\"math-sym\">AD</span> + <span class=\"math-sym\">AA'</span>",
        "<span class=\"math-sym\">AC'</span> = <span class=\"math-sym\">AB</span> + <span class=\"math-sym\">BC</span> + <span class=\"math-sym\">CD</span>",
        "<span class=\"math-sym\">AC'</span> = <span class=\"math-sym\">A'B'</span> + <span class=\"math-sym\">A'D'</span> + <span class=\"math-sym\">AA'</span>",
        "<span class=\"math-sym\">AC'</span> = <span class=\"math-sym\">AB</span> - <span class=\"math-sym\">AD</span> + <span class=\"math-sym\">AA'</span>"
      ],
      "ans": 0,
      "correctText": "Phương án A: <span class=\"math-sym\">AC'</span> = <span class=\"math-sym\">AB</span> + <span class=\"math-sym\">AD</span> + <span class=\"math-sym\">AA'</span>",
      "exp": "• <b>Quy tắc hình hộp (SGK Toán 12):</b> Cho hình hộp ABCD.A'B'C'D'. Vectơ đường chéo xuất phát từ đỉnh A bằng tổng ba vectơ cạnh xuất phát từ đỉnh A:<br><span class=\"math-sym\">AC'</span> = <span class=\"math-sym\">AB</span> + <span class=\"math-sym\">AD</span> + <span class=\"math-sym\">AA'</span>."
    },
    {
      "type": "mcq",
      "q": "Cho hình lập phương ABCD.A'B'C'D' có cạnh bằng a. Tính tích vô hướng <span class=\"math-sym\">AB</span> · <span class=\"math-sym\">A'C'</span>.",
      "opts": [
        "a²",
        "0",
        "a²√2",
        "-a²"
      ],
      "ans": 0,
      "correctText": "Phương án A: a²",
      "exp": "• Do A'B'C'D' là hình vuông cạnh a và <span class=\"math-sym\">A'C'</span> = <span class=\"math-sym\">AC</span> nên:<br><span class=\"math-sym\">AB</span> · <span class=\"math-sym\">A'C'</span> = <span class=\"math-sym\">AB</span> · <span class=\"math-sym\">AC</span> = |<span class=\"math-sym\">AB</span>| · |<span class=\"math-sym\">AC</span>| · cos(<span class=\"math-sym\">AB</span>, <span class=\"math-sym\">AC</span>).<br>• |<span class=\"math-sym\">AB</span>| = a, |<span class=\"math-sym\">AC</span>| = a√2, góc BAC = 45°.<br>• Tích vô hướng: a · a√2 · cos(45°) = a · a√2 · <span class=\"fraction\"><span class=\"numerator\">√2</span><span class=\"denominator\">2</span></span> = <b>a²</b>."
    },
    {
      "type": "mcq",
      "q": "Cho tứ diện đều ABCD cạnh bằng a. Góc giữa hai vectơ <span class=\"math-sym\">AB</span> và <span class=\"math-sym\">CD</span> bằng bao nhiêu độ?",
      "opts": [
        "90°",
        "60°",
        "45°",
        "120°"
      ],
      "ans": 0,
      "correctText": "Phương án A: 90°",
      "exp": "• Ta tính tích vô hướng: <span class=\"math-sym\">AB</span> · <span class=\"math-sym\">CD</span> = <span class=\"math-sym\">AB</span> · (<span class=\"math-sym\">AD</span> - <span class=\"math-sym\">AC</span>) = <span class=\"math-sym\">AB</span> · <span class=\"math-sym\">AD</span> - <span class=\"math-sym\">AB</span> · <span class=\"math-sym\">AC</span>.<br>• Vì tứ diện đều các mặt là tam giác đều cạnh a nên góc BAD = BAC = 60°:<br><span class=\"math-sym\">AB</span> · <span class=\"math-sym\">AD</span> = a · a · cos 60° = <span class=\"fraction\"><span class=\"numerator\">a²</span><span class=\"denominator\">2</span></span>.<br><span class=\"math-sym\">AB</span> · <span class=\"math-sym\">AC</span> = a · a · cos 60° = <span class=\"fraction\"><span class=\"numerator\">a²</span><span class=\"denominator\">2</span></span>.<br>• Do đó <span class=\"math-sym\">AB</span> · <span class=\"math-sym\">CD</span> = <span class=\"fraction\"><span class=\"numerator\">a²</span><span class=\"denominator\">2</span></span> - <span class=\"fraction\"><span class=\"numerator\">a²</span><span class=\"denominator\">2</span></span> = 0 ⇒ Hai vectơ vuông góc, góc giữa chúng bằng <b>90°</b>."
    },
    {
      "type": "tf",
      "q": "Cho hình hộp chữ nhật ABCD.A'B'C'D' có các cạnh AB = 3, AD = 4, AA' = 5. Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Vectơ tổng <span class=\"math-sym\">u</span> = <span class=\"math-sym\">AB</span> + <span class=\"math-sym\">AD</span> + <span class=\"math-sym\">AA'</span> bằng vectơ đường chéo <span class=\"math-sym\">AC'</span>.",
        "Độ dài của đường chéo hình hộp chữ nhật là AC' = 5√2.",
        "Tích vô hướng <span class=\"math-sym\">AB</span> · <span class=\"math-sym\">AD</span> = 0 do AB vuông góc với AD.",
        "Góc giữa hai vectơ <span class=\"math-sym\">AC</span> và <span class=\"math-sym\">AA'</span> bằng 45°."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Sai",
      "exp": "• <b>Ý a [Đúng]:</b> Theo quy tắc hình hộp: <span class=\"math-sym\">AB</span> + <span class=\"math-sym\">AD</span> + <span class=\"math-sym\">AA'</span> = <span class=\"math-sym\">AC'</span>.<br>• <b>Ý b [Đúng]:</b> AC' = √(AB² + AD² + AA'²) = √(3² + 4² + 5²) = √(9 + 16 + 25) = √50 = 5√2.<br>• <b>Ý c [Đúng]:</b> Đáy là hình chữ nhật nên AB ⊥ AD ⇒ <span class=\"math-sym\">AB</span> · <span class=\"math-sym\">AD</span> = 0.<br>• <b>Ý d [Sai]:</b> Đường thẳng AA' vuông góc với mặt phẳng đáy (ABCD) nên AA' ⊥ AC ⇒ góc giữa <span class=\"math-sym\">AC</span> và <span class=\"math-sym\">AA'</span> bằng 90°, không phải 45°."
    },
    {
      "type": "match",
      "q": "Ghép các tình huống hợp lực vectơ trong đời sống và kĩ thuật (Cột A) với điều kiện cân bằng/tổng hợp tương ứng (Cột B):",
      "colA": [
        "Một trụ đèn chiếu sáng công cộng đứng vững nhờ 3 sợi dây cáp chằng kéo xuống đất",
        "Một con tàu di chuyển trong lòng sông chịu tác dụng của lực đẩy chân vịt và lực cản dòng nước",
        "Bốn cánh quạt của máy bay không người lái (Drone) giữ máy bay lơ lửng tại chỗ",
        "Hai người cùng khiêng một thùng hàng bằng đòn gánh"
      ],
      "colB": [
        "Tổng 4 lực nâng vectơ cân bằng với trọng lực hướng xuống của Drone",
        "Hợp lực của 3 lực căng dây cáp và phản lực chân trụ cân bằng với trọng lực",
        "Tổng hai lực nâng của hai người bằng trọng lượng thùng hàng",
        "Vận tốc thực tế là tổng vectơ của vận tốc tàu đối với nước và vận tốc dòng nước"
      ],
      "ans": [
        1,
        3,
        0,
        2
      ],
      "correctText": "1-B • 2-D • 3-A • 4-C",
      "exp": "• <b>1 ghép B:</b> Hệ cân bằng tĩnh học: tổng các vectơ lực tác dụng lên trụ đèn bằng vectơ 0.<br>• <b>2 ghép D:</b> Vận tốc thực tế của tàu đối với bờ sông tuân theo quy tắc cộng vectơ vận tốc.<br>• <b>3 ghép A:</b> Điều kiện cân bằng lơ lửng: tổng 4 lực nâng thẳng đứng cân bằng với trọng lực.<br>• <b>4 ghép C:</b> Trọng lực phân bổ thành 2 lực nâng song song cùng hướng."
    },
    {
      "type": "drag",
      "q": "Chọn thuật ngữ thích hợp điền vào chỗ trống để hoàn thiện định nghĩa ba vectơ đồng phẳng trong không gian:",
      "text": "Trong không gian, ba vectơ được gọi là [blank] nếu các giá của chúng cùng [blank] với một mặt phẳng. Nếu có hai vectơ không cùng phương thì ba vectơ đồng phẳng khi và chỉ khi có các số m, n sao cho <span class=\"math-sym\">c</span> = [blank] + [blank].",
      "words": [
        "đồng phẳng",
        "song song hoặc nằm trong",
        "m<span class=\"math-sym\">a</span>",
        "n<span class=\"math-sym\">b</span>",
        "cùng phương",
        "vuông góc"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "(1) đồng phẳng • (2) song song hoặc nằm trong • (3) m<span class=\"math-sym\">a</span> • (4) n<span class=\"math-sym\">b</span>",
      "exp": "• <b>Định lý đồng phẳng (SGK Toán 12):</b> Ba vectơ đồng phẳng khi các giá của chúng cùng song song hoặc nằm trên một mặt phẳng. Điều kiện cần và đủ là một vectơ phân tích tuyến tính được qua hai vectơ kia: <span class=\"math-sym\">c</span> = m<span class=\"math-sym\">a</span> + n<span class=\"math-sym\">b</span>."
    },
    {
      "type": "mcq",
      "q": "Cho hình hộp chữ nhật ABCD.A'B'C'D' có kích thước AB = 2, AD = 3, AA' = 6. Tính độ dài vectơ tổng <span class=\"math-sym\">w</span> = <span class=\"math-sym\">AB</span> + <span class=\"math-sym\">AD</span> + <span class=\"math-sym\">AA'</span>.",
      "opts": [
        "7",
        "11",
        "√49",
        "5√2"
      ],
      "ans": 0,
      "correctText": "Phương án A: 7",
      "exp": "• Theo quy tắc hình hộp: <span class=\"math-sym\">w</span> = <span class=\"math-sym\">AB</span> + <span class=\"math-sym\">AD</span> + <span class=\"math-sym\">AA'</span> = <span class=\"math-sym\">AC'</span>.<br>• Độ dài vectơ: |<span class=\"math-sym\">w</span>| = AC' = √(AB² + AD² + AA'²) = √(2² + 3² + 6²) = √(4 + 9 + 36) = √49 = <b>7</b>.",
      "svgGraph": "<svg viewBox=\"0 0 380 220\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrowRed\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <rect x=\"8\" y=\"8\" width=\"364\" height=\"204\" rx=\"10\" fill=\"rgba(15,23,42,0.95)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/>\n  <!-- Bottom face ABCD -->\n  <polygon points=\"70,160 190,160 270,110 150,110\" fill=\"rgba(56,189,248,0.06)\" stroke=\"rgba(255,255,255,0.3)\" stroke-width=\"1.2\"/>\n  <!-- Top face A'B'C'D' -->\n  <polygon points=\"70,80 190,80 270,30 150,30\" fill=\"rgba(56,189,248,0.12)\" stroke=\"#38bdf8\" stroke-width=\"1.6\"/>\n  <!-- Vertical edges -->\n  <line x1=\"70\" y1=\"160\" x2=\"70\" y2=\"80\" stroke=\"#38bdf8\" stroke-width=\"1.6\"/>\n  <line x1=\"190\" y1=\"160\" x2=\"190\" y2=\"80\" stroke=\"#38bdf8\" stroke-width=\"1.6\"/>\n  <line x1=\"270\" y1=\"110\" x2=\"270\" y2=\"30\" stroke=\"#38bdf8\" stroke-width=\"1.6\"/>\n  <line x1=\"150\" y1=\"110\" x2=\"150\" y2=\"30\" stroke=\"rgba(255,255,255,0.3)\" stroke-dasharray=\"3,3\"/>\n  <!-- Hidden bottom edges -->\n  <line x1=\"150\" y1=\"110\" x2=\"70\" y2=\"160\" stroke=\"rgba(255,255,255,0.3)\" stroke-dasharray=\"3,3\"/>\n  <line x1=\"150\" y1=\"110\" x2=\"270\" y2=\"110\" stroke=\"rgba(255,255,255,0.3)\" stroke-dasharray=\"3,3\"/>\n  <!-- Vector diagonal AC' -->\n  <line x1=\"70\" y1=\"160\" x2=\"266\" y2=\"33\" stroke=\"#f43f5e\" stroke-width=\"2.6\" marker-end=\"url(#arrowRed)\"/>\n  <!-- Labels -->\n  <text x=\"52\" y=\"172\" fill=\"#cbd5e1\" font-size=\"13\" font-weight=\"700\">A</text>\n  <text x=\"195\" y=\"172\" fill=\"#cbd5e1\" font-size=\"13\" font-weight=\"700\">B</text>\n  <text x=\"278\" y=\"115\" fill=\"#cbd5e1\" font-size=\"13\" font-weight=\"700\">C</text>\n  <text x=\"135\" y=\"108\" fill=\"#cbd5e1\" font-size=\"13\" font-weight=\"700\">D</text>\n  <text x=\"52\" y=\"75\" fill=\"#cbd5e1\" font-size=\"13\" font-weight=\"700\">A'</text>\n  <text x=\"195\" y=\"75\" fill=\"#cbd5e1\" font-size=\"13\" font-weight=\"700\">B'</text>\n  <text x=\"278\" y=\"28\" fill=\"#f43f5e\" font-size=\"14\" font-weight=\"900\">C'</text>\n  <text x=\"135\" y=\"28\" fill=\"#cbd5e1\" font-size=\"13\" font-weight=\"700\">D'</text>\n  <!-- Dimension labels -->\n  <text x=\"130\" y=\"175\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">AB = 2</text>\n  <text x=\"235\" y=\"145\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">AD = 3</text>\n  <text x=\"50\" y=\"125\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\" text-anchor=\"end\">AA' = 6</text>\n</svg>"
    },
    {
      "type": "mcq",
      "q": "Cho hình chóp S.ABC có đáy ABC là tam giác đều cạnh a, cạnh bên SA ⊥ (ABC) và SA = a√3. Tính côsin góc giữa hai vectơ <span class=\"math-sym\">SB</span> và <span class=\"math-sym\">AB</span>.",
      "opts": [
        "1/2",
        "√3/2",
        "√2/2",
        "1/4"
      ],
      "ans": 0,
      "correctText": "Phương án A: 1/2",
      "exp": "• Tam giác SAB vuông tại A: SA = a√3, AB = a ⇒ SB = √(SA² + AB²) = √(3a² + a²) = 2a.<br>• Trong tam giác vuông SAB: cos(SBA) = <span class=\"fraction\"><span class=\"numerator\">AB</span><span class=\"denominator\">SB</span></span> = <span class=\"fraction\"><span class=\"numerator\">a</span><span class=\"denominator\">2a</span></span> = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span> (góc SBA = 60°).<br>• Góc giữa hai vectơ: (<span class=\"math-sym\">SB</span>, <span class=\"math-sym\">AB</span>) = 180° - SBA? Chú ý: <span class=\"math-sym\">BS</span> và <span class=\"math-sym\">BA</span> có chung gốc B, góc giữa chúng là góc SBA = 60°.<br>Vectơ <span class=\"math-sym\">SB</span> = -<span class=\"math-sym\">BS</span> ⇒ cos(<span class=\"math-sym\">SB</span>, <span class=\"math-sym\">AB</span>) = cos(-<span class=\"math-sym\">BS</span>, -<span class=\"math-sym\">BA</span>) = cos(<span class=\"math-sym\">BS</span>, <span class=\"math-sym\">BA</span>) = cos 60° = <b>1/2</b>."
    },
    {
      "type": "tf",
      "q": "Một chiếc đèn chùm trang trí có khối lượng 12 kg (trọng lực P ≈ 120 N) được treo cân bằng dưới trần nhà bằng 3 sợi dây cáp thép không giãn có chiều dài bằng nhau. Ba đầu dây gắn vào trần nhà tại 3 điểm A, B, C tạo thành tam giác đều cạnh 1,2 m. Đèn ở điểm S cách đều A, B, C và khoảng cách thẳng đứng từ S lên trần nhà là h = 0,8 m. Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Ba lực căng dây <span class=\"math-sym\">T</span><sub style=\"font-size:0.8em\">A</sub>, <span class=\"math-sym\">T</span><sub style=\"font-size:0.8em\">B</sub>, <span class=\"math-sym\">T</span><sub style=\"font-size:0.8em\">C</sub> có độ lớn bằng nhau do tính đối xứng.",
        "Hệ lực tác dụng lên đèn cân bằng: <span class=\"math-sym\">T</span><sub style=\"font-size:0.8em\">A</sub> + <span class=\"math-sym\">T</span><sub style=\"font-size:0.8em\">B</sub> + <span class=\"math-sym\">T</span><sub style=\"font-size:0.8em\">C</sub> + <span class=\"math-sym\">P</span> = <span class=\"math-sym\">0</span>.",
        "Khoảng cách từ tâm trần nhà O đến mỗi điểm buộc cáp là R = <span class=\"fraction\"><span class=\"numerator\">1,2√3</span><span class=\"denominator\">3</span></span> ≈ 0,693 m.",
        "Độ lớn lực căng trên mỗi sợi dây cáp lớn hơn 100 N."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Sai",
      "exp": "• <b>Ý a [Đúng]:</b> Do tam giác đều và đỉnh S cách đều 3 đỉnh nên độ lớn T_A = T_B = T_C = T.<br>• <b>Ý b [Đúng]:</b> Trạng thái cân bằng tĩnh: tổng lực tác dụng bằng 0.<br>• <b>Ý c [Đúng]:</b> Bán kính đường tròn ngoại tiếp tam giác đều cạnh a = 1,2 m là R = a√3/3 = 1,2√3/3 ≈ 0,693 m.<br>• <b>Ý d [Sai]:</b> Độ dài dây treo: L = √(h² + R²) = √(0,8² + 0,693²) = √(0,64 + 0,48) = √1,12 ≈ 1,058 m. Góc hợp bởi dây và phương thẳng đứng: cos α = h/L = 0,8 / 1,058 ≈ 0,756. Chiếu phương thẳng đứng: 3T · cos α = P ⇒ 3T(0,756) = 120 ⇒ T ≈ 120 / 2,268 ≈ 52,9 N (< 100 N)."
    },
    {
      "type": "mcq",
      "q": "Một chiếc máy bay phản lực bay thẳng theo hướng Bắc với vận tốc 800 km/h, đồng thời gặp luồng gió thổi theo hướng Đông với vận tốc 150 km/h và luồng khí nâng đẩy thẳng đứng hướng lên với vận tốc 50 km/h. Vận tốc thực tế của máy bay so với mặt đất xấp xỉ bằng bao nhiêu km/h?",
      "opts": [
        "815,5 km/h",
        "1000 km/h",
        "850 km/h",
        "785 km/h"
      ],
      "ans": 0,
      "correctText": "Phương án A: 815,5 km/h",
      "exp": "• Chọn hệ trục 3 chiều vuông góc: hướng Đông (trục Ox), hướng Bắc (trục Oy), hướng thẳng đứng (trục Oz).<br>• Vectơ vận tốc tổng hợp của máy bay: <span class=\"math-sym\">v</span> = (150; 800; 50).<br>• Tốc độ thực tế so với mặt đất: |<span class=\"math-sym\">v</span>| = √(150² + 800² + 50²) = √(22500 + 640000 + 2500) = √665000 ≈ <b>815,5 km/h</b>."
    }
  ],
  "7": [
    {
      "type": "mcq",
      "q": "Trong không gian Oxyz, toạ độ của ba vectơ đơn vị lần lượt trên ba trục Ox, Oy, Oz là:",
      "opts": [
        "<span class=\"math-sym\">i</span> = (1; 0; 0), <span class=\"math-sym\">j</span> = (0; 1; 0), <span class=\"math-sym\">k</span> = (0; 0; 1)",
        "<span class=\"math-sym\">i</span> = (0; 1; 0), <span class=\"math-sym\">j</span> = (1; 0; 0), <span class=\"math-sym\">k</span> = (0; 0; 1)",
        "<span class=\"math-sym\">i</span> = (1; 1; 0), <span class=\"math-sym\">j</span> = (0; 1; 1), <span class=\"math-sym\">k</span> = (1; 0; 1)",
        "<span class=\"math-sym\">i</span> = (1; 0; 0), <span class=\"math-sym\">j</span> = (0; 0; 1), <span class=\"math-sym\">k</span> = (0; 1; 0)"
      ],
      "ans": 0,
      "correctText": "Phương án A: <span class=\"math-sym\">i</span> = (1; 0; 0), <span class=\"math-sym\">j</span> = (0; 1; 0), <span class=\"math-sym\">k</span> = (0; 0; 1)",
      "exp": "• <b>Định nghĩa hệ toạ độ Oxyz (SGK Toán 12):</b> Hệ trục toạ độ không gian gồm ba trục toạ độ đôi một vuông góc Ox, Oy, Oz với ba vectơ đơn vị tương ứng là <span class=\"math-sym\">i</span> = (1; 0; 0), <span class=\"math-sym\">j</span> = (0; 1; 0), <span class=\"math-sym\">k</span> = (0; 0; 1)."
    },
    {
      "type": "mcq",
      "q": "Trong không gian Oxyz, tìm toạ độ hình chiếu vuông góc của điểm M(3; -4; 5) lên mặt phẳng toạ độ (Oxy).",
      "opts": [
        "M'(3; -4; 0)",
        "M'(3; 0; 5)",
        "M'(0; -4; 5)",
        "M'(0; 0; 5)"
      ],
      "ans": 0,
      "correctText": "Phương án A: M'(3; -4; 0)",
      "exp": "• Quy tắc chiếu hình học: Chiếu một điểm M(x; y; z) lên mặt phẳng (Oxy) thì giữ nguyên hoành độ x và tung độ y, còn cao độ z = 0.<br>• Do đó hình chiếu vuông góc của M(3; -4; 5) lên (Oxy) là <b>M'(3; -4; 0)</b>."
    },
    {
      "type": "mcq",
      "q": "Tính khoảng cách giữa hai điểm A(1; 2; -1) và B(4; -2; 3) trong không gian Oxyz.",
      "opts": [
        "√41",
        "5",
        "√29",
        "7"
      ],
      "ans": 0,
      "correctText": "Phương án A: √41",
      "exp": "• Công thức khoảng cách giữa 2 điểm: AB = √[(x_B - x_A)² + (y_B - y_A)² + (z_B - z_A)²].<br>• Thay số: AB = √[(4 - 1)² + (-2 - 2)² + (3 - (-1))²] = √[3² + (-4)² + 4²] = √[9 + 16 + 16] = <b>√41</b>."
    },
    {
      "type": "tf",
      "q": "Trong không gian Oxyz, cho tam giác ABC với toạ độ các đỉnh A(1; 0; 2), B(-2; 1; 3), C(4; 2; 1). Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Toạ độ trung điểm M của đoạn thẳng AB là M(-0,5; 0,5; 2,5).",
        "Toạ độ trọng tâm G của tam giác ABC là G(1; 1; 2).",
        "Độ dài cạnh BC là BC = √41.",
        "Điểm D để tứ giác ABCD là hình bình hành có toạ độ là D(7; 1; 0)."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> M(-0,5; 0,5; 2,5).<br>• <b>Ý b [Đúng]:</b> G(1; 1; 2).<br>• <b>Ý c [Đúng]:</b> BC = √[(4 - (-2))² + (2 - 1)² + (1 - 3)²] = √(36 + 1 + 4) = √41.<br>• <b>Ý d [Đúng]:</b> ABCD là hình bình hành ⇔ <span class=\"math-sym\">AD</span> = <span class=\"math-sym\">BC</span> = (6; 1; -2) ⇒ D(1+6; 0+1; 2-2) = (7; 1; 0)."
    },
    {
      "type": "match",
      "q": "Trong một căn phòng triển lãm dạng hình hộp kích thước 6 × 4 × 3 (m) gắn hệ trục toạ độ với sàn là (Oxy), ghép các thiết bị (Cột A) với toạ độ Oxyz tương ứng (Cột B):",
      "colA": [
        "Bóng đèn chùm ở chính giữa trần phòng",
        "Camera an ninh gắn tại góc trần xa nhất so với gốc toạ độ O",
        "Cảm biến nhiệt độ gắn ở tâm sàn nhà",
        "Máy điều hoà gắn sát trần trên tường Oy (x = 0)"
      ],
      "colB": [
        "Điểm (6; 4; 3)",
        "Điểm (3; 2; 3)",
        "Điểm (0; 2; 2,8)",
        "Điểm (3; 2; 0)"
      ],
      "ans": [
        1,
        0,
        3,
        2
      ],
      "correctText": "1-B • 2-A • 3-D • 4-C",
      "exp": "• <b>1 ghép B:</b> Tâm trần: x = 6/2 = 3, y = 4/2 = 2, z = 3 ⇒ (3; 2; 3).<br>• <b>2 ghép A:</b> Góc trần đối diện gốc: x = 6, y = 4, z = 3 ⇒ (6; 4; 3).<br>• <b>3 ghép D:</b> Tâm sàn: x = 3, y = 2, z = 0 ⇒ (3; 2; 0).<br>• <b>4 ghép C:</b> Trên tường x = 0, cao sát trần z = 2,8 ⇒ (0; 2; 2,8)."
    },
    {
      "type": "drag",
      "q": "Chọn từ ngữ thích hợp điền vào chỗ trống để hoàn thiện định nghĩa toạ độ điểm trong không gian:",
      "text": "Trong không gian Oxyz, toạ độ của điểm M là toạ độ của vectơ [blank]. Nếu <span class=\"math-sym\">OM</span> = x<span class=\"math-sym\">i</span> + y<span class=\"math-sym\">j</span> + z<span class=\"math-sym\">k</span> thì ta viết M([blank]). Số x được gọi là [blank], y là [blank], z là [blank] của điểm M.",
      "words": [
        "<span class=\"math-sym\">OM</span>",
        "x; y; z",
        "hoành độ",
        "tung độ",
        "cao độ",
        "<span class=\"math-sym\">MO</span>"
      ],
      "ans": [
        0,
        1,
        2,
        3,
        4
      ],
      "correctText": "(1) <span class=\"math-sym\">OM</span> • (2) x; y; z • (3) hoành độ • (4) tung độ • (5) cao độ",
      "exp": "• <b>Quy chuẩn toạ độ điểm (SGK Toán 12):</b> Toạ độ điểm M chính là bộ ba số (x; y; z) tương ứng với khai triển vectơ vị trí <span class=\"math-sym\">OM</span> theo bộ ba vectơ đơn vị."
    },
    {
      "type": "mcq",
      "q": "Cho điểm M trong hệ trục toạ độ Oxyz như hình vẽ bên. Toạ độ của điểm M là:",
      "opts": [
        "M(2; 3; 4)",
        "M(3; 2; 4)",
        "M(4; 3; 2)",
        "M(2; 4; 3)"
      ],
      "ans": 0,
      "correctText": "Phương án A: M(2; 3; 4)",
      "exp": "• Dựa vào hình chiếu của điểm M lên ba trục toạ độ:<br>- Chiếu lên Ox cắt tại giá trị x = 2.<br>- Chiếu lên Oy cắt tại giá trị y = 3.<br>- Chiếu lên Oz cắt tại giá trị z = 4.<br>⇒ Toạ độ của điểm M là <b>(2; 3; 4)</b>.",
      "svgGraph": "<svg viewBox=\"0 0 380 230\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrow4\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n  </defs>\n  <rect x=\"8\" y=\"8\" width=\"364\" height=\"214\" rx=\"10\" fill=\"rgba(15,23,42,0.95)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/>\n  <!-- Oxyz axes: O at (160, 140) -->\n  <line x1=\"160\" y1=\"140\" x2=\"60\" y2=\"195\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#arrow4)\"/>\n  <text x=\"45\" y=\"200\" fill=\"#f43f5e\" font-size=\"14\" font-weight=\"800\">x</text>\n  <line x1=\"160\" y1=\"140\" x2=\"345\" y2=\"140\" stroke=\"#34d399\" stroke-width=\"2\" marker-end=\"url(#arrow4)\"/>\n  <text x=\"350\" y=\"145\" fill=\"#34d399\" font-size=\"14\" font-weight=\"800\">y</text>\n  <line x1=\"160\" y1=\"140\" x2=\"160\" y2=\"20\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow4)\"/>\n  <text x=\"165\" y=\"25\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"800\">z</text>\n  <text x=\"142\" y=\"155\" fill=\"#cbd5e1\" font-size=\"13\" font-style=\"italic\">O</text>\n\n  <!-- Projection in Oxy -->\n  <line x1=\"160\" y1=\"140\" x2=\"105\" y2=\"170\" stroke=\"rgba(255,255,255,0.4)\" stroke-dasharray=\"3,3\"/>\n  <text x=\"95\" y=\"185\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"700\">2</text>\n  <line x1=\"160\" y1=\"140\" x2=\"235\" y2=\"140\" stroke=\"rgba(255,255,255,0.4)\" stroke-dasharray=\"3,3\"/>\n  <text x=\"235\" y=\"156\" fill=\"#34d399\" font-size=\"12\" font-weight=\"700\">3</text>\n  <polygon points=\"160,140 105,170 180,170 235,140\" fill=\"rgba(56,189,248,0.12)\" stroke=\"rgba(255,255,255,0.3)\" stroke-dasharray=\"3,3\"/>\n  <!-- Vertical projection up to z = 4 -->\n  <line x1=\"180\" y1=\"170\" x2=\"180\" y2=\"70\" stroke=\"#fbbf24\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/>\n  <line x1=\"160\" y1=\"70\" x2=\"180\" y2=\"70\" stroke=\"rgba(255,255,255,0.4)\" stroke-dasharray=\"3,3\"/>\n  <text x=\"142\" y=\"74\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\">4</text>\n  <!-- Point M -->\n  <circle cx=\"180\" cy=\"70\" r=\"5\" fill=\"#fbbf24\"/>\n  <text x=\"190\" y=\"65\" fill=\"#fbbf24\" font-size=\"14\" font-weight=\"900\">M</text>\n</svg>"
    },
    {
      "type": "mcq",
      "q": "Tìm toạ độ điểm M thuộc trục Oz cách đều hai điểm A(2; 3; 1) và B(1; 1; 0).",
      "opts": [
        "M(0; 0; 6)",
        "M(0; 0; 3)",
        "M(0; 0; 4)",
        "M(0; 0; 5)"
      ],
      "ans": 0,
      "correctText": "Phương án A: M(0; 0; 6)",
      "exp": "• Điểm M ∈ Oz ⇒ M(0; 0; z).<br>• MA² = 2² + 3² + (z - 1)² = z² - 2z + 14.<br>• MB² = 1² + 1² + z² = z² + 2.<br>• MA = MB ⇔ MA² = MB² ⇔ z² - 2z + 14 = z² + 2 ⇔ 2z = 12 ⇔ z = 6.<br>⇒ Toạ độ điểm M là <b>(0; 0; 6)</b>."
    },
    {
      "type": "tf",
      "q": "Một trạm radar kiểm soát không lưu tại mặt đất gắn hệ toạ độ Oxyz (đơn vị đo: km) với gốc O tại trạm, mặt phẳng (Oxy) là mặt đất nằm ngang. Radar phát hiện máy bay A tại toạ độ (30; 40; 8) và sau 5 phút máy bay di chuyển đến vị trí B(60; 80; 10). Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Khoảng cách ban đầu từ trạm radar O đến máy bay là khoảng 50,6 km.",
        "Vectơ độ dời của máy bay trong 5 phút là <span class=\"math-sym\">AB</span> = (30; 40; 2).",
        "Quãng đường bay được của máy bay trong 5 phút xấp xỉ 50,04 km.",
        "Vận tốc trung bình của máy bay trong 5 phút này xấp xỉ 600 km/h."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> OA = √(30² + 40² + 8²) = √(900 + 1600 + 64) = √2564 ≈ 50,64 km.<br>• <b>Ý b [Đúng]:</b> <span class=\"math-sym\">AB</span> = (60 - 30; 80 - 40; 10 - 8) = (30; 40; 2).<br>• <b>Ý c [Đúng]:</b> Quãng đường AB = √(30² + 40² + 2²) = √(2500 + 4) = √2504 ≈ 50,04 km.<br>• <b>Ý d [Đúng]:</b> Thời gian 5 phút = 5/60 giờ = 1/12 giờ. Vận tốc v = s/t = 50,04 / (1/12) ≈ 600,5 km/h."
    },
    {
      "type": "mcq",
      "q": "Trong một nhà thi đấu dạng hình hộp chữ nhật kích thước 40 × 30 × 12 (m), người ta lắp một camera 360° tại tâm của trần nhà. Khoảng cách từ camera đến một góc bất kỳ trên mặt sàn nhà bằng bao nhiêu mét?",
      "opts": [
        "√769 ≈ 27,7 m",
        "25 m",
        "35 m",
        "√625 = 25 m"
      ],
      "ans": 0,
      "correctText": "Phương án A: √769 ≈ 27,7 m",
      "exp": "• Gắn hệ toạ độ Oxyz: Tâm trần camera có toạ độ C(20; 15; 12).<br>• Một góc sàn tại gốc toạ độ O(0; 0; 0).<br>• Khoảng cách: d = √(20² + 15² + 12²) = √(400 + 225 + 144) = √769 ≈ <b>27,73 mét</b>."
    }
  ],
  "8": [
    {
      "type": "mcq",
      "q": "Trong không gian Oxyz, cho hai vectơ <span class=\"math-sym\">u</span> = (x₁; y₁; z₁) và <span class=\"math-sym\">v</span> = (x₂; y₂; z₂). Biểu thức toạ độ của tích vô hướng <span class=\"math-sym\">u</span> · <span class=\"math-sym\">v</span> là:",
      "opts": [
        "<span class=\"math-sym\">u</span> · <span class=\"math-sym\">v</span> = x₁x₂ + y₁y₂ + z₁z₂",
        "<span class=\"math-sym\">u</span> · <span class=\"math-sym\">v</span> = (x₁ + x₂; y₁ + y₂; z₁ + z₂)",
        "<span class=\"math-sym\">u</span> · <span class=\"math-sym\">v</span> = x₁y₂ - x₂y₁",
        "<span class=\"math-sym\">u</span> · <span class=\"math-sym\">v</span> = √(x₁x₂ + y₁y₂ + z₁z₂)"
      ],
      "ans": 0,
      "correctText": "Phương án A: <span class=\"math-sym\">u</span> · <span class=\"math-sym\">v</span> = x₁x₂ + y₁y₂ + z₁z₂",
      "exp": "• <b>Công thức tích vô hướng (SGK Toán 12):</b> Tích vô hướng của hai vectơ bằng tổng các tích của các toạ độ tương ứng:<br><span class=\"math-sym\">u</span> · <span class=\"math-sym\">v</span> = x₁x₂ + y₁y₂ + z₁z₂."
    },
    {
      "type": "mcq",
      "q": "Cho hai vectơ <span class=\"math-sym\">a</span> = (1; -2; 3) và <span class=\"math-sym\">b</span> = (2; 1; -1). Tính tích vô hướng <span class=\"math-sym\">a</span> · <span class=\"math-sym\">b</span>.",
      "opts": [
        "-3",
        "3",
        "-1",
        "7"
      ],
      "ans": 0,
      "correctText": "Phương án A: -3",
      "exp": "• Thay toạ độ vào biểu thức tích vô hướng:<br><span class=\"math-sym\">a</span> · <span class=\"math-sym\">b</span> = 1·2 + (-2)·1 + 3·(-1) = 2 - 2 - 3 = <b>-3</b>."
    },
    {
      "type": "mcq",
      "q": "Tính côsin của góc giữa hai vectơ <span class=\"math-sym\">u</span> = (2; 1; 0) và <span class=\"math-sym\">v</span> = (-1; 2; √5).",
      "opts": [
        "0 (hai vectơ vuông góc)",
        "1/2",
        "√2/2",
        "-1/5"
      ],
      "ans": 0,
      "correctText": "Phương án A: 0 (hai vectơ vuông góc)",
      "exp": "• Tính tích vô hướng: <span class=\"math-sym\">u</span> · <span class=\"math-sym\">v</span> = 2·(-1) + 1·2 + 0·√5 = -2 + 2 + 0 = 0.<br>• Do tích vô hướng bằng 0 nên cos(<span class=\"math-sym\">u</span>, <span class=\"math-sym\">v</span>) = 0 (tức góc giữa hai vectơ bằng 90°)."
    },
    {
      "type": "tf",
      "q": "Trong không gian Oxyz, cho ba điểm A(1; 0; 0), B(0; 2; 0), C(0; 0; 3). Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Toạ độ hai vectơ là <span class=\"math-sym\">AB</span> = (-1; 2; 0) và <span class=\"math-sym\">AC</span> = (-1; 0; 3).",
        "Tích vô hướng <span class=\"math-sym\">AB</span> · <span class=\"math-sym\">AC</span> = 1.",
        "Độ dài các cạnh là AB = √5 và AC = √10.",
        "Côsin góc BAC của tam giác ABC là cos(BAC) = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">5√2</span></span>."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> <span class=\"math-sym\">AB</span> = (-1; 2; 0), <span class=\"math-sym\">AC</span> = (-1; 0; 3).<br>• <b>Ý b [Đúng]:</b> <span class=\"math-sym\">AB</span> · <span class=\"math-sym\">AC</span> = (-1)(-1) + 2·0 + 0·3 = 1.<br>• <b>Ý c [Đúng]:</b> AB = √[(-1)² + 2²] = √5, AC = √[(-1)² + 3²] = √10.<br>• <b>Ý d [Đúng]:</b> cos BAC = <span class=\"fraction\"><span class=\"numerator\"><span class=\"math-sym\">AB</span> · <span class=\"math-sym\">AC</span></span><span class=\"denominator\">AB · AC</span></span> = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">√5 · √10</span></span> = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">5√2</span></span>."
    },
    {
      "type": "match",
      "q": "Ghép các biểu thức vectơ toạ độ (Cột A) với các đại lượng thực tế/kĩ thuật tương ứng (Cột B):",
      "colA": [
        "Công cơ học của lực: A = <span class=\"math-sym\">F</span> · <span class=\"math-sym\">d</span>",
        "Độ lớn vận tốc tổng hợp: v = √[v_x² + v_y² + v_z²]",
        "Điều kiện cân bằng tĩnh học: <span class=\"math-sym\">F</span>₁ + <span class=\"math-sym\">F</span>₂ + <span class=\"math-sym\">F</span>₃ = <span class=\"math-sym\">0</span>",
        "Góc chiếu tia sáng mặt trời: cos θ = <span class=\"fraction\"><span class=\"numerator\">|<span class=\"math-sym\">s</span> · <span class=\"math-sym\">n</span>|</span><span class=\"denominator\">|<span class=\"math-sym\">s</span>||<span class=\"math-sym\">n</span>|</span></span>"
      ],
      "colB": [
        "Tổng các thành phần lực trên cả 3 trục toạ độ đều bằng 0",
        "Tích vô hướng giữa vectơ lực kéo và vectơ độ dời",
        "Góc giữa vectơ truyền tia sáng và vectơ pháp tuyến tấm pin",
        "Độ dài hình học của vectơ vận tốc trong không gian"
      ],
      "ans": [
        1,
        3,
        0,
        2
      ],
      "correctText": "1-B • 2-D • 3-A • 4-C",
      "exp": "• <b>1 ghép B:</b> Công = Tích vô hướng lực và độ dời.<br>• <b>2 ghép D:</b> Tốc độ = Độ dài vectơ vận tốc.<br>• <b>3 ghép A:</b> Điều kiện cân bằng = Tổng lực bằng vectơ 0.<br>• <b>4 ghép C:</b> Góc chiếu ánh sáng = Góc giữa vectơ sáng và pháp tuyến."
    },
    {
      "type": "drag",
      "q": "Chọn biểu thức thích hợp điền vào chỗ trống để hoàn thiện điều kiện cùng phương và vuông góc của hai vectơ trong không gian:",
      "text": "Hai vectơ <span class=\"math-sym\">u</span> và <span class=\"math-sym\">v</span> vuông góc với nhau khi và chỉ khi [blank]. Hai vectơ cùng phương khi và chỉ khi tồn tại số k sao cho [blank] (hoặc các tỉ số toạ độ tương ứng bằng nhau [blank] nếu các toạ độ mẫu khác 0).",
      "words": [
        "<span class=\"math-sym\">u</span> · <span class=\"math-sym\">v</span> = 0",
        "<span class=\"math-sym\">u</span> = k<span class=\"math-sym\">v</span>",
        "<span class=\"fraction\"><span class=\"numerator\">x₁</span><span class=\"denominator\">x₂</span></span> = <span class=\"fraction\"><span class=\"numerator\">y₁</span><span class=\"denominator\">y₂</span></span> = <span class=\"fraction\"><span class=\"numerator\">z₁</span><span class=\"denominator\">z₂</span></span>",
        "<span class=\"math-sym\">u</span> + <span class=\"math-sym\">v</span> = <span class=\"math-sym\">0</span>",
        "|<span class=\"math-sym\">u</span>| = |<span class=\"math-sym\">v</span>|"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "(1) <span class=\"math-sym\">u</span> · <span class=\"math-sym\">v</span> = 0 • (2) <span class=\"math-sym\">u</span> = k<span class=\"math-sym\">v</span> • (3) <span class=\"fraction\"><span class=\"numerator\">x₁</span><span class=\"denominator\">x₂</span></span> = <span class=\"fraction\"><span class=\"numerator\">y₁</span><span class=\"denominator\">y₂</span></span> = <span class=\"fraction\"><span class=\"numerator\">z₁</span><span class=\"denominator\">z₂</span></span>",
      "exp": "• <b>Quy tắc quan trọng:</b><br>- Vuông góc ⇔ Tích vô hướng bằng 0.<br>- Cùng phương ⇔ Vectơ này bằng k lần vectơ kia."
    },
    {
      "type": "mcq",
      "q": "Trong không gian Oxyz, cho tứ diện OABC có 3 đỉnh nằm trên 3 trục toạ độ: A(2; 0; 0), B(0; 3; 0), C(0; 0; 4) như hình vẽ. Thể tích khối tứ diện OABC bằng:",
      "opts": [
        "4",
        "8",
        "12",
        "24"
      ],
      "ans": 0,
      "correctText": "Phương án A: 4",
      "exp": "• Tứ diện OABC có ba cạnh OA, OB, OC đôi một vuông góc tại gốc O:<br>• OA = 2, OB = 3, OC = 4.<br>• Thể tích tứ diện vuông: V = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">6</span></span> · OA · OB · OC = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">6</span></span> · 2 · 3 · 4 = <b>4</b>.",
      "svgGraph": "<svg viewBox=\"0 0 360 220\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"340\" height=\"200\" rx=\"8\" fill=\"rgba(15,23,42,0.9)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/><line x1=\"150\" y1=\"130\" x2=\"60\" y2=\"180\" stroke=\"#f43f5e\" stroke-width=\"2\"/><text x=\"45\" y=\"185\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"700\">x</text><line x1=\"150\" y1=\"130\" x2=\"330\" y2=\"130\" stroke=\"#34d399\" stroke-width=\"2\"/><text x=\"335\" y=\"135\" fill=\"#34d399\" font-size=\"12\" font-weight=\"700\">y</text><line x1=\"150\" y1=\"130\" x2=\"150\" y2=\"20\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"155\" y=\"25\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\">z</text><text x=\"135\" y=\"140\" fill=\"#cbd5e1\" font-size=\"11\">O</text><circle cx=\"95\" cy=\"160\" r=\"4\" fill=\"#f43f5e\"/><text x=\"80\" y=\"175\" fill=\"#f43f5e\" font-size=\"11\" font-weight=\"700\">A(2;0;0)</text><circle cx=\"270\" cy=\"130\" r=\"4\" fill=\"#34d399\"/><text x=\"270\" y=\"148\" fill=\"#34d399\" font-size=\"11\" font-weight=\"700\">B(0;3;0)</text><circle cx=\"150\" cy=\"50\" r=\"4\" fill=\"#38bdf8\"/><text x=\"160\" y=\"52\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"700\">C(0;0;4)</text><polygon points=\"95,160 270,130 150,50\" fill=\"rgba(244,63,94,0.2)\" stroke=\"#fbbf24\" stroke-width=\"1.8\"/><line x1=\"150\" y1=\"130\" x2=\"95\" y2=\"160\" stroke=\"#f43f5e\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"130\" x2=\"270\" y2=\"130\" stroke=\"#34d399\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"130\" x2=\"150\" y2=\"50\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/></svg>"
    },
    {
      "type": "mcq",
      "q": "Tìm tham số m để hai vectơ <span class=\"math-sym\">u</span> = (m; 1; -2) và <span class=\"math-sym\">v</span> = (2; -4; 1) vuông góc với nhau.",
      "opts": [
        "m = 3",
        "m = -3",
        "m = 2",
        "m = 1"
      ],
      "ans": 0,
      "correctText": "Phương án A: m = 3",
      "exp": "• Điều kiện để hai vectơ vuông góc: <span class=\"math-sym\">u</span> · <span class=\"math-sym\">v</span> = 0.<br>• 2·m + 1·(-4) + (-2)·1 = 0 ⇔ 2m - 4 - 2 = 0 ⇔ 2m = 6 ⇔ <b>m = 3</b>."
    },
    {
      "type": "tf",
      "q": "Một khung giàn mái thép không gian chịu lực liên kết tại nút O(0; 0; 0). Ba thanh giằng chịu lực tác dụng truyền về nút O có vectơ lực lần lượt là <span class=\"math-sym\">F</span>₁ = (10; 20; 30), <span class=\"math-sym\">F</span>₂ = (-15; 10; 40), <span class=\"math-sym\">F</span>₃ = (5; -30; 10) (đơn vị: kN). Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Hợp lực tổng hợp tác dụng lên nút liên kết O là <span class=\"math-sym\">F</span> = (0; 0; 80) kN.",
        "Hợp lực có phương thẳng đứng (song song với trục cao độ Oz).",
        "Độ lớn của lực <span class=\"math-sym\">F</span>₁ là |<span class=\"math-sym\">F</span>₁| = √1400 ≈ 37,4 kN.",
        "Cả ba lực <span class=\"math-sym\">F</span>₁, <span class=\"math-sym\">F</span>₂, <span class=\"math-sym\">F</span>₃ đều có xu hướng kéo nút O lên trên (cao độ z > 0)."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> <span class=\"math-sym\">F</span> = (10 - 15 + 5; 20 + 10 - 30; 30 + 40 + 10) = (0; 0; 80) kN.<br>• <b>Ý b [Đúng]:</b> Do thành phần x = 0 và y = 0 nên vectơ chỉ có thành phần z = 80 hướng thẳng đứng.<br>• <b>Ý c [Đúng]:</b> |<span class=\"math-sym\">F</span>₁| = √(10² + 20² + 30²) = √(100 + 400 + 900) = √1400 ≈ 37,42 kN.<br>• <b>Ý d [Đúng]:</b> Cả 3 lực đều có thành phần z dương (30, 40, 10)."
    },
    {
      "type": "mcq",
      "q": "Một lực kéo không đổi <span class=\"math-sym\">F</span> = (20; 30; 5) (N) làm dịch chuyển một thùng hàng từ vị trí A(1; 2; 0) đến vị trí B(4; 6; 0) (đơn vị đo: mét) trên mặt sàn nhà kho. Công sinh ra bởi lực kéo này bằng bao nhiêu Jun (J)?",
      "opts": [
        "180 J",
        "200 J",
        "120 J",
        "150 J"
      ],
      "ans": 0,
      "correctText": "Phương án A: 180 J",
      "exp": "• Vectơ độ dời: <span class=\"math-sym\">d</span> = <span class=\"math-sym\">AB</span> = (4 - 1; 6 - 2; 0 - 0) = (3; 4; 0) (m).<br>• Công sinh ra: A = <span class=\"math-sym\">F</span> · <span class=\"math-sym\">d</span> = 20·3 + 30·4 + 5·0 = 60 + 120 + 0 = <b>180 Jun</b>."
    }
  ],
  "9": [
    {
      "type": "mcq",
      "q": "Khoảng biến thiên R của mẫu số liệu ghép nhóm gồm k nhóm: [a₁; a₂), [a₂; a₃), ..., [aₖ; aₖ₊₁) được tính bằng công thức nào?",
      "opts": [
        "R = aₖ₊₁ - a₁ (hiệu giữa đầu mút phải của nhóm cuối và đầu mút trái của nhóm đầu)",
        "R = aₖ₊₁ - aₖ",
        "R = a₂ - a₁",
        "R = (aₖ₊₁ + a₁) / 2"
      ],
      "ans": 0,
      "correctText": "Phương án A: R = aₖ₊₁ - a₁ (hiệu giữa đầu mút phải của nhóm cuối và đầu mút trái của nhóm đầu)",
      "exp": "• <b>Định nghĩa (SGK Toán 12):</b> Khoảng biến thiên R của mẫu số liệu ghép nhóm là hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên: R = aₖ₊₁ - a₁."
    },
    {
      "type": "mcq",
      "q": "Khảo sát thời gian sử dụng điện thoại (phút/ngày) của một nhóm học sinh được chia thành các nhóm: [30; 60), [60; 90), [90; 120), [120; 150). Khoảng biến thiên của mẫu số liệu ghép nhóm này là:",
      "opts": [
        "120 phút",
        "90 phút",
        "150 phút",
        "30 phút"
      ],
      "ans": 0,
      "correctText": "Phương án A: 120 phút",
      "exp": "• Đầu mút trái nhóm đầu: a₁ = 30.<br>• Đầu mút phải nhóm cuối: a₅ = 150.<br>• Khoảng biến thiên: R = 150 - 30 = <b>120 phút</b>."
    },
    {
      "type": "mcq",
      "q": "Một mẫu số liệu ghép nhóm có cỡ mẫu n = 100. Tứ phân vị thứ nhất Q₁ là giá trị xấp xỉ chia 25% số liệu nhỏ nhất. Nhóm chứa Q₁ là nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng bao nhiêu?",
      "opts": [
        "25",
        "50",
        "75",
        "20"
      ],
      "ans": 0,
      "correctText": "Phương án A: 25",
      "exp": "• Vị trí của Q₁ ứng với giá trị <span class=\"fraction\"><span class=\"numerator\">n</span><span class=\"denominator\">4</span></span> = <span class=\"fraction\"><span class=\"numerator\">100</span><span class=\"denominator\">4</span></span> = 25.<br>• Nhóm chứa Q₁ là nhóm đầu tiên có tần số tích luỹ cf<sub style=\"font-size:0.8em\">m</sub> ≥ 25."
    },
    {
      "type": "tf",
      "q": "Bảng số liệu ghép nhóm thống kê thời gian hoàn thành một bài test (phút) của 40 học sinh:<br>[10; 15): 4 học sinh; [15; 20): 12 học sinh; [20; 25): 14 học sinh; [25; 30): 8 học sinh; [30; 35): 2 học sinh. Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Cỡ mẫu của mẫu số liệu là n = 40 học sinh.",
        "Khoảng biến thiên của mẫu số liệu ghép nhóm là R = 35 - 10 = 25 phút.",
        "Nhóm chứa tứ phân vị thứ nhất Q₁ là nhóm [15; 20).",
        "Tứ phân vị thứ nhất của mẫu số liệu là Q₁ = 17,5 phút."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> n = 4 + 12 + 14 + 8 + 2 = 40.<br>• <b>Ý b [Đúng]:</b> R = 35 - 10 = 25 phút.<br>• <b>Ý c [Đúng]:</b> n/4 = 10. Tần số tích lũy: Nhóm 1 có 4; Nhóm 2 có 4+12=16 ≥ 10. Vậy nhóm chứa Q₁ là [15; 20).<br>• <b>Ý d [Đúng]:</b> Q₁ = 15 + <span class=\"fraction\"><span class=\"numerator\">10 - 4</span><span class=\"denominator\">12</span></span> · (20 - 15) = 15 + <span class=\"fraction\"><span class=\"numerator\">6</span><span class=\"denominator\">12</span></span> · 5 = 15 + 2,5 = <b>17,5 phút</b>."
    },
    {
      "type": "match",
      "q": "Ghép các đại lượng đo mức độ phân tán (Cột A) với ý nghĩa thực tiễn trong phân tích dữ liệu sản xuất và dịch vụ (Cột B):",
      "colA": [
        "Khoảng tứ phân vị Δ_Q = Q₃ - Q₁",
        "Khoảng biến thiên R",
        "Độ phân tán khoảng tứ phân vị của máy A nhỏ hơn máy B",
        "Tứ phân vị thứ ba Q₃"
      ],
      "colB": [
        "Đo độ phân tán của 50% số liệu chính giữa trung tâm, không bị ảnh hưởng bởi giá trị ngoại lai",
        "Độ dàn trải tối đa giữa giá trị lớn nhất và giá trị nhỏ nhất của mẫu",
        "Máy A có sản phẩm đồng đều hơn, độ ổn định cao hơn máy B",
        "Ngưỡng giá trị mà 75% các quan sát có kết quả nhỏ hơn hoặc bằng nó"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "1-A • 2-B • 3-C • 4-D",
      "exp": "• <b>1 ghép A:</b> Khoảng tứ phân vị đo độ phân tán của 50% số liệu trung tâm và miễn nhiễm với số liệu bất thường.<br>• <b>2 ghép B:</b> R phản ánh khoảng chênh lệch giữa hai cực mút.<br>• <b>3 ghép C:</b> Δ_Q nhỏ chứng tỏ dữ liệu tập trung, độ đồng đều cao.<br>• <b>4 ghép D:</b> Q₃ là phân vị 75%."
    },
    {
      "type": "drag",
      "q": "Chọn công thức thích hợp điền vào chỗ trống để hoàn thiện công thức tính tứ phân vị thứ ba Q₃ của mẫu ghép nhóm:",
      "text": "Giả sử nhóm chứa Q₃ là [u; v) có tần số n<sub style=\"font-size:0.8em\">m</sub>, nhóm trước đó có tần số tích luỹ là C. Khi đó: Q₃ = u + [blank] · (v - u). Khoảng tứ phân vị của mẫu số liệu ghép nhóm được xác định bởi: Δ<sub style=\"font-size:0.8em\">Q</sub> = [blank].",
      "words": [
        "<span class=\"fraction\"><span class=\"numerator\"><span class=\"fraction\"><span class=\"numerator\">3n</span><span class=\"denominator\">4</span></span> - C</span><span class=\"denominator\">n<sub style=\"font-size:0.8em\">m</sub></span></span>",
        "Q₃ - Q₁",
        "R = x<sub style=\"font-size:0.8em\">max</sub> - x<sub style=\"font-size:0.8em\">min</sub>",
        "<span class=\"fraction\"><span class=\"numerator\">n/4 - C</span><span class=\"denominator\">n<sub style=\"font-size:0.8em\">m</sub></span></span>"
      ],
      "ans": [
        0,
        1
      ],
      "correctText": "(1) <span class=\"fraction\"><span class=\"numerator\"><span class=\"fraction\"><span class=\"numerator\">3n</span><span class=\"denominator\">4</span></span> - C</span><span class=\"denominator\">n<sub style=\"font-size:0.8em\">m</sub></span></span> • (2) Q₃ - Q₁",
      "exp": "• <b>Công thức xác định Q₃ và khoảng tứ phân vị Δ_Q:</b><br>- Q₃ nội suy tuyến tính từ nhóm chứa 3n/4.<br>- Khoảng tứ phân vị: Δ_Q = Q₃ - Q₁."
    },
    {
      "type": "mcq",
      "q": "Biểu đồ tần số ghép nhóm hình bên biểu diễn khối lượng (gam) của 50 quả cam xuất khẩu. Khoảng biến thiên R của mẫu số liệu ghép nhóm này bằng bao nhiêu?",
      "opts": [
        "60 gam",
        "50 gam",
        "40 gam",
        "70 gam"
      ],
      "ans": 0,
      "correctText": "Phương án A: 60 gam",
      "exp": "• Dựa vào biểu đồ: Nhóm đầu tiên là [120; 135) có đầu mút trái 120 gam.<br>• Nhóm cuối cùng là [165; 180) có đầu mút phải 180 gam.<br>• Khoảng biến thiên: R = 180 - 120 = <b>60 gam</b>.",
      "svgGraph": "<svg viewBox=\"0 0 360 200\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"340\" height=\"180\" rx=\"8\" fill=\"rgba(15,23,42,0.9)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/><line x1=\"50\" y1=\"150\" x2=\"330\" y2=\"150\" stroke=\"rgba(255,255,255,0.3)\" stroke-width=\"1.2\"/><line x1=\"50\" y1=\"150\" x2=\"50\" y2=\"20\" stroke=\"rgba(255,255,255,0.3)\" stroke-width=\"1.2\"/><text x=\"325\" y=\"145\" fill=\"#38bdf8\" font-size=\"11\">Khối lượng (g)</text><rect x=\"65\" y=\"110\" width=\"45\" height=\"40\" fill=\"rgba(56,189,248,0.4)\" stroke=\"#38bdf8\"/><text x=\"87\" y=\"102\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">6</text><rect x=\"115\" y=\"70\" width=\"45\" height=\"80\" fill=\"rgba(56,189,248,0.4)\" stroke=\"#38bdf8\"/><text x=\"137\" y=\"62\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">16</text><rect x=\"165\" y=\"50\" width=\"45\" height=\"100\" fill=\"rgba(56,189,248,0.4)\" stroke=\"#38bdf8\"/><text x=\"187\" y=\"42\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">20</text><rect x=\"215\" y=\"100\" width=\"45\" height=\"50\" fill=\"rgba(56,189,248,0.4)\" stroke=\"#38bdf8\"/><text x=\"237\" y=\"92\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">8</text><text x=\"65\" y=\"165\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">120</text><text x=\"110\" y=\"165\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">135</text><text x=\"160\" y=\"165\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">150</text><text x=\"210\" y=\"165\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">165</text><text x=\"260\" y=\"165\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">180</text></svg>"
    },
    {
      "type": "mcq",
      "q": "Cho mẫu số liệu ghép nhóm điểm thi thử của 100 học sinh có Q₁ = 6,2 điểm và Q₃ = 8,6 điểm. Khoảng tứ phân vị của mẫu số liệu ghép nhóm này là:",
      "opts": [
        "Δ_Q = 2,4 điểm",
        "Δ_Q = 14,8 điểm",
        "Δ_Q = 7,4 điểm",
        "Δ_Q = 1,2 điểm"
      ],
      "ans": 0,
      "correctText": "Phương án A: Δ_Q = 2,4 điểm",
      "exp": "• Áp dụng công thức khoảng tứ phân vị:<br>Δ_Q = Q₃ - Q₁ = 8,6 - 6,2 = <b>2,4 điểm</b>."
    },
    {
      "type": "tf",
      "q": "Để khảo sát chất lượng dịch vụ, một phòng khám đa khoa thống kê thời gian chờ (phút) của 50 bệnh nhân:<br>[0; 5): 10 bệnh nhân; [5; 10): 22 bệnh nhân; [10; 15): 12 bệnh nhân; [15; 20): 6 bệnh nhân. Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Khoảng biến thiên của thời gian chờ khám là R = 20 phút.",
        "Nhóm chứa tứ phân vị thứ nhất Q₁ là nhóm [5; 10).",
        "Tứ phân vị thứ nhất của thời gian chờ là Q₁ = 5,57 phút.",
        "Khoảng tứ phân vị của thời gian chờ khám là Δ_Q ≈ 6,72 phút."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> R = 20 phút.<br>• <b>Ý b [Đúng]:</b> Nhóm chứa Q₁ là [5; 10).<br>• <b>Ý c [Đúng]:</b> Q₁ = 5 + (2,5/22)·5 ≈ 5,57 phút.<br>• <b>Ý d [Đúng]:</b> 3n/4 = 37,5. Nhóm chứa Q₃ là [10; 15). Q₃ = 10 + (5,5/12)·5 ≈ 12,29. Vậy Δ_Q = 12,29 - 5,57 ≈ 6,72 phút."
    },
    {
      "type": "mcq",
      "q": "Một công ty giao hàng khảo sát thời gian giao bưu kiện (giờ) tại hai trung tâm phân phối A và B. Trung tâm A có khoảng tứ phân vị Δ<sub style=\"font-size:0.8em\">Q,A</sub> = 3,2 giờ; Trung tâm B có khoảng tứ phân vị Δ<sub style=\"font-size:0.8em\">Q,B</sub> = 8,5 giờ. Nhận xét thực tế nào sau đây là chuẩn xác nhất?",
      "opts": [
        "Thời gian giao hàng tại Trung tâm A tập trung đồng đều hơn, ít biến động hơn Trung tâm B.",
        "Thời gian giao hàng tại Trung tâm B đồng đều và ổn định hơn Trung tâm A.",
        "Cả hai trung tâm có độ biến động thời gian giao hàng hoàn toàn như nhau.",
        "Trung tâm B luôn giao hàng nhanh hơn Trung tâm A trong mọi đơn hàng."
      ],
      "ans": 0,
      "correctText": "Phương án A: Thời gian giao hàng tại Trung tâm A tập trung đồng đều hơn, ít biến động hơn Trung tâm B.",
      "exp": "• <b>Phân tích thống kê:</b> Khoảng tứ phân vị Δ_Q càng nhỏ thì 50% dữ liệu trung tâm càng tập trung sít sao quanh trung vị, phản ánh độ ổn định và tính dự đoán cao.<br>• Vì Δ<sub style=\"font-size:0.8em\">Q,A</sub> = 3,2 giờ < Δ<sub style=\"font-size:0.8em\">Q,B</sub> = 8,5 giờ nên dịch vụ tại <b>Trung tâm A đồng đều và ổn định hơn</b>."
    }
  ],
  "10": [
    {
      "type": "mcq",
      "q": "Trong thống kê ghép nhóm, độ lệch chuẩn s được tính từ phương sai s² theo công thức nào?",
      "opts": [
        "s = √(s²)",
        "s = (s²)²",
        "s = s² / n",
        "s = 2s²"
      ],
      "ans": 0,
      "correctText": "Phương án A: s = √(s²)",
      "exp": "• <b>Định nghĩa (SGK Toán 12):</b> Độ lệch chuẩn s là căn bậc hai số học của phương sai: s = √(s²). Độ lệch chuẩn có cùng đơn vị đo với đại lượng đang khảo sát."
    },
    {
      "type": "mcq",
      "q": "Tính giá trị đại diện c₂ của nhóm số liệu [20; 30).",
      "opts": [
        "c₂ = 25",
        "c₂ = 20",
        "c₂ = 30",
        "c₂ = 10"
      ],
      "ans": 0,
      "correctText": "Phương án A: c₂ = 25",
      "exp": "• Giá trị đại diện của nửa khoảng [a; b) là trung bình cộng hai đầu mút:<br>c = <span class=\"fraction\"><span class=\"numerator\">a + b</span><span class=\"denominator\">2</span></span> = <span class=\"fraction\"><span class=\"numerator\">20 + 30</span><span class=\"denominator\">2</span></span> = <b>25</b>."
    },
    {
      "type": "mcq",
      "q": "Cho bảng tần số ghép nhóm có số trung bình x̄ = 10 và tổng <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">n</span></span>∑ nᵢcᵢ² = 116. Phương sai s² của mẫu số liệu ghép nhóm này bằng:",
      "opts": [
        "s² = 16",
        "s² = 4",
        "s² = 106",
        "s² = 216"
      ],
      "ans": 0,
      "correctText": "Phương án A: s² = 16",
      "exp": "• Áp dụng công thức tính phương sai biến đổi:<br>s² = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">n</span></span>∑ nᵢcᵢ² - (x̄)² = 116 - 10² = 116 - 100 = <b>16</b>.<br>(Khi đó độ lệch chuẩn là s = √16 = 4)."
    },
    {
      "type": "tf",
      "q": "Khảo sát cự ly ném bóng xa (mét) của 30 học sinh được ghi nhận theo bảng sau:<br>[20; 30): 6 học sinh; [30; 40): 9 học sinh; [40; 50): 9 học sinh; [50; 60): 6 học sinh. Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Giá trị đại diện của 4 nhóm lần lượt là 25; 35; 45; 55 (mét).",
        "Cự ly ném bóng trung bình của 30 học sinh là x̄ = 40 mét.",
        "Phương sai của mẫu số liệu ghép nhóm là s² = 105.",
        "Độ lệch chuẩn của cự ly ném bóng là s = √105 ≈ 10,25 mét."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> 25, 35, 45, 55 m.<br>• <b>Ý b [Đúng]:</b> x̄ = 1200 / 30 = 40 mét.<br>• <b>Ý c [Đúng]:</b> s² = 3150 / 30 = 105.<br>• <b>Ý d [Đúng]:</b> s = √105 ≈ 10,25 mét."
    },
    {
      "type": "match",
      "q": "Ghép các tình huống đánh giá thực tế (Cột A) với kết luận tương ứng dựa trên độ lệch chuẩn (Cột B):",
      "colA": [
        "Cổ phiếu X có độ lệch chuẩn lợi nhuận cao hơn cổ phiếu Y",
        "Dây chuyền sản xuất bulông có độ lệch chuẩn đường kính s = 0,02 mm (rất nhỏ)",
        "Điểm thi của lớp 12A có độ lệch chuẩn nhỏ hơn lớp 12B",
        "Thời gian hoàn thành dự án phần mềm có độ lệch chuẩn rất lớn"
      ],
      "colB": [
        "Cổ phiếu X có mức độ rủi ro biến động giá cao hơn cổ phiếu Y",
        "Máy móc gia công cơ khí có độ chính xác và độ ổn định rất cao",
        "Học sinh lớp 12A có học lực đồng đều hơn học sinh lớp 12B",
        "Tiến độ dự án khó dự đoán, tiềm ẩn nguy cơ chậm tiến độ"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "1-A • 2-B • 3-C • 4-D",
      "exp": "• <b>1 ghép A:</b> Độ lệch chuẩn lớn trong tài chính tương ứng rủi ro lớn.<br>• <b>2 ghép B:</b> Độ lệch chuẩn sai số cơ khí nhỏ chứng tỏ chất lượng đồng đều.<br>• <b>3 ghép C:</b> Độ lệch chuẩn điểm thi nhỏ nghĩa là phổ điểm tập trung.<br>• <b>4 ghép D:</b> Độ lệch chuẩn thời gian lớn nghĩa là dao động khó lường."
    },
    {
      "type": "drag",
      "q": "Chọn công thức thích hợp điền vào chỗ trống để hoàn thiện định nghĩa phương sai mẫu số liệu ghép nhóm:",
      "text": "Phương sai s² của mẫu số liệu ghép nhóm n quan sát được tính theo công thức: s² = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">n</span></span> ∑ nᵢ · [blank]² hoặc s² = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">n</span></span> ∑ nᵢcᵢ² - [blank]². Đại lượng đo độ phân tán có cùng đơn vị đo với số liệu là [blank].",
      "words": [
        "(cᵢ - x̄)",
        "(x̄)",
        "độ lệch chuẩn s",
        "khoảng biến thiên",
        "(cᵢ + x̄)"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "(1) (cᵢ - x̄) • (2) (x̄) • (3) độ lệch chuẩn s",
      "exp": "• <b>Công thức phương sai (SGK Toán 12):</b> s² = (1/n)∑ nᵢ(cᵢ - x̄)² = (1/n)∑ nᵢcᵢ² - (x̄)². Căn bậc hai s = √(s²) là độ lệch chuẩn có cùng đơn vị với mẫu số liệu."
    },
    {
      "type": "mcq",
      "q": "Biểu đồ ghép nhóm hình bên có số trung bình x̄ = 15. Phương sai s² của mẫu số liệu ghép nhóm này xấp xỉ bằng:",
      "opts": [
        "s² = 18,75",
        "s² = 25,00",
        "s² = 12,50",
        "s² = 9,50"
      ],
      "ans": 0,
      "correctText": "Phương án A: s² = 18,75",
      "exp": "• c₁ = 7,5; c₂ = 15; c₃ = 22,5; n = 30.<br>• x̄ = 15.<br>• s² = [5·(-7,5)² + 20·(0)² + 5·(7,5)²] / 30 = [2·5·56,25] / 30 = 562,5 / 30 = <b>18,75</b>.",
      "svgGraph": "<svg viewBox=\"0 0 360 200\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"340\" height=\"180\" rx=\"8\" fill=\"rgba(15,23,42,0.9)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/><line x1=\"50\" y1=\"150\" x2=\"320\" y2=\"150\" stroke=\"rgba(255,255,255,0.3)\" stroke-width=\"1.2\"/><rect x=\"70\" y=\"100\" width=\"55\" height=\"50\" fill=\"rgba(244,63,94,0.4)\" stroke=\"#f43f5e\"/><text x=\"97\" y=\"92\" fill=\"#f43f5e\" font-size=\"11\" text-anchor=\"middle\">5</text><rect x=\"140\" y=\"40\" width=\"65\" height=\"110\" fill=\"rgba(56,189,248,0.4)\" stroke=\"#38bdf8\"/><text x=\"172\" y=\"32\" fill=\"#38bdf8\" font-size=\"11\" text-anchor=\"middle\">20</text><rect x=\"220\" y=\"100\" width=\"55\" height=\"50\" fill=\"rgba(244,63,94,0.4)\" stroke=\"#f43f5e\"/><text x=\"247\" y=\"92\" fill=\"#f43f5e\" font-size=\"11\" text-anchor=\"middle\">5</text><text x=\"70\" y=\"165\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">5</text><text x=\"125\" y=\"165\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">10</text><text x=\"205\" y=\"165\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">20</text><text x=\"275\" y=\"165\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">25</text></svg>"
    },
    {
      "type": "mcq",
      "q": "Năng suất thu hoạch của hai giống lúa A và B được khảo sát tại các vùng canh tác. Giống lúa A có năng suất trung bình x̄<sub style=\"font-size:0.8em\">A</sub> = 65 tạ/ha và độ lệch chuẩn s<sub style=\"font-size:0.8em\">A</sub> = 2,5 tạ/ha. Giống lúa B có x̄<sub style=\"font-size:0.8em\">B</sub> = 65 tạ/ha và s<sub style=\"font-size:0.8em\">B</sub> = 6,8 tạ/ha. Giống lúa nào có năng suất ổn định hơn?",
      "opts": [
        "Giống lúa A (vì độ lệch chuẩn nhỏ hơn)",
        "Giống lúa B (vì độ lệch chuẩn lớn hơn)",
        "Cả hai giống lúa có độ ổn định như nhau",
        "Không thể so sánh được"
      ],
      "ans": 0,
      "correctText": "Phương án A: Giống lúa A (vì độ lệch chuẩn nhỏ hơn)",
      "exp": "• Cả hai giống lúa có cùng năng suất trung bình là 65 tạ/ha.<br>• Giống lúa A có độ lệch chuẩn s<sub style=\"font-size:0.8em\">A</sub> = 2,5 nhỏ hơn nhiều so với s<sub style=\"font-size:0.8em\">B</sub> = 6,8.<br>⇒ Năng suất giống lúa A ít bị biến động bởi thời tiết/đất đai hơn, tức <b>ổn định hơn giống lúa B</b>."
    },
    {
      "type": "tf",
      "q": "Một chuyên viên quản trị rủi ro theo dõi tỷ lệ sinh lời (%) hàng tháng của hai danh mục đầu tư Quỹ X và Quỹ Y trong 24 tháng qua. Kết quả tính toán thu được:<br>- Quỹ X: Tỷ suất sinh lời trung bình x̄<sub style=\"font-size:0.8em\">X</sub> = 12,5%, độ lệch chuẩn s<sub style=\"font-size:0.8em\">X</sub> = 2,1%.<br>- Quỹ Y: Tỷ suất sinh lời trung bình x̄<sub style=\"font-size:0.8em\">Y</sub> = 12,5%, độ lệch chuẩn s<sub style=\"font-size:0.8em\">Y</sub> = 7,4%.<br>Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Mức sinh lời trung bình kỳ vọng của hai quỹ là hoàn toàn như nhau (đều đạt 12,5%/tháng).",
        "Mức độ rủi ro và biến động lợi nhuận của Quỹ Y cao hơn gấp 3 lần so với Quỹ X.",
        "Nhà đầu tư theo trường phái an toàn, bảo toàn vốn nên lựa chọn Quỹ X.",
        "Phương sai tỷ suất sinh lời của Quỹ X lớn hơn phương sai của Quỹ Y."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Sai",
      "exp": "• <b>Ý a [Đúng]:</b> Cả 2 quỹ đều có x̄ = 12,5%.<br>• <b>Ý b [Đúng]:</b> s_Y / s_X = 7,4 / 2,1 ≈ 3,52 lần.<br>• <b>Ý c [Đúng]:</b> Quỹ X có độ lệch chuẩn nhỏ nên an toàn, ổn định.<br>• <b>Ý d [Sai]:</b> Phương sai s_X² = 2,1² = 4,41 nhỏ hơn nhiều so với s_Y² = 7,4² = 54,76."
    },
    {
      "type": "mcq",
      "q": "Một xưởng cơ khí đo đường kính 100 chi tiết trục máy sản xuất từ hai máy tiện tự động 1 và 2. Máy 1 có độ lệch chuẩn s₁ = 0,05 mm. Máy 2 có độ lệch chuẩn s₂ = 0,22 mm. Để sản xuất lô hàng cơ khí chính xác đòi hỏi dung sai khắt khe nhất, kỹ sư trưởng nên giao đơn hàng cho máy nào?",
      "opts": [
        "Máy 1 (vì độ lệch chuẩn nhỏ hơn, độ chính xác và đồng đều vượt trội)",
        "Máy 2 (vì độ lệch chuẩn lớn hơn)",
        "Giao máy nào cũng như nhau",
        "Không thể đưa ra quyết định"
      ],
      "ans": 0,
      "correctText": "Phương án A: Máy 1 (vì độ lệch chuẩn nhỏ hơn, độ chính xác và đồng đều vượt trội)",
      "exp": "• Độ lệch chuẩn s biểu thị mức độ sai lệch của các chi tiết so với kích thước thiết kế chuẩn.<br>• s₁ = 0,05 mm nhỏ hơn nhiều so với s₂ = 0,22 mm chứng tỏ máy 1 gia công đồng đều, tỉ lệ sản phẩm lỗi thấp.<br>⇒ Nên <b>chọn Máy 1</b>."
    }
  ],
  "11": [
    {
      "type": "mcq",
      "q": "Cho hàm số f(x) xác định trên khoảng K. Hàm số F(x) được gọi là một nguyên hàm của f(x) trên K nếu điều kiện nào sau đây thoả mãn?",
      "opts": [
        "F'(x) = f(x) với mọi x ∈ K",
        "f'(x) = F(x) với mọi x ∈ K",
        "F(x) = f'(x) + C",
        "F'(x) = f'(x)"
      ],
      "ans": 0,
      "correctText": "Phương án A: F'(x) = f(x) với mọi x ∈ K",
      "exp": "• <b>Định nghĩa nguyên hàm (SGK Toán 12):</b> Cho hàm số f(x) xác định trên khoảng K. Hàm số F(x) được gọi là một nguyên hàm của f(x) trên K nếu <b>F'(x) = f(x)</b> với mọi x ∈ K."
    },
    {
      "type": "mcq",
      "q": "Tìm họ nguyên hàm của hàm số f(x) = 3x² - 4x + 5.",
      "opts": [
        "x³ - 2x² + 5x + C",
        "3x³ - 4x² + 5x + C",
        "x³ - 4x² + 5x + C",
        "6x - 4 + C"
      ],
      "ans": 0,
      "correctText": "Phương án A: x³ - 2x² + 5x + C",
      "exp": "• Áp dụng công thức nguyên hàm cơ bản: ∫ xⁿ dx = <span class=\"fraction\"><span class=\"numerator\">xⁿ⁺¹</span><span class=\"denominator\">n + 1</span></span> + C.<br>• ∫ (3x² - 4x + 5) dx = 3·<span class=\"fraction\"><span class=\"numerator\">x³</span><span class=\"denominator\">3</span></span> - 4·<span class=\"fraction\"><span class=\"numerator\">x²</span><span class=\"denominator\">2</span></span> + 5x + C = <b>x³ - 2x² + 5x + C</b>."
    },
    {
      "type": "mcq",
      "q": "Tìm họ nguyên hàm của hàm số f(x) = e²ˣ + sin x.",
      "opts": [
        "<span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span>e²ˣ - cos x + C",
        "e²ˣ + cos x + C",
        "2e²ˣ - cos x + C",
        "<span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span>e²ˣ + cos x + C"
      ],
      "ans": 0,
      "correctText": "Phương án A: <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span>e²ˣ - cos x + C",
      "exp": "• ∫ e²ˣ dx = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span>e²ˣ.<br>• ∫ sin x dx = -cos x.<br>• Vậy họ nguyên hàm là <b><span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span>e²ˣ - cos x + C</b>."
    },
    {
      "type": "tf",
      "q": "Cho hàm số f(x) = (2x + 1)³ và gọi F(x) là một nguyên hàm của f(x). Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Họ nguyên hàm của f(x) là F(x) = <span class=\"fraction\"><span class=\"numerator\">(2x + 1)⁴</span><span class=\"denominator\">8</span></span> + C.",
        "Nếu đặt ẩn phụ u = 2x + 1 thì du = 2 dx.",
        "Nguyên hàm F(x) thoả mãn F(0) = 1 có hằng số C = <span class=\"fraction\"><span class=\"numerator\">7</span><span class=\"denominator\">8</span></span>.",
        "Với hằng số C vừa tìm được ở ý c, ta có F(1) = 11."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> ∫ (2x + 1)³ dx = <span class=\"fraction\"><span class=\"numerator\">(2x + 1)⁴</span><span class=\"denominator\">4 · 2</span></span> + C = <span class=\"fraction\"><span class=\"numerator\">(2x + 1)⁴</span><span class=\"denominator\">8</span></span> + C.<br>• <b>Ý b [Đúng]:</b> u = 2x + 1 ⇒ du = 2 dx.<br>• <b>Ý c [Đúng]:</b> F(0) = (1)⁴/8 + C = 1 ⇒ C = 1 - 1/8 = 7/8.<br>• <b>Ý d [Đúng]:</b> F(1) = (2·1 + 1)⁴/8 + 7/8 = 3⁴/8 + 7/8 = 81/8 + 7/8 = 88/8 = 11."
    },
    {
      "type": "match",
      "q": "Ghép các đại lượng trong các quá trình biến đổi thực tế (Cột A) với công thức nguyên hàm tương ứng (Cột B):",
      "colA": [
        "Quãng đường s(t) khi biết vận tốc v(t)",
        "Điện tích dịch chuyển q(t) khi biết cường độ dòng điện tức thời i(t)",
        "Tổng sản lượng khai thác quặng Q(t) khi biết tốc độ khai thác r(t)",
        "Nhiệt lượng Q(T) cần cung cấp khi biết nhiệt dung phụ thuộc nhiệt độ C(T)"
      ],
      "colB": [
        "s(t) = ∫ v(t) dt",
        "q(t) = ∫ i(t) dt",
        "Q(t) = ∫ r(t) dt",
        "Q(T) = ∫ C(T) dT"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "1-A • 2-B • 3-C • 4-D",
      "exp": "• <b>1 ghép A:</b> v(t) = s'(t) ⇒ s(t) = ∫ v(t) dt.<br>• <b>2 ghép B:</b> i(t) = q'(t) ⇒ q(t) = ∫ i(t) dt.<br>• <b>3 ghép C:</b> r(t) = Q'(t) ⇒ Q(t) = ∫ r(t) dt.<br>• <b>4 ghép D:</b> C(T) = dQ/dT ⇒ Q = ∫ C(T) dT."
    },
    {
      "type": "drag",
      "q": "Chọn công thức thích hợp điền vào chỗ trống để hoàn thiện bảng nguyên hàm cơ bản:",
      "text": "Với a là số thực khác 0: ∫ eᵃˣ dx = [blank] + C; ∫ cos(ax) dx = [blank] + C; ∫ <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">ax + b</span></span> dx = [blank] + C.",
      "words": [
        "<span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">a</span></span>eᵃˣ",
        "<span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">a</span></span>sin(ax)",
        "<span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">a</span></span>ln|ax + b|",
        "eᵃˣ",
        "sin(ax)"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "(1) <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">a</span></span>eᵃˣ • (2) <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">a</span></span>sin(ax) • (3) <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">a</span></span>ln|ax + b|",
      "exp": "• <b>Quy tắc nguyên hàm mở rộng hàm hợp f(ax + b):</b> Nhân thêm hệ số 1/a vào trước nguyên hàm gốc."
    },
    {
      "type": "mcq",
      "q": "Tìm nguyên hàm ∫ 2x e<sup style=\"font-size:0.8em\">x²</sup> dx bằng phương pháp đổi biến số.",
      "opts": [
        "e<sup style=\"font-size:0.8em\">x²</sup> + C",
        "2e<sup style=\"font-size:0.8em\">x²</sup> + C",
        "<span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span>e<sup style=\"font-size:0.8em\">x²</sup> + C",
        "x² e<sup style=\"font-size:0.8em\">x²</sup> + C"
      ],
      "ans": 0,
      "correctText": "Phương án A: e<sup style=\"font-size:0.8em\">x²</sup> + C",
      "exp": "• Đặt u = x² ⇒ du = 2x dx.<br>• Nguyên hàm trở thành: ∫ eᵘ du = eᵘ + C = <b>e<sup style=\"font-size:0.8em\">x²</sup> + C</b>.",
      "svgGraph": "<svg viewBox=\"0 0 360 140\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"340\" height=\"120\" rx=\"8\" fill=\"rgba(15,23,42,0.9)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/><text x=\"180\" y=\"45\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"800\" text-anchor=\"middle\">Phương pháp Đổi biến số</text><text x=\"60\" y=\"80\" fill=\"#34d399\" font-size=\"13\" font-weight=\"700\">u = x²</text><line x1=\"120\" y1=\"75\" x2=\"160\" y2=\"75\" stroke=\"#34d399\" stroke-width=\"2\"/><text x=\"180\" y=\"80\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"700\">du = 2x dx</text><text x=\"180\" y=\"112\" fill=\"#cbd5e1\" font-size=\"12\" text-anchor=\"middle\">∫ eᵘ du = eᵘ + C = e<tspan dy=\"-4\" font-size=\"10\">x²</tspan><tspan dy=\"4\"> + C</tspan></text></svg>"
    },
    {
      "type": "mcq",
      "q": "Tìm hàm số f(x) biết rằng f'(x) = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2x - 1</span></span> (với x > 1/2) và thoả mãn điều kiện ban đầu f(1) = 3.",
      "opts": [
        "f(x) = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span>ln(2x - 1) + 3",
        "f(x) = ln(2x - 1) + 3",
        "f(x) = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span>ln(2x - 1) + 1",
        "f(x) = 2ln(2x - 1) + 3"
      ],
      "ans": 0,
      "correctText": "Phương án A: f(x) = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span>ln(2x - 1) + 3",
      "exp": "• f(x) = ∫ <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2x - 1</span></span> dx = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span>ln(2x - 1) + C (do x > 1/2).<br>• f(1) = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span>ln(1) + C = 3 ⇒ C = 3.<br>• Vậy hàm số là <b>f(x) = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span>ln(2x - 1) + 3</b>."
    },
    {
      "type": "tf",
      "q": "Một xe ô tô đang chạy với vận tốc 20 m/s thì người lái xe đạp phanh. Kể từ thời điểm đó, ô tô chuyển động chậm dần đều với gia tốc a(t) = -4 (m/s²). Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Vận tốc tức thời của ô tô tại thời điểm t giây sau khi phanh là v(t) = 20 - 4t (m/s).",
        "Sau đúng 5 giây kể từ lúc đạp phanh, ô tô dừng lại hẳn.",
        "Quãng đường ô tô di chuyển từ lúc phanh đến thời điểm t là s(t) = 20t - 2t² (mét).",
        "Từ lúc đạp phanh đến khi dừng lại hẳn, ô tô đi được quãng đường dài 50 mét."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> v(t) = ∫ a(t) dt = -4t + C. Tại t = 0 thì v(0) = 20 ⇒ C = 20 ⇒ v(t) = 20 - 4t.<br>• <b>Ý b [Đúng]:</b> Xe dừng hẳn khi v(t) = 0 ⇔ 20 - 4t = 0 ⇔ t = 5 giây.<br>• <b>Ý c [Đúng]:</b> s(t) = ∫ v(t) dt = 20t - 2t² + C'. Tại t = 0 thì s(0) = 0 ⇒ s(t) = 20t - 2t².<br>• <b>Ý d [Đúng]:</b> Quãng đường khi dừng hẳn: s(5) = 20(5) - 2(5²) = 100 - 50 = 50 mét."
    },
    {
      "type": "mcq",
      "q": "Tốc độ tăng trưởng số cá thể của một đàn thỏ rừng được mô hình hoá bởi hàm số N'(t) = 150 e⁰·⁰⁴ᵗ (con/tháng), trong đó t là thời gian tính bằng tháng. Ban đầu (t = 0), đàn thỏ có 500 con. Số lượng cá thể thỏ rừng sau 12 tháng (làm tròn đến hàng đơn vị) là bao nhiêu con?",
      "opts": [
        "2810 con",
        "1500 con",
        "3500 con",
        "2310 con"
      ],
      "ans": 0,
      "correctText": "Phương án A: 2810 con",
      "exp": "• N(t) = ∫ 150 e⁰·⁰⁴ᵗ dt = <span class=\"fraction\"><span class=\"numerator\">150</span><span class=\"denominator\">0,04</span></span> e⁰·⁰⁴ᵗ + C = 3750 e⁰·⁰⁴ᵗ + C.<br>• Ban đầu N(0) = 3750 + C = 500 ⇒ C = -3250.<br>• Sau 12 tháng: N(12) = 3750 e⁰·⁴⁸ - 3250 ≈ 3750 · 1,616 - 3250 ≈ 6060 - 3250 = <b>2810 con</b>."
    }
  ],
  "12": [
    {
      "type": "mcq",
      "q": "Cho hàm số f(x) liên tục trên đoạn [a; b] và F(x) là một nguyên hàm của f(x) trên [a; b]. Công thức Newton - Leibniz xác định tích phân từ a đến b của f(x) là:",
      "opts": [
        "∫ₐᵇ f(x) dx = F(b) - F(a)",
        "∫ₐᵇ f(x) dx = F(a) - F(b)",
        "∫ₐᵇ f(x) dx = F(b) + F(a)",
        "∫ₐᵇ f(x) dx = f(b) - f(a)"
      ],
      "ans": 0,
      "correctText": "Phương án A: ∫ₐᵇ f(x) dx = F(b) - F(a)",
      "exp": "• <b>Công thức Newton - Leibniz (SGK Toán 12):</b> Tích phân xác định của hàm liên tục bằng hiệu số giá trị nguyên hàm tại cận trên và cận dưới: ∫ₐᵇ f(x) dx = F(x)|ₐᵇ = F(b) - F(a)."
    },
    {
      "type": "mcq",
      "q": "Tính giá trị của tích phân I = ∫₀² (3x² - 2x + 1) dx.",
      "opts": [
        "6",
        "8",
        "4",
        "10"
      ],
      "ans": 0,
      "correctText": "Phương án A: 6",
      "exp": "• Nguyên hàm: F(x) = x³ - x² + x.<br>• Thay cận: I = F(2) - F(0) = (2³ - 2² + 2) - 0 = (8 - 4 + 2) = <b>6</b>."
    },
    {
      "type": "mcq",
      "q": "Cho ∫₁³ f(x) dx = 5 và ∫₃⁵ f(x) dx = -2. Tính giá trị của tích phân ∫₁⁵ f(x) dx.",
      "opts": [
        "3",
        "7",
        "-7",
        "10"
      ],
      "ans": 0,
      "correctText": "Phương án A: 3",
      "exp": "• Áp dụng tính chất chèn cận của tích phân:<br>∫₁⁵ f(x) dx = ∫₁³ f(x) dx + ∫₃⁵ f(x) dx = 5 + (-2) = <b>3</b>."
    },
    {
      "type": "tf",
      "q": "Cho tích phân I = ∫₀¹ (2x + 1) eˣ dx. Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Nếu áp dụng phương pháp tích phân từng phần, ta đặt u = 2x + 1 và dv = eˣ dx thì du = 2 dx và v = eˣ.",
        "Biểu thức tích phân từng phần là I = [(2x + 1)eˣ]₀¹ - 2∫₀¹ eˣ dx.",
        "Giá trị của số hạng ngoài tích phân là [(2x + 1)eˣ]₀¹ = 3e - 1.",
        "Giá trị cuối cùng của tích phân là I = e + 1."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> u = 2x + 1 ⇒ du = 2 dx; dv = eˣ dx ⇒ v = eˣ.<br>• <b>Ý b [Đúng]:</b> I = u·v|₀¹ - ∫₀¹ v du = [(2x+1)eˣ]₀¹ - 2∫₀¹ eˣ dx.<br>• <b>Ý c [Đúng]:</b> Thay cận: (2·1+1)e¹ - (2·0+1)e⁰ = 3e - 1.<br>• <b>Ý d [Đúng]:</b> 2∫₀¹ eˣ dx = 2(e¹ - e⁰) = 2e - 2. Vậy I = (3e - 1) - (2e - 2) = 3e - 1 - 2e + 2 = e + 1."
    },
    {
      "type": "match",
      "q": "Ghép các bài toán thực tế/kĩ thuật tính bằng tích phân xác định (Cột A) với công thức tương ứng (Cột B):",
      "colA": [
        "Công cơ học của lực F(x) kéo lò xo dãn từ x₁ đến x₂",
        "Tổng thể tích nước xả qua cống đập trong khoảng thời gian từ t₁ đến t₂",
        "Điện năng tiêu thụ của thiết bị công suất P(t) từ 0 đến T",
        "Khối lượng thanh kim loại có mật độ khối lượng dài ρ(x)"
      ],
      "colB": [
        "A = ∫_{x₁}^{x₂} F(x) dx",
        "V = ∫_{t₁}^{t₂} q(t) dt (q là lưu lượng dòng chảy)",
        "W = ∫₀ᵀ P(t) dt",
        "m = ∫₀ᴸ ρ(x) dx"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "1-A • 2-B • 3-C • 4-D",
      "exp": "• Tất cả các đại lượng tích luỹ theo thời gian/không gian trong khoa học kĩ thuật đều được tính bằng <b>tích phân xác định</b> của hàm mật độ/tốc độ tương ứng."
    },
    {
      "type": "drag",
      "q": "Chọn công thức thích hợp điền vào chỗ trống để hoàn thiện công thức tích phân từng phần:",
      "text": "Nếu u(x) và v(x) là hai hàm số có đạo hàm liên tục trên [a; b] thì: ∫ₐᵇ u dv = [blank] - [blank]. Phương pháp đổi biến số cho tích phân: Khi đổi biến t = u(x) ta bắt buộc phải [blank].",
      "words": [
        "[u·v]ₐᵇ",
        "∫ₐᵇ v du",
        "đổi cận",
        "giữ nguyên cận",
        "u'·v'"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "(1) [u·v]ₐᵇ • (2) ∫ₐᵇ v du • (3) đổi cận",
      "exp": "• <b>Tích phân từng phần:</b> ∫ u dv = uv|ₐᵇ - ∫ v du.<br>• <b>Đổi biến số tích phân:</b> Phải luôn <b>đổi cận</b> tương ứng theo biến mới."
    },
    {
      "type": "mcq",
      "q": "Đồ thị hàm số y = f(x) cắt trục hoành tại các điểm có hoành độ -1, 1, 3 như hình vẽ bên. Biết diện tích hai phần hình phẳng là S₁ = 4 và S₂ = 3. Giá trị của tích phân I = ∫₋₁³ f(x) dx bằng:",
      "opts": [
        "1",
        "7",
        "-1",
        "-7"
      ],
      "ans": 0,
      "correctText": "Phương án A: 1",
      "exp": "• Trên đoạn [-1; 1], đồ thị nằm phía trên trục hoành nên ∫₋₁¹ f(x) dx = S₁ = 4.<br>• Trên đoạn [1; 3], đồ thị nằm phía dưới trục hoành nên ∫₁³ f(x) dx = -S₂ = -3.<br>• Tích phân: I = ∫₋₁³ f(x) dx = S₁ - S₂ = 4 - 3 = <b>1</b>.",
      "svgGraph": "<svg viewBox=\"0 0 380 200\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrow12\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n  </defs>\n  <rect x=\"8\" y=\"8\" width=\"364\" height=\"184\" rx=\"10\" fill=\"rgba(15,23,42,0.95)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/>\n  <!-- Axis: O at (180, 100). Equal spacing: 60px per 2 units -> 30px per unit -->\n  <!-- x = -1 at 90, x = 1 at 150, x = 3 at 270 (Wait: -1 to 1 is 2 units, 1 to 3 is 2 units) -->\n  <!-- Let 1 unit = 40px: -1 at 100, 1 at 180, 3 at 260. Both distances = 80px! -->\n  <line x1=\"25\" y1=\"100\" x2=\"355\" y2=\"100\" stroke=\"rgba(255,255,255,0.4)\" stroke-width=\"1.4\" marker-end=\"url(#arrow12)\"/>\n  <text x=\"355\" y=\"92\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"700\">x</text>\n\n  <!-- Region 1: from 100 to 180 (S1 = 4) -->\n  <path d=\"M 100 100 Q 140 30 180 100\" fill=\"rgba(56,189,248,0.25)\" stroke=\"#38bdf8\" stroke-width=\"2.2\"/>\n  <text x=\"140\" y=\"75\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">S₁ = 4</text>\n\n  <!-- Region 2: from 180 to 260 (S2 = 3) -->\n  <path d=\"M 180 100 Q 220 160 260 100\" fill=\"rgba(244,63,94,0.25)\" stroke=\"#f43f5e\" stroke-width=\"2.2\"/>\n  <text x=\"220\" y=\"135\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">S₂ = 3</text>\n\n  <!-- Axis Labels -->\n  <circle cx=\"100\" cy=\"100\" r=\"3.5\" fill=\"#cbd5e1\"/>\n  <text x=\"100\" y=\"118\" fill=\"#cbd5e1\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">-1</text>\n  <circle cx=\"180\" cy=\"100\" r=\"3.5\" fill=\"#cbd5e1\"/>\n  <text x=\"180\" y=\"118\" fill=\"#cbd5e1\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">1</text>\n  <circle cx=\"260\" cy=\"100\" r=\"3.5\" fill=\"#cbd5e1\"/>\n  <text x=\"260\" y=\"118\" fill=\"#cbd5e1\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">3</text>\n</svg>"
    },
    {
      "type": "mcq",
      "q": "Tính giá trị của tích phân I = ∫₀¹ <span class=\"fraction\"><span class=\"numerator\">x</span><span class=\"denominator\">√(x² + 1)</span></span> dx.",
      "opts": [
        "√2 - 1",
        "√2",
        "1",
        "2√2 - 1"
      ],
      "ans": 0,
      "correctText": "Phương án A: √2 - 1",
      "exp": "• Đặt u = √(x² + 1) ⇒ u² = x² + 1 ⇒ 2u du = 2x dx ⇒ u du = x dx.<br>• Đổi cận: x = 0 ⇒ u = 1; x = 1 ⇒ u = √2.<br>• Tích phân: I = ∫₁<sup style=\"font-size:0.8em\">√2</sup> <span class=\"fraction\"><span class=\"numerator\">u du</span><span class=\"denominator\">u</span></span> = ∫₁<sup style=\"font-size:0.8em\">√2</sup> du = [u]₁<sup style=\"font-size:0.8em\">√2</sup> = <b>√2 - 1</b>."
    },
    {
      "type": "tf",
      "q": "Một hồ chứa thủy điện điều tiết dòng chảy, tốc độ xả nước qua cửa đập theo thời gian t (phút) được cho bởi hàm số v(t) = 120 - 2t (m³/phút) với 0 ≤ t ≤ 60. Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Tốc độ xả nước giảm dần theo thời gian và bằng 0 tại t = 60 phút.",
        "Lượng nước xả ra trong 10 phút đầu tiên được tính bằng tích phân V₁₀ = ∫₀¹⁰ (120 - 2t) dt.",
        "Lượng nước xả ra trong 10 phút đầu tiên là 1100 m³.",
        "Tổng lượng nước hồ xả ra trong toàn bộ 60 phút là 3600 m³."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> v(60) = 120 - 120 = 0 m³/phút.<br>• <b>Ý b [Đúng]:</b> V = ∫ v(t) dt.<br>• <b>Ý c [Đúng]:</b> V₁₀ = [120t - t²]₀¹⁰ = 120(10) - 10² = 1200 - 100 = 1100 m³.<br>• <b>Ý d [Đúng]:</b> V₆₀ = [120t - t²]₀⁶⁰ = 120(60) - 60² = 7200 - 3600 = 3600 m³."
    },
    {
      "type": "mcq",
      "q": "Lực đàn hồi của một lò xo tuân theo định luật Hooke: F(x) = 300x (N), trong đó x là độ biến dạng tính bằng mét. Công cơ học cần thiết để kéo lò xo dãn từ vị trí tự nhiên (x = 0) đến vị trí dãn 10 cm (x = 0,1 m) bằng bao nhiêu Jun?",
      "opts": [
        "1,5 J",
        "3 J",
        "15 J",
        "0,15 J"
      ],
      "ans": 0,
      "correctText": "Phương án A: 1,5 J",
      "exp": "• Công cơ học: A = ∫₀⁰·¹ F(x) dx = ∫₀⁰·¹ 300x dx.<br>• A = [<span class=\"fraction\"><span class=\"numerator\">300x²</span><span class=\"denominator\">2</span></span>]₀⁰·¹ = [150x²]₀⁰·¹ = 150 · (0,1)² = 150 · 0,01 = <b>1,5 Jun</b>."
    }
  ],
  "13": [
    {
      "type": "mcq",
      "q": "Diện tích S của hình phẳng giới hạn bởi hai đồ thị hàm số liên tục y = f(x), y = g(x) và hai đường thẳng x = a, x = b (a < b) được tính bằng công thức nào?",
      "opts": [
        "S = ∫ₐᵇ |f(x) - g(x)| dx",
        "S = ∫ₐᵇ [f(x) - g(x)] dx",
        "S = |∫ₐᵇ f(x) dx| - |∫ₐᵇ g(x) dx|",
        "S = π ∫ₐᵇ [f(x) - g(x)]² dx"
      ],
      "ans": 0,
      "correctText": "Phương án A: S = ∫ₐᵇ |f(x) - g(x)| dx",
      "exp": "• <b>Công thức diện tích hình phẳng (SGK Toán 12):</b> Diện tích luôn là đại lượng không âm nên phải có dấu giá trị tuyệt đối trong tích phân: S = ∫ₐᵇ |f(x) - g(x)| dx."
    },
    {
      "type": "mcq",
      "q": "Tính diện tích S của hình phẳng giới hạn bởi đường cong parabol y = x² và đường thẳng y = 2x.",
      "opts": [
        "4/3",
        "2/3",
        "4",
        "2"
      ],
      "ans": 0,
      "correctText": "Phương án A: 4/3",
      "exp": "• Phương trình hoành độ giao điểm: x² = 2x ⇔ x² - 2x = 0 ⇔ x = 0 hoặc x = 2.<br>• Trên đoạn [0; 2], đường thẳng y = 2x nằm trên parabol y = x².<br>• Diện tích: S = ∫₀² (2x - x²) dx = [x² - <span class=\"fraction\"><span class=\"numerator\">x³</span><span class=\"denominator\">3</span></span>]₀² = 4 - <span class=\"fraction\"><span class=\"numerator\">8</span><span class=\"denominator\">3</span></span> = <b><span class=\"fraction\"><span class=\"numerator\">4</span><span class=\"denominator\">3</span></span></b>."
    },
    {
      "type": "mcq",
      "q": "Tính thể tích V của khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi đồ thị y = √x, trục hoành và hai đường thẳng x = 1, x = 4 xung quanh trục hoành Ox.",
      "opts": [
        "15π/2",
        "15/2",
        "7π/2",
        "8π"
      ],
      "ans": 0,
      "correctText": "Phương án A: 15π/2",
      "exp": "• Công thức thể tích khối tròn xoay quanh Ox: V = π ∫ₐᵇ [f(x)]² dx.<br>• V = π ∫₁⁴ (√x)² dx = π ∫₁⁴ x dx = π [<span class=\"fraction\"><span class=\"numerator\">x²</span><span class=\"denominator\">2</span></span>]₁⁴ = π (<span class=\"fraction\"><span class=\"numerator\">16</span><span class=\"denominator\">2</span></span> - <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span>) = <b><span class=\"fraction\"><span class=\"numerator\">15π</span><span class=\"denominator\">2</span></span></b>."
    },
    {
      "type": "tf",
      "q": "Cho hình phẳng (H) giới hạn bởi parabol y = 4 - x² và trục hoành Ox (y = 0). Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Hoành độ giao điểm của parabol với trục hoành là x = -2 và x = 2.",
        "Diện tích của hình phẳng (H) là S = ∫₋₂² (4 - x²) dx.",
        "Giá trị diện tích của hình phẳng (H) là S = <span class=\"fraction\"><span class=\"numerator\">32</span><span class=\"denominator\">3</span></span>.",
        "Thể tích khối tròn xoay khi quay (H) quanh trục Ox là V = <span class=\"fraction\"><span class=\"numerator\">512π</span><span class=\"denominator\">15</span></span>."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> 4 - x² = 0 ⇔ x = ±2.<br>• <b>Ý b [Đúng]:</b> Trên [-2; 2], 4 - x² ≥ 0 nên S = ∫₋₂² (4 - x²) dx.<br>• <b>Ý c [Đúng]:</b> S = [4x - x³/3]₋₂² = (8 - 8/3) - (-8 + 8/3) = 16/3 + 16/3 = 32/3.<br>• <b>Ý d [Đúng]:</b> V = π ∫₋₂² (4 - x²)² dx = π ∫₋₂² (16 - 8x² + x⁴) dx = 2π [16x - 8x³/3 + x⁵/5]₀² = 2π (32 - 64/3 + 32/5) = 2π (480 - 320 + 96)/15 = 2π(256/15) = 512π/15."
    },
    {
      "type": "match",
      "q": "Ghép các cấu kiện kiến trúc và vật dụng thực tế (Cột A) với mô hình hình học tích phân tương ứng (Cột B):",
      "colA": [
        "Cổng chào hình parabol trường học có chiều rộng 8 m và chiều cao 6 m",
        "Chiếc thùng tô-nô đựng rượu hình khối tròn xoay",
        "Bồn hoa hình elip trong công viên",
        "Mặt cắt con đê chắn sóng hình thang cong"
      ],
      "colB": [
        "Diện tích hình phẳng giới hạn bởi parabol úp y = 6 - (3/8)x²",
        "Thể tích khối tròn xoay tạo bởi cung elip quanh trục hoành",
        "Diện tích hình elip S = π·a·b",
        "Diện tích hình phẳng giới hạn bởi đường cong bờ đê và trục hoành"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "1-A • 2-B • 3-C • 4-D",
      "exp": "• <b>1 ghép A:</b> Đỉnh cổng cao 6 m, chân cổng x = ±4 ⇒ y = 6 - (3/8)x².<br>• <b>2 ghép B:</b> Thùng tô-nô là khối tròn xoay của cung tròn hoặc cung elip.<br>• <b>3 ghép C:</b> Bồn hoa elip có diện tích S = πab.<br>• <b>4 ghép D:</b> Tiết diện đê tính bằng tích phân hình thang cong."
    },
    {
      "type": "drag",
      "q": "Chọn công thức thích hợp điền vào chỗ trống để hoàn thiện công thức tính thể tích vật thể theo diện tích mặt cắt S(x):",
      "text": "Một vật thể giới hạn bởi hai mặt phẳng vuông góc với trục Ox tại x = a và x = b (a < b). Thiết diện của vật thể bị cắt bởi mặt phẳng vuông góc với Ox tại x có diện tích là S(x) liên tục trên [a; b]. Thể tích vật thể là V = [blank]. Nếu là khối tròn xoay do hình phẳng quay quanh Ox thì S(x) = [blank].",
      "words": [
        "∫ₐᵇ S(x) dx",
        "π [f(x)]²",
        "π ∫ₐᵇ S(x) dx",
        "2π f(x)"
      ],
      "ans": [
        0,
        1
      ],
      "correctText": "(1) ∫ₐᵇ S(x) dx • (2) π [f(x)]²",
      "exp": "• <b>Công thức thể tích vật thể:</b> V = ∫ₐᵇ S(x) dx. Khi thiết diện là hình tròn bán kính r = |f(x)| thì S(x) = π [f(x)]²."
    },
    {
      "type": "mcq",
      "q": "Tính diện tích phần gạch chéo giới hạn bởi parabol y = -x² + 3 và đường thẳng y = 2x như hình vẽ bên.",
      "opts": [
        "32/3",
        "16/3",
        "8/3",
        "4"
      ],
      "ans": 0,
      "correctText": "Phương án A: 32/3",
      "exp": "• Hoành độ giao điểm: -x² + 3 = 2x ⇔ x² + 2x - 3 = 0 ⇔ x = -3 hoặc x = 1.<br>• Parabol nằm phía trên đường thẳng trên [-3; 1]:<br>S = ∫₋₃¹ [(-x² + 3) - 2x] dx = [-<span class=\"fraction\"><span class=\"numerator\">x³</span><span class=\"denominator\">3</span></span> - x² + 3x]₋₃¹.<br>• Thay x = 1: -1/3 - 1 + 3 = 5/3.<br>• Thay x = -3: -(-27)/3 - 9 - 9 = 9 - 18 = -9.<br>• S = 5/3 - (-9) = 5/3 + 27/3 = <b>32/3</b>.",
      "svgGraph": "<svg viewBox=\"0 0 380 230\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrow5\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n  </defs>\n  <rect x=\"8\" y=\"8\" width=\"364\" height=\"214\" rx=\"10\" fill=\"rgba(15,23,42,0.95)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/>\n  <!-- Axes: O at (180, 130) -->\n  <line x1=\"25\" y1=\"130\" x2=\"355\" y2=\"130\" stroke=\"rgba(255,255,255,0.4)\" stroke-width=\"1.4\" marker-end=\"url(#arrow5)\"/>\n  <line x1=\"180\" y1=\"215\" x2=\"180\" y2=\"20\" stroke=\"rgba(255,255,255,0.4)\" stroke-width=\"1.4\" marker-end=\"url(#arrow5)\"/>\n  <text x=\"355\" y=\"122\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"700\">x</text>\n  <text x=\"190\" y=\"25\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"700\">y</text>\n  <text x=\"168\" y=\"145\" fill=\"#cbd5e1\" font-size=\"12\" font-style=\"italic\">O</text>\n\n  <!-- Shaded Area -->\n  <path d=\"M 84.0,214.0 L 85.6,209.8 L 87.2,205.7 L 88.8,201.7 L 90.4,197.8 L 92.0,193.9 L 93.6,190.1 L 95.2,186.3 L 96.8,182.6 L 98.4,179.0 L 100.0,175.5 L 101.6,172.0 L 103.2,168.6 L 104.8,165.3 L 106.4,162.1 L 108.0,158.9 L 109.6,155.8 L 111.2,152.7 L 112.8,149.7 L 114.4,146.8 L 116.0,144.0 L 117.6,141.2 L 119.2,138.5 L 120.8,135.9 L 122.4,133.4 L 124.0,130.9 L 125.6,128.5 L 127.2,126.1 L 128.8,123.8 L 130.4,121.6 L 132.0,119.5 L 133.6,117.4 L 135.2,115.4 L 136.8,113.5 L 138.4,111.7 L 140.0,109.9 L 141.6,108.2 L 143.2,106.5 L 144.8,104.9 L 146.4,103.4 L 148.0,102.0 L 149.6,100.6 L 151.2,99.3 L 152.8,98.1 L 154.4,97.0 L 156.0,95.9 L 157.6,94.9 L 159.2,93.9 L 160.8,93.0 L 162.4,92.2 L 164.0,91.5 L 165.6,90.8 L 167.2,90.2 L 168.8,89.7 L 170.4,89.3 L 172.0,88.9 L 173.6,88.6 L 175.2,88.3 L 176.8,88.1 L 178.4,88.0 L 180.0,88.0 L 181.6,88.0 L 183.2,88.1 L 184.8,88.3 L 186.4,88.6 L 188.0,88.9 L 189.6,89.3 L 191.2,89.7 L 192.8,90.2 L 194.4,90.8 L 196.0,91.5 L 197.6,92.2 L 199.2,93.0 L 200.8,93.9 L 202.4,94.9 L 204.0,95.9 L 205.6,97.0 L 207.2,98.1 L 208.8,99.3 L 210.4,100.6 L 212.0,102.0 L 84.0,214.0 Z\" fill=\"rgba(244,63,94,0.3)\" stroke=\"none\"/>\n\n  <!-- Parabol -->\n  <path d=\"M 68.0,259.5 L 69.6,254.6 L 71.2,249.8 L 72.8,245.1 L 74.4,240.5 L 76.0,235.9 L 77.6,231.4 L 79.2,226.9 L 80.8,222.5 L 82.4,218.2 L 84.0,214.0 L 85.6,209.8 L 87.2,205.7 L 88.8,201.7 L 90.4,197.8 L 92.0,193.9 L 93.6,190.1 L 95.2,186.3 L 96.8,182.6 L 98.4,179.0 L 100.0,175.5 L 101.6,172.0 L 103.2,168.6 L 104.8,165.3 L 106.4,162.1 L 108.0,158.9 L 109.6,155.8 L 111.2,152.7 L 112.8,149.7 L 114.4,146.8 L 116.0,144.0 L 117.6,141.2 L 119.2,138.5 L 120.8,135.9 L 122.4,133.4 L 124.0,130.9 L 125.6,128.5 L 127.2,126.1 L 128.8,123.8 L 130.4,121.6 L 132.0,119.5 L 133.6,117.4 L 135.2,115.4 L 136.8,113.5 L 138.4,111.7 L 140.0,109.9 L 141.6,108.2 L 143.2,106.5 L 144.8,104.9 L 146.4,103.4 L 148.0,102.0 L 149.6,100.6 L 151.2,99.3 L 152.8,98.1 L 154.4,97.0 L 156.0,95.9 L 157.6,94.9 L 159.2,93.9 L 160.8,93.0 L 162.4,92.2 L 164.0,91.5 L 165.6,90.8 L 167.2,90.2 L 168.8,89.7 L 170.4,89.3 L 172.0,88.9 L 173.6,88.6 L 175.2,88.3 L 176.8,88.1 L 178.4,88.0 L 180.0,88.0 L 181.6,88.0 L 183.2,88.1 L 184.8,88.3 L 186.4,88.6 L 188.0,88.9 L 189.6,89.3 L 191.2,89.7 L 192.8,90.2 L 194.4,90.8 L 196.0,91.5 L 197.6,92.2 L 199.2,93.0 L 200.8,93.9 L 202.4,94.9 L 204.0,95.9 L 205.6,97.0 L 207.2,98.1 L 208.8,99.3 L 210.4,100.6 L 212.0,102.0 L 213.6,103.4 L 215.2,104.9 L 216.8,106.5 L 218.4,108.2 L 220.0,109.9 L 221.6,111.7 L 223.2,113.5 L 224.8,115.4 L 226.4,117.4 L 228.0,119.5 L 229.6,121.6 L 231.2,123.8 L 232.8,126.1 L 234.4,128.5 L 236.0,130.9 L 237.6,133.4 L 239.2,135.9 L 240.8,138.5 L 242.4,141.2 L 244.0,144.0 L 245.6,146.8 L 247.2,149.7 L 248.8,152.7 L 250.4,155.8 L 252.0,158.9 L 253.6,162.1 L 255.2,165.3\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.4\"/>\n  <text x=\"240\" y=\"75\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"700\">y = -x² + 3</text>\n\n  <!-- Line y = 2x from (-3.2, -6.4) to (1.5, 3) -->\n  <line x1=\"77.6\" y1=\"220\" x2=\"228\" y2=\"88\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n  <text x=\"235\" y=\"92\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"700\">y = 2x</text>\n\n  <!-- Intersection points -->\n  <circle cx=\"84\" cy=\"214\" r=\"4\" fill=\"#f43f5e\"/>\n  <line x1=\"84\" y1=\"214\" x2=\"84\" y2=\"130\" stroke=\"rgba(255,255,255,0.3)\" stroke-dasharray=\"2,2\"/>\n  <text x=\"84\" y=\"125\" fill=\"#cbd5e1\" font-size=\"11\" text-anchor=\"middle\">-3</text>\n\n  <circle cx=\"212\" cy=\"102\" r=\"4\" fill=\"#f43f5e\"/>\n  <line x1=\"212\" y1=\"102\" x2=\"212\" y2=\"130\" stroke=\"rgba(255,255,255,0.3)\" stroke-dasharray=\"2,2\"/>\n  <text x=\"212\" y=\"145\" fill=\"#cbd5e1\" font-size=\"11\" text-anchor=\"middle\">1</text>\n</svg>"
    },
    {
      "type": "mcq",
      "q": "Tính diện tích hình phẳng giới hạn bởi đồ thị hàm số y = sin x, trục hoành Ox và hai đường thẳng x = 0, x = π.",
      "opts": [
        "2",
        "1",
        "π",
        "0"
      ],
      "ans": 0,
      "correctText": "Phương án A: 2",
      "exp": "• Trên [0; π], sin x ≥ 0.<br>• S = ∫₀^π sin x dx = [-cos x]₀^π = (-cos π) - (-cos 0) = -(-1) - (-1) = 1 + 1 = <b>2</b>."
    },
    {
      "type": "tf",
      "q": "Một hoa viên công cộng có bồn hoa hình elip với phương trình <span class=\"fraction\"><span class=\"numerator\">x²</span><span class=\"denominator\">16</span></span> + <span class=\"fraction\"><span class=\"numerator\">y²</span><span class=\"denominator\">9</span></span> = 1 (đơn vị: mét). Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Độ dài bán trục lớn của elip là a = 4 m và bán trục nhỏ là b = 3 m.",
        "Diện tích bồn hoa hình elip được tính theo công thức S = π · a · b.",
        "Diện tích của toàn bộ bồn hoa elip là S = 12π m² (xấp xỉ 37,7 m²).",
        "Nếu chi phí trồng hoa là 200.000 đ/m² thì tổng kinh phí trồng hoa toàn bộ bồn hoa vượt quá 10 triệu đồng."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Sai",
      "exp": "• <b>Ý a [Đúng]:</b> a² = 16 ⇒ a = 4 m, b² = 9 ⇒ b = 3 m.<br>• <b>Ý b [Đúng]:</b> S = 4 ∫₀⁴ <span class=\"fraction\"><span class=\"numerator\">3</span><span class=\"denominator\">4</span></span>√(16 - x²) dx = πab.<br>• <b>Ý c [Đúng]:</b> S = π(4)(3) = 12π ≈ 37,7 m².<br>• <b>Ý d [Sai]:</b> Tổng kinh phí = 37,7 × 200.000 đ = 7.540.000 đồng (khoảng 7,54 triệu đồng, nhỏ hơn 10 triệu đồng)."
    },
    {
      "type": "mcq",
      "q": "Một chiếc thùng gỗ sồi đựng rượu vang có dạng khối tròn xoay khi quay một cung parabol quanh trục đối xứng. Chiều cao thùng là h = 80 cm, bán kính hai đáy là r = 25 cm, bán kính tại bụng thùng phình to nhất là R = 30 cm. Bằng công thức gần đúng của Kepler (dựa trên tích phân Simpson): V ≈ <span class=\"fraction\"><span class=\"numerator\">πh</span><span class=\"denominator\">15</span></span> (2R² + Rr + <span class=\"fraction\"><span class=\"numerator\">3</span><span class=\"denominator\">4</span></span>r²), thể tích của thùng rượu xấp xỉ bằng bao nhiêu lít?",
      "opts": [
        "201 lít",
        "250 lít",
        "180 lít",
        "220 lít"
      ],
      "ans": 0,
      "correctText": "Phương án A: 201 lít",
      "exp": "• Thay số (đơn vị dm: h = 8 dm, r = 2,5 dm, R = 3 dm):<br>• V ≈ <span class=\"fraction\"><span class=\"numerator\">π · 8</span><span class=\"denominator\">15</span></span> · [2(3²) + 3·2,5 + 0,75·(2,5²)] = <span class=\"fraction\"><span class=\"numerator\">8π</span><span class=\"denominator\">15</span></span> · [18 + 7,5 + 4,6875] = <span class=\"fraction\"><span class=\"numerator\">8π</span><span class=\"denominator\">15</span></span> · 30,1875 ≈ <b>201,3 dm³ (lít)</b>."
    }
  ],
  "14": [
    {
      "type": "mcq",
      "q": "Trong không gian Oxyz, phương trình tổng quát của một mặt phẳng có dạng nào sau đây?",
      "opts": [
        "Ax + By + Cz + D = 0 (với A² + B² + C² > 0)",
        "Ax + By + C = 0",
        "<span class=\"fraction\"><span class=\"numerator\">x</span><span class=\"denominator\">a</span></span> + <span class=\"fraction\"><span class=\"numerator\">y</span><span class=\"denominator\">b</span></span> = 1",
        "Ax² + By² + Cz² + D = 0"
      ],
      "ans": 0,
      "correctText": "Phương án A: Ax + By + Cz + D = 0 (với A² + B² + C² > 0)",
      "exp": "• <b>Phương trình tổng quát của mặt phẳng (SGK Toán 12):</b> Mọi mặt phẳng trong không gian Oxyz đều có phương trình dạng Ax + By + Cz + D = 0, trong đó vectơ <span class=\"math-sym\">n</span> = (A; B; C) là vectơ pháp tuyến (A, B, C không đồng thời bằng 0)."
    },
    {
      "type": "mcq",
      "q": "Viết phương trình mặt phẳng đi qua điểm M(1; -2; 3) và nhận vectơ <span class=\"math-sym\">n</span> = (2; -1; 4) làm vectơ pháp tuyến.",
      "opts": [
        "2x - y + 4z - 16 = 0",
        "2x - y + 4z + 16 = 0",
        "x - 2y + 3z - 16 = 0",
        "2x + y + 4z - 12 = 0"
      ],
      "ans": 0,
      "correctText": "Phương án A: 2x - y + 4z - 16 = 0",
      "exp": "• Phương trình mặt phẳng qua M(x₀; y₀; z₀) có VTPT (A; B; C):<br>A(x - x₀) + B(y - y₀) + C(z - z₀) = 0.<br>• Thay số: 2(x - 1) - 1(y + 2) + 4(z - 3) = 0<br>⇔ 2x - 2 - y - 2 + 4z - 12 = 0 ⇔ <b>2x - y + 4z - 16 = 0</b>."
    },
    {
      "type": "mcq",
      "q": "Tính khoảng cách d từ điểm A(2; 1; -1) đến mặt phẳng (P): 2x - 2y + z + 5 = 0.",
      "opts": [
        "d = 2",
        "d = 6",
        "d = 3",
        "d = 1"
      ],
      "ans": 0,
      "correctText": "Phương án A: d = 2",
      "exp": "• Công thức khoảng cách: d(A, (P)) = <span class=\"fraction\"><span class=\"numerator\">|Ax₀ + By₀ + Cz₀ + D|</span><span class=\"denominator\">√(A² + B² + C²)</span></span>.<br>• Thay số: d = <span class=\"fraction\"><span class=\"numerator\">|2(2) - 2(1) + 1(-1) + 5|</span><span class=\"denominator\">√(2² + (-2)² + 1²)</span></span> = <span class=\"fraction\"><span class=\"numerator\">|4 - 2 - 1 + 5|</span><span class=\"denominator\">√(4 + 4 + 1)</span></span> = <span class=\"fraction\"><span class=\"numerator\">6</span><span class=\"denominator\">3</span></span> = <b>2</b>."
    },
    {
      "type": "tf",
      "q": "Trong không gian Oxyz, cho ba điểm A(2; 0; 0), B(0; -3; 0), C(0; 0; 4). Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Phương trình theo đoạn chắn của mặt phẳng (ABC) là <span class=\"fraction\"><span class=\"numerator\">x</span><span class=\"denominator\">2</span></span> + <span class=\"fraction\"><span class=\"numerator\">y</span><span class=\"denominator\">-3</span></span> + <span class=\"fraction\"><span class=\"numerator\">z</span><span class=\"denominator\">4</span></span> = 1.",
        "Phương trình tổng quát của mặt phẳng (ABC) là 6x - 4y + 3z - 12 = 0.",
        "Vectơ <span class=\"math-sym\">n</span> = (6; -4; 3) là một vectơ pháp tuyến của mặt phẳng (ABC).",
        "Khoảng cách từ gốc toạ độ O đến mặt phẳng (ABC) bằng <span class=\"fraction\"><span class=\"numerator\">12</span><span class=\"denominator\">√61</span></span>."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Ba điểm trên 3 trục: x/a + y/b + z/c = 1 ⇔ x/2 + y/(-3) + z/4 = 1.<br>• <b>Ý b [Đúng]:</b> Quy đồng mẫu số chung là 12: 6x - 4y + 3z = 12 ⇔ 6x - 4y + 3z - 12 = 0.<br>• <b>Ý c [Đúng]:</b> Hệ số trước x, y, z cho VTPT <span class=\"math-sym\">n</span> = (6; -4; 3).<br>• <b>Ý d [Đúng]:</b> d(O, (ABC)) = |-12| / √(6² + (-4)² + 3²) = 12 / √(36 + 16 + 9) = 12 / √61."
    },
    {
      "type": "match",
      "q": "Ghép các bề mặt kiến trúc/công trình xây dựng (Cột A) với phương trình mặt phẳng toạ độ tương ứng (Cột B):",
      "colA": [
        "Mặt sàn tầng trệt nằm ngang trên mặt đất",
        "Bức tường thẳng đứng ngăn phòng song song với trục cao độ Oz",
        "Mái ngói nghiêng dốc thoát nước",
        "Tấm pin năng lượng mặt trời phẳng"
      ],
      "colB": [
        "Mặt phẳng toạ độ (Oxy) có phương trình z = 0",
        "Mặt phẳng có phương trình dạng Ax + By + D = 0 (khuyết z)",
        "Mặt phẳng nghiêng có phương trình Ax + By + Cz + D = 0 (A, B, C đều khác 0)",
        "Mặt phẳng xác định bởi 3 điểm đỡ khung pin trên mái"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "1-A • 2-B • 3-C • 4-D",
      "exp": "• Mặt sàn ngang: z = 0.<br>• Bức tường đứng song song Oz: không chứa z.<br>• Mặt nghiêng dốc: có cả 3 thành phần toạ độ."
    },
    {
      "type": "drag",
      "q": "Chọn từ ngữ thích hợp điền vào chỗ trống để hoàn thiện vị trí tương đối giữa hai mặt phẳng (P) và (Q):",
      "text": "Cho hai mặt phẳng (P) và (Q) có VTPT lần lượt là <span class=\"math-sym\">n</span>₁ và <span class=\"math-sym\">n</span>₂. Hai mặt phẳng vuông góc với nhau khi và chỉ khi [blank]. Hai mặt phẳng song song hoặc trùng nhau khi và chỉ khi hai vectơ pháp tuyến [blank].",
      "words": [
        "<span class=\"math-sym\">n</span>₁ · <span class=\"math-sym\">n</span>₂ = 0",
        "cùng phương",
        "<span class=\"math-sym\">n</span>₁ = <span class=\"math-sym\">n</span>₂",
        "cắt nhau"
      ],
      "ans": [
        0,
        1
      ],
      "correctText": "(1) <span class=\"math-sym\">n</span>₁ · <span class=\"math-sym\">n</span>₂ = 0 • (2) cùng phương",
      "exp": "• (P) ⊥ (Q) ⇔ <span class=\"math-sym\">n</span>₁ ⊥ <span class=\"math-sym\">n</span>₂ ⇔ <span class=\"math-sym\">n</span>₁ · <span class=\"math-sym\">n</span>₂ = 0.<br>• (P) // (Q) hoặc (P) ≡ (Q) ⇔ <span class=\"math-sym\">n</span>₁ và <span class=\"math-sym\">n</span>₂ cùng phương."
    },
    {
      "type": "mcq",
      "q": "Trong không gian Oxyz, tìm toạ độ hình chiếu vuông góc H của điểm A(1; 2; 3) lên mặt phẳng (P): x + y + z - 3 = 0 như hình vẽ bên.",
      "opts": [
        "H(0; 1; 2)",
        "H(1; 1; 1)",
        "H(2; 1; 0)",
        "H(0; 0; 3)"
      ],
      "ans": 0,
      "correctText": "Phương án A: H(0; 1; 2)",
      "exp": "• Đường thẳng d qua A vuông góc (P) có VTCP <span class=\"math-sym\">u</span> = <span class=\"math-sym\">n</span><sub style=\"font-size:0.8em\">P</sub> = (1; 1; 1):<br>x = 1 + t, y = 2 + t, z = 3 + t.<br>• Thay vào phương trình (P): (1 + t) + (2 + t) + (3 + t) - 3 = 0 ⇔ 3t + 3 = 0 ⇔ t = -1.<br>• Với t = -1 ⇒ x = 0, y = 1, z = 2. Vậy toạ độ hình chiếu là <b>H(0; 1; 2)</b>.",
      "svgGraph": "<svg viewBox=\"0 0 380 200\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"8\" y=\"8\" width=\"364\" height=\"184\" rx=\"10\" fill=\"rgba(15,23,42,0.95)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/>\n  <!-- Plane (P) -->\n  <polygon points=\"50,145 230,145 320,95 140,95\" fill=\"rgba(56,189,248,0.18)\" stroke=\"#38bdf8\" stroke-width=\"1.6\"/>\n  <text x=\"90\" y=\"132\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"800\">(P)</text>\n  <!-- Point A -->\n  <circle cx=\"185\" cy=\"40\" r=\"5\" fill=\"#f43f5e\"/>\n  <text x=\"195\" y=\"42\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"800\">A(1; 2; 3)</text>\n  <!-- Perpendicular line AH -->\n  <line x1=\"185\" y1=\"40\" x2=\"185\" y2=\"120\" stroke=\"#fbbf24\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n  <circle cx=\"185\" cy=\"120\" r=\"4.5\" fill=\"#34d399\"/>\n  <text x=\"196\" y=\"125\" fill=\"#34d399\" font-size=\"14\" font-weight=\"900\">H</text>\n  <!-- Right angle square at H -->\n  <polyline points=\"185,110 175,110 175,120\" fill=\"none\" stroke=\"#34d399\" stroke-width=\"1.4\"/>\n</svg>"
    },
    {
      "type": "mcq",
      "q": "Viết phương trình mặt phẳng (Q) song song với mặt phẳng (P): x - 2y + 2z + 1 = 0 và cách gốc toạ độ O một khoảng bằng 3.",
      "opts": [
        "x - 2y + 2z - 9 = 0 hoặc x - 2y + 2z + 9 = 0",
        "x - 2y + 2z - 3 = 0",
        "x - 2y + 2z - 1 = 0",
        "x - 2y + 2z + 6 = 0"
      ],
      "ans": 0,
      "correctText": "Phương án A: x - 2y + 2z - 9 = 0 hoặc x - 2y + 2z + 9 = 0",
      "exp": "• (Q) // (P) nên phương trình (Q) có dạng: x - 2y + 2z + D = 0 (D ≠ 1).<br>• d(O, (Q)) = <span class=\"fraction\"><span class=\"numerator\">|D|</span><span class=\"denominator\">√(1² + (-2)² + 2²)</span></span> = <span class=\"fraction\"><span class=\"numerator\">|D|</span><span class=\"denominator\">3</span></span> = 3 ⇔ |D| = 9 ⇔ <b>D = 9 hoặc D = -9</b>.<br>• Cả hai giá trị đều thỏa mãn D ≠ 1."
    },
    {
      "type": "tf",
      "q": "Trong một triển lãm nghệ thuật, một tấm kính cường lực lớn hình phẳng được dựng nghiêng đi qua 3 điểm gắn tường A(4; 0; 2), B(0; 6; 1), C(2; 3; 3) (đơn vị đo: mét). Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Hai vectơ chỉ phương trên mặt kính là <span class=\"math-sym\">AB</span> = (-4; 6; -1) và <span class=\"math-sym\">AC</span> = (-2; 3; 1).",
        "Tích có hướng của hai vectơ là [<span class=\"math-sym\">AB</span>, <span class=\"math-sym\">AC</span>] = (9; 6; 0).",
        "Phương trình mặt phẳng chứa tấm kính là 3x + 2y - 12 = 0.",
        "Mặt kính này vuông góc với mặt sàn nhà (Oxy)."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> <span class=\"math-sym\">AB</span> = (-4; 6; -1), <span class=\"math-sym\">AC</span> = (-2; 3; 1).<br>• <b>Ý b [Đúng]:</b> [<span class=\"math-sym\">AB</span>, <span class=\"math-sym\">AC</span>] = (6·1 - (-1)·3; (-1)(-2) - (-4)·1; (-4)·3 - 6(-2)) = (9; 6; 0).<br>• <b>Ý c [Đúng]:</b> VTPT chọn <span class=\"math-sym\">n</span> = (3; 2; 0). Qua A(4; 0; 2): 3(x - 4) + 2(y - 0) + 0(z - 2) = 0 ⇔ 3x + 2y - 12 = 0.<br>• <b>Ý d [Đúng]:</b> VTPT <span class=\"math-sym\">n</span> = (3; 2; 0) vuông góc với vectơ <span class=\"math-sym\">k</span> = (0; 0; 1) của trục Oz ⇒ Mặt kính vuông góc mặt sàn."
    },
    {
      "type": "mcq",
      "q": "Một sân bay quân sự thiết lập mặt phẳng tiếp cận hạ cánh an toàn có phương trình 2x + y + 2z - 10 = 0 (đơn vị: km). Một chiếc máy bay vận tải đang ở toạ độ M(4; 8; 5). Khoảng cách ngắn nhất từ máy bay đến mặt phẳng hạ cánh an toàn là bao nhiêu km?",
      "opts": [
        "5,33 km (16/3 km)",
        "6 km",
        "4,5 km",
        "3,2 km"
      ],
      "ans": 0,
      "correctText": "Phương án A: 5,33 km (16/3 km)",
      "exp": "• Khoảng cách ngắn nhất chính là khoảng cách từ điểm M đến mặt phẳng:<br>d = <span class=\"fraction\"><span class=\"numerator\">|2(4) + 1(8) + 2(5) - 10|</span><span class=\"denominator\">√(2² + 1² + 2²)</span></span> = <span class=\"fraction\"><span class=\"numerator\">|8 + 8 + 10 - 10|</span><span class=\"denominator\">√9</span></span> = <span class=\"fraction\"><span class=\"numerator\">16</span><span class=\"denominator\">3</span></span> ≈ <b>5,33 km</b>."
    }
  ],
  "15": [
    {
      "type": "mcq",
      "q": "Đường thẳng d đi qua điểm M₀(x₀; y₀; z₀) và có vectơ chỉ phương <span class=\"math-sym\">u</span> = (a; b; c) (với a, b, c đều khác 0) có phương trình chính tắc là:",
      "opts": [
        "<span class=\"fraction\"><span class=\"numerator\">x - x₀</span><span class=\"denominator\">a</span></span> = <span class=\"fraction\"><span class=\"numerator\">y - y₀</span><span class=\"denominator\">b</span></span> = <span class=\"fraction\"><span class=\"numerator\">z - z₀</span><span class=\"denominator\">c</span></span>",
        "<span class=\"fraction\"><span class=\"numerator\">x - a</span><span class=\"denominator\">x₀</span></span> = <span class=\"fraction\"><span class=\"numerator\">y - b</span><span class=\"denominator\">y₀</span></span> = <span class=\"fraction\"><span class=\"numerator\">z - c</span><span class=\"denominator\">z₀</span></span>",
        "a(x - x₀) + b(y - y₀) + c(z - z₀) = 0",
        "<span class=\"fraction\"><span class=\"numerator\">x + x₀</span><span class=\"denominator\">a</span></span> = <span class=\"fraction\"><span class=\"numerator\">y + y₀</span><span class=\"denominator\">b</span></span> = <span class=\"fraction\"><span class=\"numerator\">z + z₀</span><span class=\"denominator\">c</span></span>"
      ],
      "ans": 0,
      "correctText": "Phương án A: <span class=\"fraction\"><span class=\"numerator\">x - x₀</span><span class=\"denominator\">a</span></span> = <span class=\"fraction\"><span class=\"numerator\">y - y₀</span><span class=\"denominator\">b</span></span> = <span class=\"fraction\"><span class=\"numerator\">z - z₀</span><span class=\"denominator\">c</span></span>",
      "exp": "• <b>Phương trình chính tắc đường thẳng (SGK Toán 12):</b> Khi các thành phần toạ độ a, b, c của VTCP đều khác 0, ta có phương trình chính tắc:<br>(x - x₀)/a = (y - y₀)/b = (z - z₀)/c."
    },
    {
      "type": "mcq",
      "q": "Viết phương trình tham số của đường thẳng d đi qua điểm A(1; 2; -3) và có vectơ chỉ phương <span class=\"math-sym\">u</span> = (2; -1; 5).",
      "opts": [
        "x = 1 + 2t, y = 2 - t, z = -3 + 5t (t ∈ ℝ)",
        "x = 2 + t, y = -1 + 2t, z = 5 - 3t (t ∈ ℝ)",
        "x = 1 - 2t, y = 2 - t, z = -3 - 5t (t ∈ ℝ)",
        "x = 1 + t, y = 2 + 2t, z = -3 + 3t (t ∈ ℝ)"
      ],
      "ans": 0,
      "correctText": "Phương án A: x = 1 + 2t, y = 2 - t, z = -3 + 5t (t ∈ ℝ)",
      "exp": "• Phương trình tham số: x = x₀ + at, y = y₀ + bt, z = z₀ + ct.<br>• Thay số: <b>x = 1 + 2t; y = 2 - t; z = -3 + 5t (t ∈ ℝ)</b>."
    },
    {
      "type": "mcq",
      "q": "Tìm toạ độ giao điểm M của đường thẳng d: <span class=\"fraction\"><span class=\"numerator\">x - 1</span><span class=\"denominator\">2</span></span> = <span class=\"fraction\"><span class=\"numerator\">y + 2</span><span class=\"denominator\">-1</span></span> = <span class=\"fraction\"><span class=\"numerator\">z</span><span class=\"denominator\">1</span></span> với mặt phẳng (P): x + 2y - z + 4 = 0.",
      "opts": [
        "M(3; -3; 1)",
        "M(1; -2; 0)",
        "M(-1; -1; -1)",
        "M(5; -4; 2)"
      ],
      "ans": 0,
      "correctText": "Phương án A: M(3; -3; 1)",
      "exp": "• Chuyển d về dạng tham số: x = 1 + 2t, y = -2 - t, z = t.<br>• Thay vào (P): (1 + 2t) + 2(-2 - t) - t + 4 = 0 ⇔ 1 + 2t - 4 - 2t - t + 4 = 0 ⇔ -t + 1 = 0 ⇔ t = 1.<br>• Với t = 1 ⇒ x = 3, y = -3, z = 1 ⇒ <b>M(3; -3; 1)</b>."
    },
    {
      "type": "tf",
      "q": "Trong không gian Oxyz, cho hai điểm A(1; -1; 2) và B(3; 1; 4). Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Vectơ chỉ phương của đường thẳng AB có thể chọn là <span class=\"math-sym\">u</span> = (1; 1; 1).",
        "Phương trình chính tắc của đường thẳng AB là <span class=\"fraction\"><span class=\"numerator\">x - 1</span><span class=\"denominator\">1</span></span> = <span class=\"fraction\"><span class=\"numerator\">y + 1</span><span class=\"denominator\">1</span></span> = <span class=\"fraction\"><span class=\"numerator\">z - 2</span><span class=\"denominator\">1</span></span>.",
        "Điểm M(5; 3; 6) thuộc đường thẳng AB.",
        "Đường thẳng AB vuông góc với mặt phẳng (α): x + y + z + 10 = 0."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> <span class=\"math-sym\">AB</span> = (2; 2; 2) = 2(1; 1; 1) ⇒ chọn <span class=\"math-sym\">u</span> = (1; 1; 1).<br>• <b>Ý b [Đúng]:</b> Qua A(1; -1; 2) với VTCP (1; 1; 1): (x - 1)/1 = (y + 1)/1 = (z - 2)/1.<br>• <b>Ý c [Đúng]:</b> Thay M(5; 3; 6): (5-1)/1 = (3+1)/1 = (6-2)/1 = 4 (thỏa mãn).<br>• <b>Ý d [Đúng]:</b> VTPT của (α) là <span class=\"math-sym\">n</span> = (1; 1; 1) cùng phương với VTCP của đường thẳng ⇒ AB ⊥ (α)."
    },
    {
      "type": "match",
      "q": "Ghép các chuyển động thẳng thực tế (Cột A) với phương trình đường thẳng tương ứng trong hệ toạ độ không gian (Cột B):",
      "colA": [
        "Khinh khí cầu bay thẳng đứng lên cao từ bãi phóng (0; 0; 0)",
        "Tia laser định vị chiếu từ đỉnh tháp (0; 0; 100) theo hướng <span class=\"math-sym\">u</span> = (3; 4; -1)",
        "Đường hầm tàu điện ngầm khoan thẳng qua lòng núi",
        "Tuyến cáp treo trượt thẳng từ chân đồi lên đỉnh núi"
      ],
      "colB": [
        "Trục thẳng đứng Oz: x = 0, y = 0, z = t (t ≥ 0)",
        "Phương trình: x = 3t, y = 4t, z = 100 - t",
        "Đoạn thẳng nối điểm cửa hầm vào và cửa hầm ra",
        "Đường thẳng nối trạm ga chân núi và trạm ga đỉnh núi"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "1-A • 2-B • 3-C • 4-D",
      "exp": "• Các quỹ đạo chuyển động thẳng trong kĩ thuật đều được mô hình hoá bằng phương trình đường thẳng hoặc đoạn thẳng trong không gian 3 chiều."
    },
    {
      "type": "drag",
      "q": "Chọn từ ngữ thích hợp điền vào chỗ trống để hoàn thiện vị trí tương đối giữa hai đường thẳng d₁ và d₂ trong không gian:",
      "text": "Nếu hai vectơ chỉ phương <span class=\"math-sym\">u</span>₁ và <span class=\"math-sym\">u</span>₂ cùng phương thì d₁ và d₂ [blank] hoặc [blank]. Nếu <span class=\"math-sym\">u</span>₁ và <span class=\"math-sym\">u</span>₂ không cùng phương và hệ phương trình toạ độ vô nghiệm thì d₁ và d₂ [blank].",
      "words": [
        "song song",
        "trùng nhau",
        "chéo nhau",
        "cắt nhau",
        "vuông góc"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "(1) song song • (2) trùng nhau • (3) chéo nhau",
      "exp": "• Cùng phương: song song hoặc trùng.<br>• Không cùng phương và không có điểm chung: <b>chéo nhau</b>."
    },
    {
      "type": "mcq",
      "q": "Cho hai đường thẳng d₁: <span class=\"fraction\"><span class=\"numerator\">x</span><span class=\"denominator\">1</span></span> = <span class=\"fraction\"><span class=\"numerator\">y</span><span class=\"denominator\">1</span></span> = <span class=\"fraction\"><span class=\"numerator\">z</span><span class=\"denominator\">1</span></span> và d₂: <span class=\"fraction\"><span class=\"numerator\">x - 1</span><span class=\"denominator\">1</span></span> = <span class=\"fraction\"><span class=\"numerator\">y</span><span class=\"denominator\">2</span></span> = <span class=\"fraction\"><span class=\"numerator\">z</span><span class=\"denominator\">3</span></span>. Vị trí tương đối của d₁ và d₂ là:",
      "opts": [
        "Chéo nhau",
        "Cắt nhau",
        "Song song",
        "Trùng nhau"
      ],
      "ans": 0,
      "correctText": "Phương án A: Chéo nhau",
      "exp": "• VTCP: <span class=\"math-sym\">u</span>₁ = (1; 1; 1) và <span class=\"math-sym\">u</span>₂ = (1; 2; 3) không cùng phương (1/1 ≠ 1/2).<br>• Xét hệ giao điểm: t = 1 + s; t = 2s; t = 3s.<br>Từ 2s = 3s ⇒ s = 0 ⇒ t = 0. Thay vào pt 1: 0 = 1 + 0 (vô lý).<br>• Hệ vô nghiệm và 2 VTCP không cùng phương ⇒ Hai đường thẳng <b>chéo nhau</b>.",
      "svgGraph": "<svg viewBox=\"0 0 360 200\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"340\" height=\"180\" rx=\"8\" fill=\"rgba(15,23,42,0.9)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/><polygon points=\"40,140 220,140 310,90 130,90\" fill=\"rgba(56,189,248,0.12)\" stroke=\"#38bdf8\" stroke-width=\"1.4\"/><line x1=\"60\" y1=\"120\" x2=\"280\" y2=\"105\" stroke=\"#34d399\" stroke-width=\"2\"/><text x=\"285\" y=\"105\" fill=\"#34d399\" font-size=\"12\" font-weight=\"700\">d₁</text><line x1=\"160\" y1=\"30\" x2=\"200\" y2=\"170\" stroke=\"#f43f5e\" stroke-width=\"2\"/><text x=\"205\" y=\"175\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"700\">d₂</text><text x=\"180\" y=\"25\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"800\" text-anchor=\"middle\">Hai đường thẳng chéo nhau</text></svg>"
    },
    {
      "type": "mcq",
      "q": "Khoảng cách từ điểm M(1; 2; -1) đến đường thẳng Δ: x = 1 + t, y = 2, z = -1 (trục song song Ox) bằng bao nhiêu?",
      "opts": [
        "0 (M thuộc đường thẳng Δ)",
        "1",
        "2",
        "√5"
      ],
      "ans": 0,
      "correctText": "Phương án A: 0 (M thuộc đường thẳng Δ)",
      "exp": "• Với t = 0 ta có x = 1, y = 2, z = -1 trùng với toạ độ điểm M.<br>• Vì điểm M thuộc đường thẳng Δ nên khoảng cách từ M đến Δ bằng <b>0</b>."
    },
    {
      "type": "tf",
      "q": "Một máy bay không người lái (Drone) cứu hộ bay theo đường thẳng từ trạm A(100; 200; 50) đến vị trí người gặp nạn B(700; 1000; 250) (đơn vị: mét). Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Vectơ chỉ phương của đường bay có thể chọn là <span class=\"math-sym\">u</span> = (3; 4; 1).",
        "Đoạn đường bay từ A đến B có chiều dài bằng √(600² + 800² + 200²) ≈ 1019,8 mét.",
        "Điểm tiếp sóng cứu hộ tại toạ độ S(400; 600; 150) chính là trung điểm trên đường bay của Drone.",
        "Góc nghiêng bay nâng cao của Drone so với mặt đất nằm ngang lớn hơn 30°."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Sai",
      "exp": "• <b>Ý a [Đúng]:</b> <span class=\"math-sym\">AB</span> = (600; 800; 200) = 200(3; 4; 1) ⇒ chọn <span class=\"math-sym\">u</span> = (3; 4; 1).<br>• <b>Ý b [Đúng]:</b> AB = √(600² + 800² + 200²) = √(360000 + 640000 + 40000) = √1040000 ≈ 1019,8 m.<br>• <b>Ý c [Đúng]:</b> Trung điểm M = ((100+700)/2; (200+1000)/2; (50+250)/2) = (400; 600; 150).<br>• <b>Ý d [Sai]:</b> Độ cao tăng Δz = 200 m trên quãng đường ngang √(600²+800²) = 1000 m. tan α = 200/1000 = 0,2 ⇒ α ≈ 11,3° (< 30°)."
    },
    {
      "type": "mcq",
      "q": "Hai máy bay thương mại bay theo hai đường thẳng chéo nhau trong không lưu. Khoảng cách vuông góc ngắn nhất giữa hai đường bay được tính toán là 5,2 km. Tiêu chuẩn an toàn hàng không quy định khoảng cách giãn cách tối thiểu giữa hai đường bay chéo nhau là 3,5 km. Đường bay của hai máy bay có bảo đảm an toàn hay không?",
      "opts": [
        "Hoàn toàn an toàn (vì 5,2 km > 3,5 km)",
        "Không an toàn (tiềm ẩn nguy cơ va chạm)",
        "Chỉ an toàn vào ban ngày",
        "Cần đổi hướng gấp"
      ],
      "ans": 0,
      "correctText": "Phương án A: Hoàn toàn an toàn (vì 5,2 km > 3,5 km)",
      "exp": "• Khoảng cách tối thiểu giữa hai máy bay là khoảng cách giữa hai đường thẳng chéo nhau: d = 5,2 km.<br>• Vì d = 5,2 km > 3,5 km (ngưỡng an toàn) nên hai chuyến bay <b>hoàn toàn bảo đảm khoảng cách giãn cách an toàn</b>."
    }
  ],
  "16": [
    {
      "type": "mcq",
      "q": "Cho hai đường thẳng d₁ và d₂ có vectơ chỉ phương lần lượt là <span class=\"math-sym\">u</span>₁ và <span class=\"math-sym\">u</span>₂. Góc φ giữa hai đường thẳng d₁ và d₂ được tính bởi công thức nào?",
      "opts": [
        "cos φ = <span class=\"fraction\"><span class=\"numerator\">|<span class=\"math-sym\">u</span>₁ · <span class=\"math-sym\">u</span>₂|</span><span class=\"denominator\">|<span class=\"math-sym\">u</span>₁| · |<span class=\"math-sym\">u</span>₂|</span></span> (với 0° ≤ φ ≤ 90°)",
        "cos φ = <span class=\"fraction\"><span class=\"numerator\"><span class=\"math-sym\">u</span>₁ · <span class=\"math-sym\">u</span>₂</span><span class=\"denominator\">|<span class=\"math-sym\">u</span>₁| · |<span class=\"math-sym\">u</span>₂|</span></span>",
        "sin φ = <span class=\"fraction\"><span class=\"numerator\">|<span class=\"math-sym\">u</span>₁ · <span class=\"math-sym\">u</span>₂|</span><span class=\"denominator\">|<span class=\"math-sym\">u</span>₁| · |<span class=\"math-sym\">u</span>₂|</span></span>",
        "tan φ = <span class=\"fraction\"><span class=\"numerator\">|<span class=\"math-sym\">u</span>₁ · <span class=\"math-sym\">u</span>₂|</span><span class=\"denominator\">|<span class=\"math-sym\">u</span>₁| · |<span class=\"math-sym\">u</span>₂|</span></span>"
      ],
      "ans": 0,
      "correctText": "Phương án A: cos φ = <span class=\"fraction\"><span class=\"numerator\">|<span class=\"math-sym\">u</span>₁ · <span class=\"math-sym\">u</span>₂|</span><span class=\"denominator\">|<span class=\"math-sym\">u</span>₁| · |<span class=\"math-sym\">u</span>₂|</span></span> (với 0° ≤ φ ≤ 90°)",
      "exp": "• <b>Công thức góc giữa 2 đường thẳng (SGK Toán 12):</b> Góc giữa hai đường thẳng là góc không tù (0° ≤ φ ≤ 90°), do đó tử số phải có dấu giá trị tuyệt đối: cos φ = |<span class=\"math-sym\">u</span>₁ · <span class=\"math-sym\">u</span>₂| / (|<span class=\"math-sym\">u</span>₁| |<span class=\"math-sym\">u</span>₂|)."
    },
    {
      "type": "mcq",
      "q": "Tính góc φ giữa hai mặt phẳng (P): x + y - 4 = 0 và (Q): y - z + 2 = 0.",
      "opts": [
        "φ = 60°",
        "φ = 30°",
        "φ = 45°",
        "φ = 90°"
      ],
      "ans": 0,
      "correctText": "Phương án A: φ = 60°",
      "exp": "• VTPT: <span class=\"math-sym\">n</span>₁ = (1; 1; 0) và <span class=\"math-sym\">n</span>₂ = (0; 1; -1).<br>• cos φ = <span class=\"fraction\"><span class=\"numerator\">|1·0 + 1·1 + 0·(-1)|</span><span class=\"denominator\">√(1² + 1² + 0²) · √(0² + 1² + (-1)²)</span></span> = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">√2 · √2</span></span> = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span>.<br>• Do 0° ≤ φ ≤ 90° và cos φ = 1/2 nên <b>φ = 60°</b>."
    },
    {
      "type": "mcq",
      "q": "Tính sin của góc giữa đường thẳng d: <span class=\"fraction\"><span class=\"numerator\">x</span><span class=\"denominator\">1</span></span> = <span class=\"fraction\"><span class=\"numerator\">y</span><span class=\"denominator\">-1</span></span> = <span class=\"fraction\"><span class=\"numerator\">z</span><span class=\"denominator\">2</span></span> và mặt phẳng (P): 2x - y + z + 1 = 0.",
      "opts": [
        "5/6",
        "1/6",
        "√5/6",
        "1/2"
      ],
      "ans": 0,
      "correctText": "Phương án A: 5/6",
      "exp": "• VTCP của d: <span class=\"math-sym\">u</span> = (1; -1; 2); VTPT của (P): <span class=\"math-sym\">n</span> = (2; -1; 1).<br>• sin(d, (P)) = <span class=\"fraction\"><span class=\"numerator\">|<span class=\"math-sym\">u</span> · <span class=\"math-sym\">n</span>|</span><span class=\"denominator\">|<span class=\"math-sym\">u</span>| · |<span class=\"math-sym\">n</span>|</span></span> = <span class=\"fraction\"><span class=\"numerator\">|1·2 + (-1)(-1) + 2·1|</span><span class=\"denominator\">√(1² + 1² + 2²) · √(2² + 1² + 1²)</span></span> = <span class=\"fraction\"><span class=\"numerator\">|2 + 1 + 2|</span><span class=\"denominator\">√6 · √6</span></span> = <b><span class=\"fraction\"><span class=\"numerator\">5</span><span class=\"denominator\">6</span></span></b>."
    },
    {
      "type": "tf",
      "q": "Cho hình lập phương ABCD.A'B'C'D' cạnh a. Gắn hệ toạ độ Oxyz với gốc tại A(0; 0; 0), B(a; 0; 0), D(0; a; 0), A'(0; 0; a). Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Vectơ chỉ phương của đường chéo A'C là <span class=\"math-sym\">u</span> = (a; a; -a).",
        "Vectơ chỉ phương của đường thẳng BD là <span class=\"math-sym\">v</span> = (-a; a; 0).",
        "Tích vô hướng <span class=\"math-sym\">u</span> · <span class=\"math-sym\">v</span> = a(-a) + a·a + (-a)·0 = 0.",
        "Góc giữa đường chéo A'C và đường chéo đáy BD bằng 90°."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> A'(0; 0; a), C(a; a; 0) ⇒ <span class=\"math-sym\">A'C</span> = (a; a; -a).<br>• <b>Ý b [Đúng]:</b> B(a; 0; 0), D(0; a; 0) ⇒ <span class=\"math-sym\">BD</span> = (-a; a; 0).<br>• <b>Ý c [Đúng]:</b> <span class=\"math-sym\">u</span> · <span class=\"math-sym\">v</span> = -a² + a² + 0 = 0.<br>• <b>Ý d [Đúng]:</b> Tích vô hướng bằng 0 nên hai đường thẳng vuông góc nhau (góc 90°)."
    },
    {
      "type": "match",
      "q": "Ghép các góc thực tế trong kiến trúc - xây dựng (Cột A) với công thức tính toán tương ứng (Cột B):",
      "colA": [
        "Góc nghiêng của mái nhà dốc so với mặt sàn ngang",
        "Góc dốc tiếp cận của đường hầm so với mặt phẳng nằm ngang",
        "Góc giữa hai bức tường phòng giao nhau",
        "Góc chiếu của tia nắng mặt trời lên mặt tấm pin năng lượng"
      ],
      "colB": [
        "Góc giữa mặt phẳng mái nhà và mặt phẳng (Oxy)",
        "Góc giữa đường thẳng trục hầm và mặt phẳng ngang",
        "Góc giữa hai mặt phẳng tường đứng",
        "Góc giữa đường thẳng tia sáng và mặt phẳng tấm pin"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "1-A • 2-B • 3-C • 4-D",
      "exp": "• Mọi góc trong thiết kế công trình đều quy về: Góc giữa 2 mặt phẳng, góc giữa đường thẳng và mặt phẳng, hoặc góc giữa 2 đường thẳng."
    },
    {
      "type": "drag",
      "q": "Chọn hàm lượng giác thích hợp điền vào chỗ trống để hoàn thiện công thức tính góc trong không gian:",
      "text": "Góc giữa hai đường thẳng d₁ và d₂ được xác định qua [blank] φ = <span class=\"fraction\"><span class=\"numerator\">|<span class=\"math-sym\">u</span>₁ · <span class=\"math-sym\">u</span>₂|</span><span class=\"denominator\">|<span class=\"math-sym\">u</span>₁||<span class=\"math-sym\">u</span>₂|</span></span>. Góc giữa hai mặt phẳng (P) và (Q) được xác định qua [blank] θ = <span class=\"fraction\"><span class=\"numerator\">|<span class=\"math-sym\">n</span>₁ · <span class=\"math-sym\">n</span>₂|</span><span class=\"denominator\">|<span class=\"math-sym\">n</span>₁||<span class=\"math-sym\">n</span>₂|</span></span>. Góc giữa đường thẳng d và mặt phẳng (P) được xác định qua [blank] α = <span class=\"fraction\"><span class=\"numerator\">|<span class=\"math-sym\">u</span> · <span class=\"math-sym\">n</span>|</span><span class=\"denominator\">|<span class=\"math-sym\">u</span>||<span class=\"math-sym\">n</span>|</span></span>.",
      "words": [
        "cos",
        "sin",
        "tan",
        "cot"
      ],
      "ans": [
        0,
        0,
        1
      ],
      "correctText": "(1) cos • (2) cos • (3) sin",
      "exp": "• <b>Lưu ý quan trọng:</b> Góc giữa 2 đường thẳng và giữa 2 mặt phẳng dùng hàm <b>cos</b>. Riêng góc giữa đường thẳng và mặt phẳng (hai đối tượng chéo loại VTCP và VTPT) dùng hàm <b>sin</b>."
    },
    {
      "type": "mcq",
      "q": "Cho đường thẳng d vuông góc với mặt phẳng (P) như hình vẽ bên. Góc giữa đường thẳng d và mặt phẳng (P) bằng bao nhiêu độ?",
      "opts": [
        "90°",
        "0°",
        "45°",
        "180°"
      ],
      "ans": 0,
      "correctText": "Phương án A: 90°",
      "exp": "• Khi đường thẳng d vuông góc với mặt phẳng (P), VTCP của d cùng phương với VTPT của (P).<br>• Khi đó sin α = 1 ⇒ <b>α = 90°</b>.",
      "svgGraph": "<svg viewBox=\"0 0 380 200\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"8\" y=\"8\" width=\"364\" height=\"184\" rx=\"10\" fill=\"rgba(15,23,42,0.95)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/>\n  <!-- Plane (P) -->\n  <polygon points=\"50,145 230,145 320,95 140,95\" fill=\"rgba(56,189,248,0.18)\" stroke=\"#38bdf8\" stroke-width=\"1.6\"/>\n  <text x=\"90\" y=\"130\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"800\">(P)</text>\n  <!-- Line d perpendicular to (P) -->\n  <line x1=\"185\" y1=\"20\" x2=\"185\" y2=\"170\" stroke=\"#f43f5e\" stroke-width=\"2.4\"/>\n  <text x=\"195\" y=\"30\" fill=\"#f43f5e\" font-size=\"14\" font-weight=\"800\">d ⊥ (P)</text>\n  <!-- Right angle mark -->\n  <polyline points=\"185,110 175,110 175,120\" fill=\"none\" stroke=\"#34d399\" stroke-width=\"1.6\"/>\n</svg>"
    },
    {
      "type": "mcq",
      "q": "Góc giữa hai mặt phẳng (P): x + y - 1 = 0 và (Q): y + z + 2 = 0 bằng bao nhiêu độ?",
      "opts": [
        "60°",
        "45°",
        "30°",
        "90°"
      ],
      "ans": 0,
      "correctText": "Phương án A: 60°",
      "exp": "• <span class=\"math-sym\">n</span>₁ = (1; 1; 0), <span class=\"math-sym\">n</span>₂ = (0; 1; 1).<br>• cos φ = |1·0 + 1·1 + 0·1| / (√2 · √2) = 1/2 ⇒ <b>φ = 60°</b>."
    },
    {
      "type": "tf",
      "q": "Mái ngói của một biệt thự gồm hai vách nghiêng nằm trên hai mặt phẳng có phương trình (P₁): 3x + 4z - 12 = 0 và (P₂): -3x + 4z - 12 = 0. Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Vectơ pháp tuyến của hai mặt phẳng mái ngói là <span class=\"math-sym\">n</span>₁ = (3; 0; 4) và <span class=\"math-sym\">n</span>₂ = (-3; 0; 4).",
        "Độ lớn của mỗi vectơ pháp tuyến là |<span class=\"math-sym\">n</span>₁| = |<span class=\"math-sym\">n</span>₂| = 5.",
        "Côsin góc giữa hai mặt phẳng mái ngói là cos θ = <span class=\"fraction\"><span class=\"numerator\">7</span><span class=\"denominator\">25</span></span> = 0,28.",
        "Góc giữa hai mặt phẳng mái ngói lớn hơn 80°."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Sai",
      "exp": "• <b>Ý a [Đúng]:</b> <span class=\"math-sym\">n</span>₁ = (3; 0; 4), <span class=\"math-sym\">n</span>₂ = (-3; 0; 4).<br>• <b>Ý b [Đúng]:</b> √(3² + 0² + 4²) = √25 = 5.<br>• <b>Ý c [Đúng]:</b> cos θ = |3(-3) + 0 + 4(4)| / (5 · 5) = |-9 + 16| / 25 = 7/25 = 0,28.<br>• <b>Ý d [Sai]:</b> arccos(0,28) ≈ 73,74° (< 80°)."
    },
    {
      "type": "mcq",
      "q": "Một tấm pin năng lượng mặt trời phẳng có phương trình x + y + √2 z - 10 = 0. Giả sử ánh sáng mặt trời chiếu tới theo phương thẳng đứng (song song với trục cao độ Oz). Góc giữa các tia sáng mặt trời và bề mặt tấm pin bằng bao nhiêu độ?",
      "opts": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "ans": 0,
      "correctText": "Phương án A: 45°",
      "exp": "• Tia sáng có VTCP song song trục Oz: <span class=\"math-sym\">u</span> = (0; 0; 1).<br>• Tấm pin có VTPT: <span class=\"math-sym\">n</span> = (1; 1; √2).<br>• sin α = <span class=\"fraction\"><span class=\"numerator\">|<span class=\"math-sym\">u</span> · <span class=\"math-sym\">n</span>|</span><span class=\"denominator\">|<span class=\"math-sym\">u</span>| · |<span class=\"math-sym\">n</span>|</span></span> = <span class=\"fraction\"><span class=\"numerator\">|0 + 0 + √2|</span><span class=\"denominator\">1 · √(1 + 1 + 2)</span></span> = <span class=\"fraction\"><span class=\"numerator\">√2</span><span class=\"denominator\">√4</span></span> = <span class=\"fraction\"><span class=\"numerator\">√2</span><span class=\"denominator\">2</span></span>.<br>• Do đó góc giữa tia sáng và tấm pin là <b>α = 45°</b>."
    }
  ],
  "17": [
    {
      "type": "mcq",
      "q": "Trong không gian Oxyz, phương trình chính tắc của mặt cầu tâm I(a; b; c) bán kính R > 0 là:",
      "opts": [
        "(x - a)² + (y - b)² + (z - c)² = R²",
        "(x + a)² + (y + b)² + (z + c)² = R²",
        "(x - a)² + (y - b)² + (z - c)² = R",
        "x² + y² + z² = R²"
      ],
      "ans": 0,
      "correctText": "Phương án A: (x - a)² + (y - b)² + (z - c)² = R²",
      "exp": "• <b>Phương trình chính tắc mặt cầu (SGK Toán 12):</b> Tập hợp tất cả các điểm M(x; y; z) cách tâm I(a; b; c) một khoảng bằng R có phương trình: (x - a)² + (y - b)² + (z - c)² = R²."
    },
    {
      "type": "mcq",
      "q": "Tìm toạ độ tâm I và bán kính R của mặt cầu (S): (x - 1)² + (y + 2)² + (z - 3)² = 25.",
      "opts": [
        "I(1; -2; 3) và R = 5",
        "I(-1; 2; -3) và R = 5",
        "I(1; -2; 3) và R = 25",
        "I(1; 2; 3) và R = 5"
      ],
      "ans": 0,
      "correctText": "Phương án A: I(1; -2; 3) và R = 5",
      "exp": "• Đối chiếu phương trình chuẩn (x - a)² + (y - b)² + (z - c)² = R²:<br>a = 1, b = -2, c = 3 và R = √25 = 5.<br>⇒ Tâm <b>I(1; -2; 3)</b> và bán kính <b>R = 5</b>."
    },
    {
      "type": "mcq",
      "q": "Viết phương trình mặt cầu có đường kính AB với A(1; 3; -1) và B(-1; 1; 3).",
      "opts": [
        "x² + (y - 2)² + (z - 1)² = 6",
        "x² + (y - 2)² + (z - 1)² = 24",
        "(x - 1)² + (y - 3)² + (z + 1)² = 6",
        "x² + (y + 2)² + (z + 1)² = 6"
      ],
      "ans": 0,
      "correctText": "Phương án A: x² + (y - 2)² + (z - 1)² = 6",
      "exp": "• Tâm I là trung điểm AB: I = ((1-1)/2; (3+1)/2; (-1+3)/2) = (0; 2; 1).<br>• Bán kính: R = IA = √[(1 - 0)² + (3 - 2)² + (-1 - 1)²] = √[1 + 1 + 4] = √6.<br>• Phương trình mặt cầu: <b>x² + (y - 2)² + (z - 1)² = 6</b>."
    },
    {
      "type": "tf",
      "q": "Cho mặt cầu (S): x² + y² + z² - 2x + 4y - 6z - 11 = 0 và mặt phẳng (P): 2x - 2y + z = 0. Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Toạ độ tâm của mặt cầu (S) là I(1; -2; 3).",
        "Bán kính của mặt cầu (S) là R = 5.",
        "Khoảng cách từ tâm I đến mặt phẳng (P) là d(I, (P)) = 3.",
        "Mặt phẳng (P) cắt mặt cầu (S) theo giao tuyến là đường tròn có bán kính r = 4."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Tâm I(1; -2; 3).<br>• <b>Ý b [Đúng]:</b> R = √(1 + 4 + 9 - (-11)) = √25 = 5.<br>• <b>Ý c [Đúng]:</b> d(I, (P)) = |2(1) - 2(-2) + 3| / √(2² + (-2)² + 1²) = |2 + 4 + 3| / 3 = 9/3 = 3.<br>• <b>Ý d [Đúng]:</b> r = √(R² - d²) = √(5² - 3²) = 4."
    },
    {
      "type": "match",
      "q": "Ghép các vật thể hình cầu trong thực tế (Cột A) với các thông số toạ độ tương ứng trong hệ Oxyz (Cột B):",
      "colA": [
        "Quả bóng thám không đo khí tượng bán kính 2 m ở độ cao 500 m",
        "Bồn chứa khí hoá lỏng LPG hình cầu đặt tại góc nhà máy",
        "Vùng phát sóng an toàn của trạm phát sóng 5G phủ bán kính 3 km",
        "Khối phao tiêu nổi hình cầu báo hiệu luồng tàu hàng hải"
      ],
      "colB": [
        "Tâm I(0; 0; 500) và bán kính R = 2 m",
        "Phương trình: x² + y² + (z - R)² = R² tiếp xúc mặt sàn",
        "Mặt cầu x² + y² + z² ≤ 9 (km²)",
        "Mặt cầu có tâm nổi nửa chìm trên mặt nước z = 0"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "1-A • 2-B • 3-C • 4-D",
      "exp": "• Các mô hình hình cầu xuất hiện rất phổ biến trong kĩ thuật viễn thông, bình chứa áp lực, thiết bị đo lường khí tượng và định vị hàng hải."
    },
    {
      "type": "drag",
      "q": "Chọn từ ngữ thích hợp điền vào chỗ trống để hoàn thiện vị trí tương đối giữa mặt cầu S(I; R) và mặt phẳng (P):",
      "text": "Gọi d là khoảng cách từ tâm I của mặt cầu đến mặt phẳng (P). Nếu d < R thì (P) [blank] mặt cầu theo giao tuyến là một [blank] có bán kính r = [blank]. Nếu d = R thì (P) [blank] mặt cầu. Nếu d > R thì (P) không có điểm chung với mặt cầu.",
      "words": [
        "cắt",
        "đường tròn",
        "√(R² - d²)",
        "tiếp xúc",
        "đường elip",
        "R - d"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "(1) cắt • (2) đường tròn • (3) √(R² - d²) • (4) tiếp xúc",
      "exp": "• <b>Vị trí tương đối mặt cầu và mặt phẳng:</b><br>- d < R: Cắt theo đường tròn bán kính r = √(R² - d²).<br>- d = R: Tiếp xúc tại một điểm.<br>- d > R: Không giao nhau."
    },
    {
      "type": "mcq",
      "q": "Cho mặt cầu (S) bán kính R = 5 bị cắt bởi mặt phẳng (P) cách tâm khoảng d = 3 như hình vẽ bên. Bán kính r của đường tròn giao tuyến bằng:",
      "opts": [
        "r = 4",
        "r = 2",
        "r = √34",
        "r = 3"
      ],
      "ans": 0,
      "correctText": "Phương án A: r = 4",
      "exp": "• Theo định lý Pythagoras trong tam giác vuông tạo bởi tâm mặt cầu, tâm đường tròn giao tuyến và một điểm trên đường tròn:<br>r = √(R² - d²) = √(5² - 3²) = √(25 - 9) = √16 = <b>4</b>.",
      "svgGraph": "<svg viewBox=\"0 0 380 220\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"8\" y=\"8\" width=\"364\" height=\"204\" rx=\"10\" fill=\"rgba(15,23,42,0.95)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/>\n  <!-- Sphere boundary -->\n  <circle cx=\"190\" cy=\"115\" r=\"70\" fill=\"rgba(56,189,248,0.12)\" stroke=\"#38bdf8\" stroke-width=\"1.8\"/>\n  <!-- Intersection circle (ellipse in perspective) -->\n  <ellipse cx=\"190\" cy=\"85\" rx=\"55\" ry=\"18\" fill=\"rgba(244,63,94,0.2)\" stroke=\"#f43f5e\" stroke-width=\"1.8\"/>\n  <!-- Center I -->\n  <circle cx=\"190\" cy=\"115\" r=\"3.5\" fill=\"#38bdf8\"/>\n  <text x=\"200\" y=\"125\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"800\">I</text>\n  <!-- Distance d = 3 from I to slice plane -->\n  <line x1=\"190\" y1=\"115\" x2=\"190\" y2=\"85\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n  <text x=\"175\" y=\"102\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"800\">d = 3</text>\n  <!-- Sphere radius R = 5 -->\n  <line x1=\"190\" y1=\"115\" x2=\"245\" y2=\"85\" stroke=\"#34d399\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"110\" fill=\"#34d399\" font-size=\"12\" font-weight=\"800\">R = 5</text>\n  <!-- Slice radius r -->\n  <line x1=\"190\" y1=\"85\" x2=\"245\" y2=\"85\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n  <text x=\"218\" y=\"78\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"800\">r = ?</text>\n</svg>"
    },
    {
      "type": "mcq",
      "q": "Viết phương trình mặt cầu tâm I(2; -1; 3) và tiếp xúc với mặt phẳng toạ độ (Oxy).",
      "opts": [
        "(x - 2)² + (y + 1)² + (z - 3)² = 9",
        "(x - 2)² + (y + 1)² + (z - 3)² = 4",
        "(x - 2)² + (y + 1)² + (z - 3)² = 1",
        "(x + 2)² + (y - 1)² + (z + 3)² = 9"
      ],
      "ans": 0,
      "correctText": "Phương án A: (x - 2)² + (y + 1)² + (z - 3)² = 9",
      "exp": "• Mặt phẳng (Oxy) có phương trình z = 0.<br>• Khoảng cách từ tâm I(2; -1; 3) đến (Oxy) là d = |z<sub style=\"font-size:0.8em\">I</sub>| = |3| = 3.<br>• Do mặt cầu tiếp xúc (Oxy) nên bán kính R = d = 3 ⇒ R² = 9.<br>• Phương trình mặt cầu là: <b>(x - 2)² + (y + 1)² + (z - 3)² = 9</b>."
    },
    {
      "type": "tf",
      "q": "Một ngọn hải đăng được đặt tại vị trí bờ biển có toạ độ H(0; 0; 0,1) (đơn vị: km, tức ngọn đèn cao 100 mét so với mặt nước biển). Đèn hải đăng phát tín hiệu ánh sáng quét trong vùng hình cầu có bán kính quét tối đa 20 km. Một tàu hàng di chuyển trên mặt biển phẳng (mặt phẳng z = 0) đến vị trí A(12; 16; 0). Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Phương trình biên của vùng quét ánh sáng hải đăng là x² + y² + (z - 0,1)² = 400.",
        "Khoảng cách từ tàu hàng tại A đến chân ngọn hải đăng (0; 0; 0) trên mặt biển là đúng 20 km.",
        "Tàu hàng tại vị trí A nằm trong vùng nhận được tín hiệu ánh sáng quét của ngọn hải đăng.",
        "Nếu tàu tiếp tục chạy thẳng về phía ngọn hải đăng thêm 5 km thì khoảng cách tới ngọn hải đăng nhỏ hơn 16 km."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Tâm H(0; 0; 0,1), R = 20 ⇒ x² + y² + (z - 0,1)² = 20² = 400.<br>• <b>Ý b [Đúng]:</b> Khoảng cách mặt biển d_ngang = √(12² + 16²) = √(144 + 256) = √400 = 20 km.<br>• <b>Ý c [Đúng]:</b> HA = √(12² + 16² + (-0,1)²) = √(400 + 0,01) ≈ 20,00025 km, xấp xỉ mép quét tín hiệu.<br>• <b>Ý d [Đúng]:</b> Chạy lại gần 5 km thì khoảng cách mặt ngang còn 15 km ⇒ khoảng cách thực tế √(15² + 0,1²) ≈ 15,0003 km < 16 km."
    },
    {
      "type": "mcq",
      "q": "Một trạm radar phòng không đặt tại gốc toạ độ O(0; 0; 0) có bán kính quét phát hiện mục tiêu là R = 50 km. Một máy bay trinh sát bay theo đường thẳng có khoảng cách ngắn nhất đến trạm radar là d = 40 km. Chiều dài đoạn đường bay mà máy bay nằm trong vùng quét phát hiện của radar bằng bao nhiêu km?",
      "opts": [
        "60 km",
        "30 km",
        "50 km",
        "80 km"
      ],
      "ans": 0,
      "correctText": "Phương án A: 60 km",
      "exp": "• Đường bay cắt mặt cầu quét của radar theo một dây cung AB.<br>• Nửa chiều dài dây cung: L/2 = √(R² - d²) = √(50² - 40²) = √(2500 - 1600) = √900 = 30 km.<br>• Tổng chiều dài đoạn bay bị radar phát hiện là L = 2 · 30 = <b>60 km</b>."
    }
  ],
  "18": [
    {
      "type": "mcq",
      "q": "Cho hai biến cố A và B với P(B) > 0. Xác suất có điều kiện của biến cố A với điều kiện biến cố B đã xảy ra, kí hiệu là P(A|B), được tính bằng công thức nào?",
      "opts": [
        "P(A|B) = <span class=\"fraction\"><span class=\"numerator\">P(AB)</span><span class=\"denominator\">P(B)</span></span>",
        "P(A|B) = <span class=\"fraction\"><span class=\"numerator\">P(AB)</span><span class=\"denominator\">P(A)</span></span>",
        "P(A|B) = P(A) · P(B)",
        "P(A|B) = P(A) + P(B) - P(AB)"
      ],
      "ans": 0,
      "correctText": "Phương án A: P(A|B) = <span class=\"fraction\"><span class=\"numerator\">P(AB)</span><span class=\"denominator\">P(B)</span></span>",
      "exp": "• <b>Định nghĩa xác suất có điều kiện (SGK Toán 12):</b> Cho hai biến cố A và B với P(B) > 0. Xác suất có điều kiện của A khi biết B đã xảy ra là: <b>P(A|B) = <span class=\"fraction\"><span class=\"numerator\">P(AB)</span><span class=\"denominator\">P(B)</span></span></b>."
    },
    {
      "type": "mcq",
      "q": "Cho hai biến cố A và B thoả mãn P(A) = 0,6; P(B) = 0,4 và P(AB) = 0,24. Tính xác suất có điều kiện P(A|B).",
      "opts": [
        "0,6",
        "0,4",
        "0,24",
        "0,8"
      ],
      "ans": 0,
      "correctText": "Phương án A: 0,6",
      "exp": "• Áp dụng công thức: P(A|B) = <span class=\"fraction\"><span class=\"numerator\">P(AB)</span><span class=\"denominator\">P(B)</span></span> = <span class=\"fraction\"><span class=\"numerator\">0,24</span><span class=\"denominator\">0,4</span></span> = <b>0,6</b>.<br>• Nhận xét: Vì P(A|B) = P(A) = 0,6 nên A và B là hai biến cố độc lập."
    },
    {
      "type": "mcq",
      "q": "Gieo một con xúc xắc cân đối và đồng chất 6 mặt. Biết rằng số chấm xuất hiện là một số chẵn, tính xác suất để số chấm xuất hiện chia hết cho 3.",
      "opts": [
        "1/3",
        "1/6",
        "1/2",
        "2/3"
      ],
      "ans": 0,
      "correctText": "Phương án A: 1/3",
      "exp": "• Gọi B là biến cố \"Số chấm là số chẵn\": B = {2; 4; 6} ⇒ n(B) = 3.<br>• Gọi A là biến cố \"Số chấm chia hết cho 3\": A = {3; 6}.<br>• Giao AB = {6} ⇒ n(AB) = 1.<br>• Xác suất có điều kiện: P(A|B) = <span class=\"fraction\"><span class=\"numerator\">n(AB)</span><span class=\"denominator\">n(B)</span></span> = <b><span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">3</span></span></b>."
    },
    {
      "type": "tf",
      "q": "Một hộp chứa 6 quả bóng màu đỏ và 4 quả bóng màu xanh. Lấy ngẫu nhiên lần lượt 2 quả bóng (không hoàn lại). Gọi A là biến cố \"Quả bóng thứ nhất màu đỏ\", B là biến cố \"Quả bóng thứ hai màu đỏ\". Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Xác suất để quả bóng thứ nhất lấy ra có màu đỏ là P(A) = 0,6.",
        "Xác suất để quả bóng thứ hai có màu đỏ khi biết quả thứ nhất đã là màu đỏ là P(B|A) = <span class=\"fraction\"><span class=\"numerator\">5</span><span class=\"denominator\">9</span></span>.",
        "Xác suất để cả hai quả bóng lấy ra đều có màu đỏ là P(AB) = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">3</span></span>.",
        "Hai biến cố A và B là hai biến cố độc lập với nhau."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Sai",
      "exp": "• <b>Ý a [Đúng]:</b> Ban đầu có 10 quả (6 đỏ) ⇒ P(A) = 6/10 = 0,6.<br>• <b>Ý b [Đúng]:</b> Sau khi lấy 1 quả đỏ, trong hộp còn 9 quả (5 đỏ) ⇒ P(B|A) = 5/9.<br>• <b>Ý c [Đúng]:</b> P(AB) = P(A) · P(B|A) = <span class=\"fraction\"><span class=\"numerator\">6</span><span class=\"denominator\">10</span></span> · <span class=\"fraction\"><span class=\"numerator\">5</span><span class=\"denominator\">9</span></span> = <span class=\"fraction\"><span class=\"numerator\">30</span><span class=\"denominator\">90</span></span> = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">3</span></span>.<br>• <b>Ý d [Sai]:</b> Vì lấy không hoàn lại, xác suất của B bị phụ thuộc vào kết quả của A (P(B|A) = 5/9 ≠ P(B) = 6/10) nên A và B <b>không độc lập</b>."
    },
    {
      "type": "match",
      "q": "Ghép các tình huống đánh giá xác suất thực tế (Cột A) với kí hiệu xác suất có điều kiện tương ứng (Cột B):",
      "colA": [
        "Xác suất một người bị bệnh phổi (P) khi biết người đó hút thuốc lá (H)",
        "Xác suất một email là thư rác (S) khi biết nó chứa từ khóa khuyến mãi (K)",
        "Xác suất một học sinh đỗ đại học (D) khi biết học sinh đó đạt giải học sinh giỏi tỉnh (G)",
        "Xác suất một tài xế gây tai nạn (T) khi biết tài xế đó đã uống rượu bia (R)"
      ],
      "colB": [
        "P(P|H)",
        "P(S|K)",
        "P(D|G)",
        "P(T|R)"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "1-A • 2-B • 3-C • 4-D",
      "exp": "• Quy ước kí hiệu P(Hiện tượng cần khảo sát | Điều kiện đã biết thông tin)."
    },
    {
      "type": "drag",
      "q": "Chọn công thức thích hợp điền vào chỗ trống để hoàn thiện định lý công thức nhân xác suất và tính độc lập:",
      "text": "Với hai biến cố bất kì A và B, ta luôn có công thức nhân: P(AB) = P(B) · [blank] = P(A) · [blank]. Hai biến cố A và B được gọi là độc lập khi và chỉ khi [blank] = P(A) · P(B) (hoặc P(A|B) = [blank]).",
      "words": [
        "P(A|B)",
        "P(B|A)",
        "P(AB)",
        "P(A)",
        "P(A + B)"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "(1) P(A|B) • (2) P(B|A) • (3) P(AB) • (4) P(A)",
      "exp": "• <b>Công thức nhân xác suất:</b> P(AB) = P(B)P(A|B) = P(A)P(B|A). Khi độc lập: P(AB) = P(A)P(B)."
    },
    {
      "type": "mcq",
      "q": "Bảng thống kê 2x2 hình bên ghi nhận tình trạng sử dụng kính mắt của 100 học sinh (gồm Nam và Nữ). Chọn ngẫu nhiên 1 học sinh, biết rằng học sinh đó là Nam, xác suất để bạn Nam này đeo kính là:",
      "opts": [
        "25/45 (5/9)",
        "25/100 (1/4)",
        "25/60 (5/12)",
        "45/100"
      ],
      "ans": 0,
      "correctText": "Phương án A: 25/45 (5/9)",
      "exp": "• Dựa vào bảng:<br>- Số học sinh Nam: n(Nam) = 25 + 20 = 45 học sinh.<br>- Số học sinh Nam có đeo kính: n(Nam ∩ Kính) = 25 học sinh.<br>• Xác suất có điều kiện: P(Kính | Nam) = <span class=\"fraction\"><span class=\"numerator\">25</span><span class=\"denominator\">45</span></span> = <b><span class=\"fraction\"><span class=\"numerator\">5</span><span class=\"denominator\">9</span></span></b>.",
      "svgGraph": "<svg viewBox=\"0 0 360 180\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"340\" height=\"160\" rx=\"8\" fill=\"rgba(15,23,42,0.9)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/><line x1=\"20\" y1=\"50\" x2=\"340\" y2=\"50\" stroke=\"rgba(255,255,255,0.3)\" stroke-width=\"1.2\"/><line x1=\"20\" y1=\"90\" x2=\"340\" y2=\"90\" stroke=\"rgba(255,255,255,0.2)\" stroke-width=\"1\"/><line x1=\"20\" y1=\"130\" x2=\"340\" y2=\"130\" stroke=\"rgba(255,255,255,0.2)\" stroke-width=\"1\"/><line x1=\"120\" y1=\"20\" x2=\"120\" y2=\"160\" stroke=\"rgba(255,255,255,0.3)\" stroke-width=\"1.2\"/><line x1=\"190\" y1=\"20\" x2=\"190\" y2=\"160\" stroke=\"rgba(255,255,255,0.2)\" stroke-width=\"1\"/><line x1=\"265\" y1=\"20\" x2=\"265\" y2=\"160\" stroke=\"rgba(255,255,255,0.2)\" stroke-width=\"1\"/><text x=\"70\" y=\"38\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"700\">Giới tính</text><text x=\"155\" y=\"38\" fill=\"#34d399\" font-size=\"11\" font-weight=\"700\">Đeo kính</text><text x=\"227\" y=\"38\" fill=\"#cbd5e1\" font-size=\"11\">Không kính</text><text x=\"300\" y=\"38\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"700\">Tổng</text><text x=\"70\" y=\"75\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\">Nam</text><text x=\"155\" y=\"75\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"800\">25</text><text x=\"227\" y=\"75\" fill=\"#cbd5e1\" font-size=\"12\">20</text><text x=\"300\" y=\"75\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"700\">45</text><text x=\"70\" y=\"115\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\">Nữ</text><text x=\"155\" y=\"115\" fill=\"#cbd5e1\" font-size=\"12\">35</text><text x=\"227\" y=\"115\" fill=\"#cbd5e1\" font-size=\"12\">20</text><text x=\"300\" y=\"115\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"700\">55</text><text x=\"70\" y=\"150\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"700\">Tổng</text><text x=\"155\" y=\"150\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"700\">60</text><text x=\"227\" y=\"150\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"700\">40</text><text x=\"300\" y=\"150\" fill=\"#34d399\" font-size=\"13\" font-weight=\"800\">100</text></svg>"
    },
    {
      "type": "mcq",
      "q": "Rút ngẫu nhiên lần lượt 2 lá bài từ bộ bài tú lơ khơ 52 lá (không hoàn lại). Xác suất để lá thứ hai là quân Át biết rằng lá thứ nhất đã là một quân Át bằng bao nhiêu?",
      "opts": [
        "3/51 (1/17)",
        "4/52 (1/13)",
        "3/52",
        "4/51"
      ],
      "ans": 0,
      "correctText": "Phương án A: 3/51 (1/17)",
      "exp": "• Bộ bài ban đầu có 52 lá (trong đó có 4 quân Át).<br>• Khi lá thứ nhất đã là quân Át thì trong bộ bài còn lại 51 lá, trong đó còn lại đúng 3 quân Át.<br>• Xác suất có điều kiện: P = <span class=\"fraction\"><span class=\"numerator\">3</span><span class=\"denominator\">51</span></span> = <b><span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">17</span></span></b>."
    },
    {
      "type": "tf",
      "q": "Tại một công ty công nghệ, tỷ lệ lập trình viên thành thạo ngôn ngữ Python là 70% (P(A) = 0,7), tỷ lệ thành thạo Java là 50% (P(B) = 0,5), và tỷ lệ thành thạo cả hai ngôn ngữ Python và Java là 35% (P(AB) = 0,35). Chọn ngẫu nhiên 1 lập trình viên. Xét tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Biết rằng lập trình viên được chọn thành thạo Java, xác suất người đó cũng thành thạo Python là P(A|B) = 0,7.",
        "Biết rằng lập trình viên được chọn thành thạo Python, xác suất người đó cũng thành thạo Java là P(B|A) = 0,5.",
        "Tỷ lệ lập trình viên của công ty biết ít nhất một trong hai ngôn ngữ là P(A ∪ B) = 85%.",
        "Việc một lập trình viên thành thạo Python và thành thạo Java là hai biến cố độc lập nhau."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> P(A|B) = P(AB) / P(B) = 0,35 / 0,5 = 0,7.<br>• <b>Ý b [Đúng]:</b> P(B|A) = P(AB) / P(A) = 0,35 / 0,7 = 0,5.<br>• <b>Ý c [Đúng]:</b> P(A ∪ B) = P(A) + P(B) - P(AB) = 0,7 + 0,5 - 0,35 = 0,85 = 85%.<br>• <b>Ý d [Đúng]:</b> Do P(AB) = 0,35 = 0,7 · 0,5 = P(A) · P(B) nên hai biến cố độc lập."
    },
    {
      "type": "mcq",
      "q": "Một dây chuyền sản xuất vi mạch kiểm tra chất lượng linh kiện qua hai vòng độc lập: Vòng 1 phát hiện lỗi với xác suất 0,9. Nếu linh kiện lọt qua Vòng 1, Vòng 2 sẽ phát hiện lỗi với xác suất 0,8. Xác suất để một linh kiện bị lỗi bị phát hiện ở Vòng 2 là bao nhiêu?",
      "opts": [
        "0,08",
        "0,80",
        "0,10",
        "0,72"
      ],
      "ans": 0,
      "correctText": "Phương án A: 0,08",
      "exp": "• Xác suất linh kiện lỗi lọt qua Vòng 1 là: P(Qua 1) = 1 - 0,9 = 0,1.<br>• Xác suất linh kiện lỗi bị phát hiện ở Vòng 2 khi đã lọt qua Vòng 1 là P(Bị bắt ở 2 | Qua 1) = 0,8.<br>• Theo công thức nhân: P = 0,1 · 0,8 = <b>0,08 (8%)</b>."
    }
  ],
  "19": [
    {
      "type": "mcq",
      "q": "Cho nhóm biến cố đầy đủ {B₁, B₂, ..., Bₙ} với P(Bᵢ) > 0. Công thức xác suất toàn phần xác định xác suất của một biến cố A bất kì là:",
      "opts": [
        "P(A) = ∑_{i=1}ⁿ P(Bᵢ) · P(A|Bᵢ)",
        "P(A) = ∑_{i=1}ⁿ P(Bᵢ) + P(A|Bᵢ)",
        "P(A) = ∏_{i=1}ⁿ P(A|Bᵢ)",
        "P(A) = <span class=\"fraction\"><span class=\"numerator\">∑ P(Bᵢ)</span><span class=\"denominator\">P(A|Bᵢ)</span></span>"
      ],
      "ans": 0,
      "correctText": "Phương án A: P(A) = ∑_{i=1}ⁿ P(Bᵢ) · P(A|Bᵢ)",
      "exp": "• <b>Công thức xác suất toàn phần (SGK Toán 12):</b> Cho hệ đầy đủ {B₁, B₂, ..., Bₙ}. Xác suất của biến cố A được tính bằng tổng tích xác suất của từng trường hợp: P(A) = P(B₁)P(A|B₁) + P(B₂)P(A|B₂) + ... + P(Bₙ)P(A|Bₙ)."
    },
    {
      "type": "mcq",
      "q": "Có hai phân xưởng may áo. Phân xưởng 1 sản xuất 60% tổng số áo và có tỷ lệ phế phẩm 2%. Phân xưởng 2 sản xuất 40% số áo và có tỷ lệ phế phẩm 3%. Chọn ngẫu nhiên 1 chiếc áo từ kho chung, xác suất chiếc áo đó là phế phẩm bằng bao nhiêu?",
      "opts": [
        "0,024 (2,4%)",
        "0,025 (2,5%)",
        "0,050 (5%)",
        "0,012 (1,2%)"
      ],
      "ans": 0,
      "correctText": "Phương án A: 0,024 (2,4%)",
      "exp": "• Gọi B₁: \"Áo do PX1 may\" ⇒ P(B₁) = 0,6; P(Lỗi | B₁) = 0,02.<br>• Gọi B₂: \"Áo do PX2 may\" ⇒ P(B₂) = 0,4; P(Lỗi | B₂) = 0,03.<br>• Theo công thức xác suất toàn phần:<br>P(Lỗi) = P(B₁)P(Lỗi|B₁) + P(B₂)P(Lỗi|B₂) = 0,6 · 0,02 + 0,4 · 0,03 = 0,012 + 0,012 = <b>0,024 (2,4%)</b>."
    },
    {
      "type": "mcq",
      "q": "Từ số liệu câu trên: Giả sử chiếc áo lấy ra kiểm tra bị lỗi (phế phẩm). Áp dụng công thức Bayes, xác suất để chiếc áo phế phẩm này do Phân xưởng 1 sản xuất bằng bao nhiêu?",
      "opts": [
        "0,5 (50%)",
        "0,6 (60%)",
        "0,4 (40%)",
        "0,24 (24%)"
      ],
      "ans": 0,
      "correctText": "Phương án A: 0,5 (50%)",
      "exp": "• Áp dụng công thức Bayes:<br>P(B₁ | Lỗi) = <span class=\"fraction\"><span class=\"numerator\">P(B₁) · P(Lỗi | B₁)</span><span class=\"denominator\">P(Lỗi)</span></span> = <span class=\"fraction\"><span class=\"numerator\">0,6 · 0,02</span><span class=\"denominator\">0,024</span></span> = <span class=\"fraction\"><span class=\"numerator\">0,012</span><span class=\"denominator\">0,024</span></span> = <b>0,5 (50%)</b>."
    },
    {
      "type": "tf",
      "q": "Có hai hộp bi: Hộp I có 4 viên bi đỏ và 2 viên bi xanh. Hộp II có 3 viên bi đỏ và 5 viên bi xanh. Gieo một đồng xu cân đối, nếu xuất hiện mặt Ngửa thì chọn Hộp I, nếu sấp thì chọn Hộp II, sau đó lấy ngẫu nhiên 1 viên bi từ hộp đã chọn. Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Xác suất chọn được Hộp I là P(B₁) = 0,5 và Hộp II là P(B₂) = 0,5.",
        "Xác suất lấy được bi đỏ nếu đã chọn Hộp I là P(A|B₁) = <span class=\"fraction\"><span class=\"numerator\">4</span><span class=\"denominator\">6</span></span> = <span class=\"fraction\"><span class=\"numerator\">2</span><span class=\"denominator\">3</span></span>.",
        "Theo công thức xác suất toàn phần, xác suất lấy được viên bi đỏ là P(A) = <span class=\"fraction\"><span class=\"numerator\">25</span><span class=\"denominator\">48</span></span>.",
        "Biết rằng viên bi lấy ra có màu đỏ, xác suất để viên bi đó thuộc Hộp I tính theo công thức Bayes là <span class=\"fraction\"><span class=\"numerator\">16</span><span class=\"denominator\">25</span></span> = 0,64."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Đồng xu cân đối nên P(B₁) = P(B₂) = 0,5.<br>• <b>Ý b [Đúng]:</b> Hộp I có 4 đỏ / 6 bi ⇒ P(A|B₁) = 4/6 = 2/3.<br>• <b>Ý c [Đúng]:</b> Hộp II có 3 đỏ / 8 bi ⇒ P(A|B₂) = 3/8. P(A) = 0,5(2/3) + 0,5(3/8) = 1/3 + 3/16 = 16/48 + 9/48 = 25/48.<br>• <b>Ý d [Đúng]:</b> P(B₁|A) = [0,5 · (2/3)] / (25/48) = (1/3) / (25/48) = 48/75 = 16/25 = 0,64."
    },
    {
      "type": "match",
      "q": "Ghép các bài toán thực tiễn của công nghệ 4.0 và y tế (Cột A) với ứng dụng công thức Bayes tương ứng (Cột B):",
      "colA": [
        "Bộ lọc thư rác (Spam Filter) tự động của Gmail",
        "Xét nghiệm tầm soát sớm bệnh ung thư trong y khoa",
        "Nhận dạng gian lận giao dịch thẻ ngân hàng",
        "Thuật toán xe tự hành nhận diện biển báo giao thông"
      ],
      "colB": [
        "Tính xác suất thư là spam khi xuất hiện chuỗi từ khóa nghi vấn",
        "Tính xác suất thực sự mắc bệnh khi có kết quả xét nghiệm dương tính",
        "Tính xác suất giao dịch bị lừa đảo khi có hành vi bất thường",
        "Cập nhật xác suất nhận diện vật thể dựa trên luồng ảnh camera liên tục"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "1-A • 2-B • 3-C • 4-D",
      "exp": "• Công thức Bayes là nền tảng toán học của Machine Learning, AI hiện đại và chẩn đoán y khoa xác suất."
    },
    {
      "type": "drag",
      "q": "Chọn biểu thức thích hợp điền vào chỗ trống để hoàn thiện công thức Bayes:",
      "text": "Cho nhóm biến cố đầy đủ {B₁, B₂, ..., Bₙ} và biến cố A với P(A) > 0. Xác suất hậu nghiệm P(Bₖ|A) được xác định bởi: P(Bₖ|A) = <span class=\"fraction\"><span class=\"numerator\">[blank]</span><span class=\"denominator\">P(A)</span></span> = <span class=\"fraction\"><span class=\"numerator\">P(Bₖ) · P(A|Bₖ)</span><span class=\"denominator\">[blank]</span></span>.",
      "words": [
        "P(Bₖ) · P(A|Bₖ)",
        "∑_{i=1}ⁿ P(Bᵢ) · P(A|Bᵢ)",
        "P(A) · P(Bₖ)",
        "P(Bₖ) + P(A)"
      ],
      "ans": [
        0,
        1
      ],
      "correctText": "(1) P(Bₖ) · P(A|Bₖ) • (2) ∑_{i=1}ⁿ P(Bᵢ) · P(A|Bᵢ)",
      "exp": "• <b>Công thức Bayes (SGK Toán 12):</b> Dùng để đảo ngược điều kiện, cập nhật xác suất tiên nghiệm P(Bₖ) thành xác suất hậu nghiệm P(Bₖ|A) khi đã biết biến cố A xảy ra."
    },
    {
      "type": "mcq",
      "q": "Cho sơ đồ hình cây xác suất như hình vẽ bên. Giá trị của xác suất toàn phần P(A) bằng:",
      "opts": [
        "0,38",
        "0,45",
        "0,30",
        "0,50"
      ],
      "ans": 0,
      "correctText": "Phương án A: 0,38",
      "exp": "• Nhánh trên: B₁ có P(B₁) = 0,4; A nhánh trên có P(A|B₁) = 0,5 ⇒ P(B₁ ∩ A) = 0,4 · 0,5 = 0,20.<br>• Nhánh dưới: B₂ có P(B₂) = 0,6; A nhánh dưới có P(A|B₂) = 0,3 ⇒ P(B₂ ∩ A) = 0,6 · 0,3 = 0,18.<br>• Theo công thức xác suất toàn phần: P(A) = 0,20 + 0,18 = <b>0,38</b>.",
      "svgGraph": "<svg viewBox=\"0 0 360 200\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"340\" height=\"180\" rx=\"8\" fill=\"rgba(15,23,42,0.9)\" stroke=\"#0ea5e9\" stroke-width=\"1.6\"/><circle cx=\"40\" cy=\"100\" r=\"5\" fill=\"#38bdf8\"/><line x1=\"40\" y1=\"100\" x2=\"140\" y2=\"55\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"80\" y=\"65\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"700\">0,4</text><circle cx=\"140\" cy=\"55\" r=\"5\" fill=\"#38bdf8\"/><text x=\"145\" y=\"45\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"800\">B₁</text><line x1=\"40\" y1=\"100\" x2=\"140\" y2=\"145\" stroke=\"#f43f5e\" stroke-width=\"2\"/><text x=\"80\" y=\"140\" fill=\"#f43f5e\" font-size=\"11\" font-weight=\"700\">0,6</text><circle cx=\"140\" cy=\"145\" r=\"5\" fill=\"#f43f5e\"/><text x=\"145\" y=\"160\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"800\">B₂</text><line x1=\"140\" y1=\"55\" x2=\"260\" y2=\"30\" stroke=\"#34d399\" stroke-width=\"1.8\"/><text x=\"195\" y=\"32\" fill=\"#34d399\" font-size=\"11\">0,5</text><text x=\"270\" y=\"35\" fill=\"#34d399\" font-size=\"12\" font-weight=\"800\">A (0,20)</text><line x1=\"140\" y1=\"55\" x2=\"260\" y2=\"80\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/><text x=\"195\" y=\"75\" fill=\"#cbd5e1\" font-size=\"10\">0,5</text><text x=\"270\" y=\"85\" fill=\"#cbd5e1\" font-size=\"11\">Ā</text><line x1=\"140\" y1=\"145\" x2=\"260\" y2=\"120\" stroke=\"#34d399\" stroke-width=\"1.8\"/><text x=\"195\" y=\"125\" fill=\"#34d399\" font-size=\"11\">0,3</text><text x=\"270\" y=\"125\" fill=\"#34d399\" font-size=\"12\" font-weight=\"800\">A (0,18)</text><line x1=\"140\" y1=\"145\" x2=\"260\" y2=\"170\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/><text x=\"195\" y=\"165\" fill=\"#cbd5e1\" font-size=\"10\">0,7</text><text x=\"270\" y=\"175\" fill=\"#cbd5e1\" font-size=\"11\">Ā</text></svg>"
    },
    {
      "type": "mcq",
      "q": "Một dây chuyền sản xuất vi xử lý lấy chip từ 3 nguồn cung cấp A, B, C với tỷ lệ tương ứng là 50%, 30%, 20%. Tỷ lệ chip lỗi của từng nguồn tương ứng là 1%, 2%, 3%. Chọn ngẫu nhiên 1 con chip từ dây chuyền, xác suất chip đó là sản phẩm lỗi bằng:",
      "opts": [
        "0,017 (1,7%)",
        "0,020 (2,0%)",
        "0,060 (6,0%)",
        "0,015 (1,5%)"
      ],
      "ans": 0,
      "correctText": "Phương án A: 0,017 (1,7%)",
      "exp": "• Áp dụng công thức xác suất toàn phần:<br>P(Lỗi) = 0,50 · 0,01 + 0,30 · 0,02 + 0,20 · 0,03 = 0,005 + 0,006 + 0,006 = <b>0,017 (1,7%)</b>."
    },
    {
      "type": "tf",
      "q": "Một bệnh viện dùng xét nghiệm nhanh để tầm soát một loại bệnh hiếm trong cộng đồng. Tỷ lệ người mắc bệnh trong cộng đồng là 1% (P(B) = 0,01). Nếu một người mắc bệnh, xét nghiệm cho kết quả Dương tính (+) với xác suất 98% (P(+|B) = 0,98). Nếu người không mắc bệnh, xét nghiệm vẫn cho kết quả Dương tính giả với xác suất 2% (P(+|B̄) = 0,02). Chọn ngẫu nhiên 1 người đi xét nghiệm. Xét tính Đúng/Sai của từng mệnh đề sau:",
      "stmts": [
        "Xác suất để một người bất kì nhận kết quả xét nghiệm Dương tính là P(+) = 0,0296.",
        "Trong các kết quả xét nghiệm Dương tính, tỷ lệ dương tính giả chiếm hơn 65%.",
        "Một người có kết quả xét nghiệm Dương tính, xác suất người này thực sự mắc bệnh tính theo Bayes là xấp xỉ 33,1%.",
        "Bác sĩ kết luận người có kết quả xét nghiệm Dương tính chắc chắn mắc bệnh với độ tin cậy trên 95%."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) Đúng • b) Đúng • c) Đúng • d) Sai",
      "exp": "• <b>Ý a [Đúng]:</b> P(+) = 0,01 · 0,98 + 0,99 · 0,02 = 0,0098 + 0,0198 = 0,0296.<br>• <b>Ý b [Đúng]:</b> Tỷ lệ dương tính giả trong các ca dương tính là: 0,0198 / 0,0296 ≈ 66,9% (> 65%).<br>• <b>Ý c [Đúng]:</b> P(B|+) = <span class=\"fraction\"><span class=\"numerator\">0,0098</span><span class=\"denominator\">0,0296</span></span> ≈ 33,11%.<br>• <b>Ý d [Sai]:</b> Đây là \"Nghịch lý tỉ lệ nền\" (Base Rate Fallacy) kinh điển trong y học xác suất: Dù xét nghiệm có độ nhạy 98%, nhưng vì bệnh hiếm nên xác suất mắc bệnh thực tế chỉ khoảng 33% (cứ 3 người dương tính thì chỉ có 1 người thực sự mắc bệnh), bác sĩ không thể kết luận chắc chắn 95%."
    },
    {
      "type": "mcq",
      "q": "Một bộ lọc thư rác (Spam Filter) nhận thấy trong toàn bộ thư gửi đến hộp thư, có 80% là thư bình thường và 20% là thư rác. Từ khóa \"Trúng thưởng\" xuất hiện trong 90% thư rác, nhưng chỉ xuất hiện trong 5% thư bình thường. Khi nhận được một email chứa từ khóa \"Trúng thưởng\", xác suất để email đó thực sự là thư rác bằng bao nhiêu % (làm tròn đến hàng đơn vị)?",
      "opts": [
        "82%",
        "90%",
        "95%",
        "75%"
      ],
      "ans": 0,
      "correctText": "Phương án A: 82%",
      "exp": "• Gọi S là biến cố \"Thư rác\" (P(S) = 0,2) và B là \"Thư bình thường\" (P(B) = 0,8).<br>• Gọi T là biến cố \"Chứa từ Trúng thưởng\": P(T|S) = 0,9; P(T|B) = 0,05.<br>• Xác suất toàn phần: P(T) = 0,2 · 0,9 + 0,8 · 0,05 = 0,18 + 0,04 = 0,22.<br>• Áp dụng công thức Bayes:<br>P(S|T) = <span class=\"fraction\"><span class=\"numerator\">0,18</span><span class=\"denominator\">0,22</span></span> = <span class=\"fraction\"><span class=\"numerator\">9</span><span class=\"denominator\">11</span></span> ≈ <b>81,8% ≈ 82%</b>."
    }
  ]
};

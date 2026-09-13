window.ALL_LESSONS_DATA = {
  "1": [
    {
      "type": "mcq",
      "q": "Câu nào sau đây là một <b>mệnh đề toán học</b>?",
      "opts": [
        "Số 17 là một số nguyên tố.",
        "Học môn Toán vui quá!",
        "Hôm nay trời có mưa không?",
        "Bạn hãy tính giá trị biểu thức này đi!"
      ],
      "ans": 0,
      "exp": "• Mệnh đề toán học là khẳng định đúng hoặc sai.<br>• 'Số 17 là số nguyên tố' là khẳng định đúng, do đó là mệnh đề.<br>• Các câu cảm thán, câu hỏi, câu cầu khiến không phải là mệnh đề."
    },
    {
      "type": "match",
      "q": "Ghép các kí hiệu toán học (Cột A) với ý nghĩa tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Kí hiệu ∀",
          "b": "A. Với mọi (tất cả các phần tử thuộc tập hợp)"
        },
        {
          "a": "2. Kí hiệu ∃",
          "b": "B. Tồn tại (ít nhất một phần tử thỏa mãn)"
        },
        {
          "a": "3. Mệnh đề P ⇒ Q",
          "b": "C. Mệnh đề kéo theo (Nếu P thì Q)"
        },
        {
          "a": "4. Mệnh đề P ⇔ Q",
          "b": "D. Mệnh đề tương đương (P khi và chỉ khi Q)"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• ∀: Với mọi.<br>• ∃: Tồn tại ít nhất một.<br>• P ⇒ Q: Mệnh đề kéo theo.<br>• P ⇔ Q: Mệnh đề tương đương.",
      "colA": [
        "1. Kí hiệu ∀",
        "2. Kí hiệu ∃",
        "3. Mệnh đề P ⇒ Q",
        "4. Mệnh đề P ⇔ Q"
      ],
      "colB": [
        "A. Với mọi (tất cả các phần tử thuộc tập hợp)",
        "B. Tồn tại (ít nhất một phần tử thỏa mãn)",
        "C. Mệnh đề kéo theo (Nếu P thì Q)",
        "D. Mệnh đề tương đương (P khi và chỉ khi Q)"
      ]
    },
    {
      "type": "tf",
      "q": "Xét tính đúng - sai của các mệnh đề số học sau:",
      "items": [
        {
          "text": "a) \"∀x ∈ ℝ: x² + 1 > 0\" là mệnh đề đúng.",
          "ans": true,
          "exp": "Vì x² ≥ 0 với mọi x ∈ ℝ nên x² + 1 ≥ 1 > 0 (Đúng)."
        },
        {
          "text": "b) \"∃x ∈ ℤ: x² = 2\" là mệnh đề đúng.",
          "ans": false,
          "exp": "x² = 2 có nghiệm x = ±√2 ∉ ℤ, không có nghiệm nguyên (Sai)."
        },
        {
          "text": "c) Mệnh đề phủ định của \"∀x ∈ ℝ: x² - x + 1 > 0\" là \"∃x ∈ ℝ: x² - x + 1 ≤ 0\".",
          "ans": true,
          "exp": "Phủ định của ∀ là ∃, phủ định của > là ≤ (Đúng)."
        },
        {
          "text": "d) Phương trình x² - 4x + 4 = 0 có hai nghiệm phân biệt.",
          "ans": false,
          "exp": "Δ = 16 - 16 = 0 nên phương trình có nghiệm kép x = 2 (Sai)."
        }
      ],
      "stmts": [
        "a) \"∀x ∈ ℝ: x² + 1 > 0\" là mệnh đề đúng.",
        "b) \"∃x ∈ ℤ: x² = 2\" là mệnh đề đúng.",
        "c) Mệnh đề phủ định của \"∀x ∈ ℝ: x² - x + 1 > 0\" là \"∃x ∈ ℝ: x² - x + 1 ≤ 0\".",
        "d) Phương trình x² - 4x + 4 = 0 có hai nghiệm phân biệt."
      ],
      "ans": [
        true,
        false,
        true,
        false
      ]
    },
    {
      "type": "mcq",
      "q": "Cho mệnh đề chứa biến P(n): \"2n + 1 là số nguyên tố\" với n là số tự nhiên. Với giá trị nào của n dưới đây thì P(n) là một mệnh đề <b>sai</b>?",
      "opts": [
        "n = 4",
        "n = 1",
        "n = 2",
        "n = 3"
      ],
      "ans": 0,
      "exp": "• n = 1: 2(1) + 1 = 3 (số nguyên tố).<br>• n = 2: 2(2) + 1 = 5 (số nguyên tố).<br>• n = 3: 2(3) + 1 = 7 (số nguyên tố).<br>• n = 4: 2(4) + 1 = 9 = 3² (hợp số ⇒ P(4) sai)."
    },
    {
      "type": "drag",
      "q": "Điền từ thích hợp vào chỗ trống để hoàn thiện định lý về điều kiện cần và đủ:<br>Cho mệnh đề kéo theo P ⇒ Q. Khi đó P được gọi là điều kiện %%%SLOT_1%%% để có Q, và Q được gọi là điều kiện %%%SLOT_2%%% để có P. Nếu P ⇔ Q thì P là điều kiện %%%SLOT_3%%% để có Q.",
      "slots": [
        "đủ",
        "cần",
        "cần và đủ"
      ],
      "pool": [
        "đủ",
        "cần",
        "cần và đủ",
        "duy nhất",
        "phủ định"
      ],
      "exp": "• P là điều kiện đủ để có Q.<br>• Q là điều kiện cần để có P.<br>• P ⇔ Q: P là điều kiện cần và đủ để có Q.",
      "sentence": "Điền từ thích hợp vào chỗ trống để hoàn thiện định lý về điều kiện cần và đủ:<br>Cho mệnh đề kéo theo P ⇒ Q. Khi đó P được gọi là điều kiện %%%SLOT_1%%% để có Q, và Q được gọi là điều kiện %%%SLOT_2%%% để có P. Nếu P ⇔ Q thì P là điều kiện %%%SLOT_3%%% để có Q.",
      "words": [
        "đủ",
        "cần",
        "cần và đủ",
        "duy nhất",
        "phủ định"
      ],
      "ans": [
        "đủ",
        "cần",
        "cần và đủ"
      ]
    },
    {
      "type": "mcq",
      "q": "Tìm mệnh đề đảo của mệnh đề: \"Nếu tam giác ABC là tam giác đều thì tam giác ABC là tam giác cân\".",
      "opts": [
        "Nếu tam giác ABC là tam giác cân thì tam giác ABC là tam giác đều.",
        "Nếu tam giác ABC không phải là tam giác đều thì tam giác ABC không cân.",
        "Nếu tam giác ABC không cân thì tam giác ABC không phải là tam giác đều.",
        "Tam giác ABC là tam giác đều khi và chỉ khi tam giác ABC cân."
      ],
      "ans": 0,
      "exp": "• Mệnh đề ban đầu có dạng P ⇒ Q.<br>• Mệnh đề đảo có dạng Q ⇒ P: 'Nếu tam giác ABC là tam giác cân thì tam giác ABC là tam giác đều'."
    },
    {
      "type": "mcq",
      "q": "Cho mệnh đề A: \"Mọi hình vuông đều là hình thoi\". Mệnh đề phủ định ¯A là:",
      "opts": [
        "Tồn tại hình vuông không phải là hình thoi.",
        "Mọi hình vuông đều không phải là hình thoi.",
        "Tồn tại hình thoi không phải là hình vuông.",
        "Mọi hình thoi đều là hình vuông."
      ],
      "ans": 0,
      "exp": "• Phủ định của \"Mọi X đều là Y\" là \"Tồn tại X không phải là Y\"."
    },
    {
      "type": "mcq",
      "q": "Trong hệ thống an ninh ngân hàng, lệnh mở két bảo mật yêu cầu biểu thức logic: (A VÀ B) HOẶC C = Đúng. Biết thẻ từ A hợp lệ, vân tay B không khớp, mã khẩn cấp C hợp lệ. Kết quả két có mở không?",
      "opts": [
        "Két MỞ ĐƯỢC vì nhánh C đúng làm cho toàn bộ biểu thức logic nhận giá trị Đúng.",
        "Két KHÔNG MỞ vì dấu vân tay B không khớp làm toàn bộ điều kiện bị hủy.",
        "Két KHÔNG MỞ vì yêu cầu bắt buộc cả 3 điều kiện A, B, C phải đồng thời thỏa mãn.",
        "Két báo động và khóa vĩnh viễn hệ thống."
      ],
      "ans": 0,
      "exp": "• Thẻ A đúng (1), vân tay B sai (0) ⇒ A ∧ B = 0.<br>• Mã C đúng (1).<br>• (A ∧ B) ∨ C = 0 ∨ 1 = 1 (Đúng) ⇒ Két mở được."
    },
    {
      "type": "mcq",
      "q": "Một hợp đồng kinh tế quy định: \"Nếu bên A giao hàng đúng hạn (P) thì bên B sẽ thanh toán 100% hợp đồng ngay trong ngày (Q)\". Tình huống nào dưới đây chứng minh bên B đã <b>vi phạm hợp đồng</b>?",
      "opts": [
        "Bên A giao hàng đúng hạn nhưng bên B không thanh toán 100% hợp đồng trong ngày.",
        "Bên A giao trễ hạn và bên B từ chối thanh toán trong ngày.",
        "Bên A giao hàng đúng hạn và bên B đã thanh toán đầy đủ 100% hợp đồng.",
        "Bên A giao trễ hạn nhưng bên B vẫn tạo điều kiện thanh toán trước 50%."
      ],
      "ans": 0,
      "exp": "• Mệnh đề kéo theo P ⇒ Q chỉ sai khi P đúng mà Q sai: Bên A giao đúng hạn nhưng Bên B không thanh toán như cam kết."
    },
    {
      "type": "mcq",
      "q": "Bác sĩ đưa ra chẩn đoán: \"Nếu bệnh nhân sốt trên 39°C kéo dài quá 3 ngày và xét nghiệm tiểu cầu giảm dưới 100 G/L thì cần nhập viện theo dõi sốt xuất huyết cảnh báo\". Mệnh đề này có ý nghĩa gì?",
      "opts": [
        "Điều kiện sốt cao > 39°C trên 3 ngày cùng tiểu cầu < 100 G/L là điều kiện đủ để chỉ định nhập viện.",
        "Bệnh nhân chỉ cần sốt cao 1 ngày là bắt buộc phải nhập viện ngay.",
        "Mọi bệnh nhân sốt xuất huyết đều phải có tiểu cầu dưới 100 G/L.",
        "Nhập viện là điều kiện đủ để bệnh nhân hạ sốt."
      ],
      "ans": 0,
      "exp": "• Điều kiện giả thiết (P ∧ Q) là điều kiện đủ để thực hiện kết luận R (nhập viện)."
    }
  ],
  "2": [
    {
      "type": "mcq",
      "q": "Cho hai tập hợp A và B. Giao của hai tập hợp A và B (kí hiệu A ∩ B) là tập hợp:",
      "opts": [
        "{x | x ∈ A và x ∈ B}",
        "{x | x ∈ A hoặc x ∈ B}",
        "{x | x ∈ A và x ∉ B}",
        "{x | x ∉ A và x ∈ B}"
      ],
      "ans": 0,
      "exp": "• Giao của hai tập hợp: A ∩ B = {x | x ∈ A và x ∈ B}."
    },
    {
      "type": "match",
      "q": "Ghép các phép toán tập hợp (Cột A) với kí hiệu toán học tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Hợp của hai tập hợp A và B",
          "b": "A. A ∪ B = {x | x ∈ A hoặc x ∈ B}"
        },
        {
          "a": "2. Giao của hai tập hợp A và B",
          "b": "B. A ∩ B = {x | x ∈ A và x ∈ B}"
        },
        {
          "a": "3. Hiệu của tập hợp A và B",
          "b": "C. A \\ B = {x | x ∈ A và x ∉ B}"
        },
        {
          "a": "4. Phần bù của B trong A (với B ⊂ A)",
          "b": "D. C_A B = A \\ B"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Hợp: x ∈ A hoặc x ∈ B.<br>• Giao: x ∈ A và x ∈ B.<br>• Hiệu: x ∈ A và x ∉ B.<br>• Phần bù: hiệu A \\ B khi B ⊂ A.",
      "colA": [
        "1. Hợp của hai tập hợp A và B",
        "2. Giao của hai tập hợp A và B",
        "3. Hiệu của tập hợp A và B",
        "4. Phần bù của B trong A (với B ⊂ A)"
      ],
      "colB": [
        "A. A ∪ B = {x | x ∈ A hoặc x ∈ B}",
        "B. A ∩ B = {x | x ∈ A và x ∈ B}",
        "C. A \\ B = {x | x ∈ A và x ∉ B}",
        "D. C_A B = A \\ B"
      ]
    },
    {
      "type": "tf",
      "q": "Cho tập hợp A = [-2; 3) và B = (1; 5]. Xét tính đúng - sai của các nhận định sau:",
      "items": [
        {
          "text": "a) Giao của hai tập hợp là A ∩ B = (1; 3).",
          "ans": true,
          "exp": "x ∈ A ∩ B ⇔ -2 ≤ x < 3 và 1 < x ≤ 5 ⇔ 1 < x < 3, tức A ∩ B = (1; 3) (Đúng)."
        },
        {
          "text": "b) Hợp của hai tập hợp là A ∪ B = [-2; 5].",
          "ans": true,
          "exp": "x ∈ A ∪ B ⇔ -2 ≤ x < 3 hoặc 1 < x ≤ 5 ⇔ -2 ≤ x ≤ 5, tức A ∪ B = [-2; 5] (Đúng)."
        },
        {
          "text": "c) Hiệu A \\ B = [-2; 1).",
          "ans": false,
          "exp": "A \\ B là x ∈ [-2; 1]. Phần tử 1 không thuộc B nên 1 thuộc A \\ B, tức [-2; 1] (Sai)."
        },
        {
          "text": "d) Tập hợp A có đúng 5 phần tử là số nguyên.",
          "ans": true,
          "exp": "Các số nguyên thuộc [-2; 3) là {-2, -1, 0, 1, 2}, gồm 5 số (Đúng)."
        }
      ],
      "stmts": [
        "a) Giao của hai tập hợp là A ∩ B = (1; 3).",
        "b) Hợp của hai tập hợp là A ∪ B = [-2; 5].",
        "c) Hiệu A \\ B = [-2; 1).",
        "d) Tập hợp A có đúng 5 phần tử là số nguyên."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ]
    },
    {
      "type": "mcq",
      "q": "Cho tập hợp X = {x ∈ ℝ | 2x² - 5x + 2 = 0}. Tập hợp X viết theo cách liệt kê phần tử là:",
      "opts": [
        "X = {1/2, 2}",
        "X = {-2, -1/2}",
        "X = {2}",
        "X = {1, 2}"
      ],
      "ans": 0,
      "exp": "• Giải 2x² - 5x + 2 = 0: nghiệm x = 2 và x = 1/2. Cả hai thuộc ℝ nên X = {1/2, 2}."
    },
    {
      "type": "drag",
      "q": "Kéo các kí hiệu khoảng, đoạn vào đúng vị trí biểu diễn tập nghiệm trên trục số:<br>• Tập các số thực x thoả mãn -3 ≤ x ≤ 4 là %%%SLOT_1%%%.<br>• Tập các số thực x thoả mãn x > 2 là %%%SLOT_2%%%.<br>• Tập các số thực x thoả mãn x ≤ 0 là %%%SLOT_3%%%.",
      "slots": [
        "[-3; 4]",
        "(2; +∞)",
        "(-∞; 0]"
      ],
      "pool": [
        "[-3; 4]",
        "(2; +∞)",
        "(-∞; 0]",
        "(-3; 4)",
        "[2; +∞)"
      ],
      "exp": "• -3 ≤ x ≤ 4 là đoạn [-3; 4].<br>• x > 2 là khoảng (2; +∞).<br>• x ≤ 0 là nửa khoảng (-∞; 0].",
      "sentence": "Kéo các kí hiệu khoảng, đoạn vào đúng vị trí biểu diễn tập nghiệm trên trục số:<br>• Tập các số thực x thoả mãn -3 ≤ x ≤ 4 là %%%SLOT_1%%%.<br>• Tập các số thực x thoả mãn x > 2 là %%%SLOT_2%%%.<br>• Tập các số thực x thoả mãn x ≤ 0 là %%%SLOT_3%%%.",
      "words": [
        "[-3; 4]",
        "(2; +∞)",
        "(-∞; 0]",
        "(-3; 4)",
        "[2; +∞)"
      ],
      "ans": [
        "[-3; 4]",
        "(2; +∞)",
        "(-∞; 0]"
      ]
    },
    {
      "type": "mcq",
      "q": "Cho A = (-∞; m + 1] và B = [3; +∞). Điều kiện cần và đủ của tham số m để A ∩ B = ∅ là:",
      "opts": [
        "m < 2",
        "m ≤ 2",
        "m > 2",
        "m ≥ 2"
      ],
      "ans": 0,
      "exp": "• A ∩ B = ∅ khi m + 1 < 3 ⇔ m < 2. Nếu m + 1 = 3 thì giao là {3}."
    },
    {
      "type": "mcq",
      "q": "Số tập con gồm 2 phần tử của tập hợp S = {a, b, c, d, e} là:",
      "opts": [
        "10",
        "5",
        "20",
        "25"
      ],
      "ans": 0,
      "exp": "• Số tập con 2 phần tử của tập 5 phần tử: C₅² = (5 · 4)/(2 · 1) = 10."
    },
    {
      "type": "mcq",
      "q": "Lớp 10A có 45 học sinh, trong đó có 25 bạn tham gia CLB Bóng đá, 20 bạn tham gia CLB Bóng rổ, và 8 bạn tham gia cả hai CLB. Hỏi có bao nhiêu bạn <b>không tham gia</b> CLB nào trong hai CLB trên?",
      "opts": [
        "8 bạn",
        "12 bạn",
        "37 bạn",
        "5 bạn"
      ],
      "ans": 0,
      "exp": "• Số bạn tham gia ít nhất một môn: n(A ∪ B) = 25 + 20 - 8 = 37 bạn.<br>• Số bạn không tham gia môn nào: 45 - 37 = 8 bạn."
    },
    {
      "type": "mcq",
      "q": "Trong cuộc điều tra thị trường smartphone, có 65% người dùng tính năng thanh toán thẻ NFC, 50% dùng quét mống mắt, và 30% dùng cả hai tính năng. Tỉ lệ người tiêu dùng dùng <b>chỉ một trong hai tính năng</b> là:",
      "opts": [
        "55%",
        "85%",
        "35%",
        "20%"
      ],
      "ans": 0,
      "exp": "• Chỉ NFC: 65% - 30% = 35%.<br>• Chỉ mống mắt: 50% - 30% = 20%.<br>• Chỉ 1 trong 2: 35% + 20% = 55%."
    },
    {
      "type": "mcq",
      "q": "Một hệ thống kiểm tra chất lượng linh kiện điện tử: lỗi A (kích thước sai lệch) chiếm 4%, lỗi B (tiếp điểm hở) chiếm 3%. Biết rằng 1% linh kiện bị cả hai lỗi. Tỉ lệ linh kiện xuất xưởng <b>đạt chuẩn</b> (không lỗi nào) là:",
      "opts": [
        "94%",
        "93%",
        "96%",
        "97%"
      ],
      "ans": 0,
      "exp": "• Bị ít nhất một lỗi: P(A ∪ B) = 4% + 3% - 1% = 6%.<br>• Đạt chuẩn hoàn hảo: 100% - 6% = 94%."
    }
  ],
  "3": [
    {
      "type": "mcq",
      "q": "Bất phương trình nào sau đây là <b>bất phương trình bậc nhất hai ẩn</b> x và y?",
      "opts": [
        "2x - 3y + 5 > 0",
        "2x² + 3y ≤ 4",
        "xy - 2x + 1 ≥ 0",
        "3x + 2y - z < 0"
      ],
      "ans": 0,
      "exp": "• Bất phương trình bậc nhất hai ẩn x, y có dạng ax + by + c > 0 (hoặc ≥, <, ≤) với a, b không đồng thời bằng 0.<br>• 2x - 3y + 5 > 0 có bậc 1 đối với cả x và y."
    },
    {
      "type": "match",
      "q": "Ghép các cặp số (x; y) (Cột A) với vị trí đối với miền nghiệm của bất phương trình 2x + y - 4 ≤ 0 (Cột B):",
      "pairs": [
        {
          "a": "1. Điểm O(0; 0)",
          "b": "A. Thuộc miền nghiệm (thỏa mãn 2(0) + 0 - 4 = -4 ≤ 0)"
        },
        {
          "a": "2. Điểm A(2; 0)",
          "b": "B. Nằm trên đường thẳng biên 2x + y - 4 = 0"
        },
        {
          "a": "3. Điểm B(3; 2)",
          "b": "C. Không thuộc miền nghiệm (2(3) + 2 - 4 = 4 > 0)"
        },
        {
          "a": "4. Điểm C(1; 1)",
          "b": "D. Thuộc miền nghiệm (2(1) + 1 - 4 = -1 ≤ 0)"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Thay toạ độ từng điểm vào biểu thức f(x, y) = 2x + y - 4 để kiểm tra dấu so với 0.",
      "colA": [
        "1. Điểm O(0; 0)",
        "2. Điểm A(2; 0)",
        "3. Điểm B(3; 2)",
        "4. Điểm C(1; 1)"
      ],
      "colB": [
        "A. Thuộc miền nghiệm (thỏa mãn 2(0) + 0 - 4 = -4 ≤ 0)",
        "B. Nằm trên đường thẳng biên 2x + y - 4 = 0",
        "C. Không thuộc miền nghiệm (2(3) + 2 - 4 = 4 > 0)",
        "D. Thuộc miền nghiệm (2(1) + 1 - 4 = -1 ≤ 0)"
      ]
    },
    {
      "type": "tf",
      "q": "Cho bất phương trình x - 2y + 4 ≥ 0 (miền nghiệm D). Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Gốc toạ độ O(0; 0) thuộc miền nghiệm D.",
          "ans": true,
          "exp": "0 - 2(0) + 4 = 4 ≥ 0 (Đúng)."
        },
        {
          "text": "b) Đường thẳng d: x - 2y + 4 = 0 là bờ của miền nghiệm D.",
          "ans": true,
          "exp": "Đường thẳng ax + by + c = 0 luôn là bờ phân chia mặt phẳng (Đúng)."
        },
        {
          "text": "c) Miền nghiệm D chứa điểm M(1; 3).",
          "ans": false,
          "exp": "1 - 2(3) + 4 = 1 - 6 + 4 = -1 < 0 (Sai, không thuộc D)."
        },
        {
          "text": "d) Điểm N(-4; 0) nằm trên bờ của miền nghiệm.",
          "ans": true,
          "exp": "-4 - 2(0) + 4 = 0 thỏa mãn phương trình bờ (Đúng)."
        }
      ],
      "stmts": [
        "a) Gốc toạ độ O(0; 0) thuộc miền nghiệm D.",
        "b) Đường thẳng d: x - 2y + 4 = 0 là bờ của miền nghiệm D.",
        "c) Miền nghiệm D chứa điểm M(1; 3).",
        "d) Điểm N(-4; 0) nằm trên bờ của miền nghiệm."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ]
    },
    {
      "type": "mcq",
      "q": "Miền nghiệm của bất phương trình x - y > 0 là nửa mặt phẳng chứa điểm nào sau đây?",
      "opts": [
        "(2; 1)",
        "(1; 2)",
        "(0; 0)",
        "(-1; 1)"
      ],
      "ans": 0,
      "exp": "• Điểm (2; 1): 2 - 1 = 1 > 0 (thỏa mãn).<br>• Điểm (1; 2): 1 - 2 = -1 < 0.<br>• Điểm (0; 0): 0 - 0 = 0 không thỏa mãn dấu >.<br>• Điểm (-1; 1): -1 - 1 = -2 < 0."
    },
    {
      "type": "drag",
      "q": "Hoàn thiện các bước biểu diễn miền nghiệm của ax + by + c ≤ 0 trên mặt phẳng toạ độ Oxy:<br>• Bước 1: Vẽ đường thẳng bờ d: %%%SLOT_1%%%.<br>• Bước 2: Lấy một điểm M(x₀; y₀) %%%SLOT_2%%% đường thẳng d và tính ax₀ + by₀ + c.<br>• Bước 3: Nếu ax₀ + by₀ + c < 0 thì nửa mặt phẳng chứa M là miền nghiệm; miền nghiệm kể cả bờ d vì có dấu %%%SLOT_3%%%.",
      "slots": [
        "ax + by + c = 0",
        "không nằm trên",
        "bằng"
      ],
      "pool": [
        "ax + by + c = 0",
        "không nằm trên",
        "bằng",
        "nằm trên",
        "lớn hơn"
      ],
      "exp": "• Vẽ bờ ax + by + c = 0.<br>• Chọn điểm thử không thuộc bờ.<br>• BPT có dấu ≤ nên nhận cả đường thẳng bờ.",
      "sentence": "Hoàn thiện các bước biểu diễn miền nghiệm của ax + by + c ≤ 0 trên mặt phẳng toạ độ Oxy:<br>• Bước 1: Vẽ đường thẳng bờ d: %%%SLOT_1%%%.<br>• Bước 2: Lấy một điểm M(x₀; y₀) %%%SLOT_2%%% đường thẳng d và tính ax₀ + by₀ + c.<br>• Bước 3: Nếu ax₀ + by₀ + c < 0 thì nửa mặt phẳng chứa M là miền nghiệm; miền nghiệm kể cả bờ d vì có dấu %%%SLOT_3%%%.",
      "words": [
        "ax + by + c = 0",
        "không nằm trên",
        "bằng",
        "nằm trên",
        "lớn hơn"
      ],
      "ans": [
        "ax + by + c = 0",
        "không nằm trên",
        "bằng"
      ]
    },
    {
      "type": "mcq",
      "q": "Cặp số (x; y) nào sau đây là một nghiệm của bất phương trình 3x - 4y + 12 < 0?",
      "opts": [
        "(-5; 0)",
        "(0; 0)",
        "(1; 1)",
        "(0; 2)"
      ],
      "ans": 0,
      "exp": "• Với (-5; 0): 3(-5) - 4(0) + 12 = -15 + 12 = -3 < 0 (thỏa mãn).<br>• (0; 0): 12 > 0.<br>• (1; 1): 11 > 0.<br>• (0; 2): 4 > 0."
    },
    {
      "type": "mcq",
      "q": "Bất phương trình nào dưới đây nhận nửa mặt phẳng bờ d: 2x - y + 1 = 0 không chứa gốc toạ độ O(0; 0) làm miền nghiệm (không kể bờ)?",
      "opts": [
        "2x - y + 1 < 0",
        "2x - y + 1 > 0",
        "2x - y + 1 ≥ 0",
        "2x - y + 1 ≤ 0"
      ],
      "ans": 0,
      "exp": "• Thay O(0; 0) vào: 2(0) - 0 + 1 = 1 > 0.<br>• Để miền nghiệm KHÔNG chứa O(0; 0) và không kể bờ, dấu bất phương trình phải là < 0: 2x - y + 1 < 0."
    },
    {
      "type": "mcq",
      "q": "Một xưởng thủ công sản xuất hai loại rổ mây: loại I cần 2 mét dây mây, loại II cần 3 mét dây mây. Biết tổng số dây mây xưởng có không quá 120 mét. Gọi x, y lần lượt là số rổ loại I và II sản xuất. Bất phương trình mô tả ràng buộc nguyên liệu là:",
      "opts": [
        "2x + 3y ≤ 120 (với x, y ≥ 0, x, y ∈ ℤ)",
        "2x + 3y ≥ 120 (với x, y ≥ 0)",
        "3x + 2y ≤ 120 (với x, y ≥ 0)",
        "2x + 3y < 120 (với x, y ≥ 0)"
      ],
      "ans": 0,
      "exp": "• Số mét dây dùng cho rổ loại I là 2x, loại II là 3y.<br>• Tổng nguyên liệu không vượt quá 120 m: 2x + 3y ≤ 120, kèm điều kiện x, y ≥ 0, x, y ∈ ℤ."
    },
    {
      "type": "mcq",
      "q": "Bạn An có 200.000 đồng đi nhà sách mua vở (giá 12.000 đ/cuốn) và bút bi (giá 5.000 đ/cây). Gọi x là số cuốn vở và y là số cây bút bi An mua. Cặp số nào sau đây <b>vượt quá</b> số tiền An có?",
      "opts": [
        "Mua 15 cuốn vở và 6 cây bút bi",
        "Mua 10 cuốn vở và 10 cây bút bi",
        "Mua 12 cuốn vở và 8 cây bút bi",
        "Mua 8 cuốn vở và 20 cây bút bi"
      ],
      "ans": 0,
      "exp": "• BPT ngân sách: 12.000x + 5.000y ≤ 200.000 ⇔ 12x + 5y ≤ 200.<br>• Với x = 15, y = 6: 12(15) + 5(6) = 180 + 30 = 210 > 200 (vượt quá ngân sách 200.000 đ)."
    },
    {
      "type": "mcq",
      "q": "Một xe tải chở hai loại kiện hàng A (nặng 40 kg/kiện) và B (nặng 25 kg/kiện). Tải trọng cho phép tối đa của xe là 1,2 tấn (1200 kg). Nếu xe đã chở 20 kiện hàng loại A thì có thể chở thêm tối đa bao nhiêu kiện hàng loại B?",
      "opts": [
        "16 kiện",
        "20 kiện",
        "15 kiện",
        "18 kiện"
      ],
      "ans": 0,
      "exp": "• Khối lượng kiện hàng A: 20 · 40 = 800 kg.<br>• Tải trọng còn lại cho kiện hàng B: 1200 - 800 = 400 kg.<br>• Số kiện B tối đa: 400 / 25 = 16 kiện."
    }
  ],
  "4": [
    {
      "type": "mcq",
      "q": "Hệ bất phương trình nào sau đây là <b>hệ bất phương trình bậc nhất hai ẩn</b>?",
      "opts": [
        "{x + y - 2 ≤ 0; 2x - 3y + 1 > 0}",
        "{x² + y ≤ 1; x - y ≥ 0}",
        "{x + y - z > 0; 2x - y ≤ 1}",
        "{xy + 1 ≤ 0; x - y > 2}"
      ],
      "ans": 0,
      "exp": "• Hệ BPT bậc nhất hai ẩn gồm các bất phương trình bậc nhất đối với hai ẩn x và y.<br>• {x + y - 2 ≤ 0; 2x - 3y + 1 > 0} là hệ bậc nhất 2 ẩn."
    },
    {
      "type": "match",
      "q": "Ghép các khái niệm trong bài toán quy hoạch tuyến tính (Cột A) với định nghĩa tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Miền nghiệm của hệ BPT",
          "b": "A. Miền đa giác giao của tất cả các nửa mặt phẳng nghiệm"
        },
        {
          "a": "2. Hàm mục tiêu F(x, y) = ax + by",
          "b": "B. Biểu thức cần tìm giá trị lớn nhất hoặc nhỏ nhất"
        },
        {
          "a": "3. Điểm tối ưu của hàm mục tiêu",
          "b": "C. Luôn đạt được tại một trong các đỉnh của miền đa giác nghiệm"
        },
        {
          "a": "4. Các đỉnh của miền đa giác",
          "b": "D. Giao điểm của các cặp đường thẳng bờ tương ứng"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Định lý quy hoạch tuyến tính: Giá trị lớn nhất hoặc nhỏ nhất của hàm F(x, y) = ax + by trên miền đa giác lồi luôn đạt tại ít nhất một đỉnh của đa giác đó.",
      "colA": [
        "1. Miền nghiệm của hệ BPT",
        "2. Hàm mục tiêu F(x, y) = ax + by",
        "3. Điểm tối ưu của hàm mục tiêu",
        "4. Các đỉnh của miền đa giác"
      ],
      "colB": [
        "A. Miền đa giác giao của tất cả các nửa mặt phẳng nghiệm",
        "B. Biểu thức cần tìm giá trị lớn nhất hoặc nhỏ nhất",
        "C. Luôn đạt được tại một trong các đỉnh của miền đa giác nghiệm",
        "D. Giao điểm của các cặp đường thẳng bờ tương ứng"
      ]
    },
    {
      "type": "tf",
      "q": "Cho hệ BPT: {x ≥ 0; y ≥ 0; x + y ≤ 4; 2x + y ≤ 6}. Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Gốc toạ độ O(0; 0) thuộc miền nghiệm của hệ.",
          "ans": true,
          "exp": "O(0; 0) thỏa mãn cả 4 BPT (Đúng)."
        },
        {
          "text": "b) Điểm M(3; 2) thuộc miền nghiệm của hệ.",
          "ans": false,
          "exp": "Thay vào BPT x + y ≤ 4: 3 + 2 = 5 > 4 (Sai, không thuộc)."
        },
        {
          "text": "c) Miền nghiệm của hệ là một miền tứ giác lồi.",
          "ans": true,
          "exp": "Miền nghiệm giới hạn bởi các đỉnh O(0; 0), A(3; 0), B(2; 2), C(0; 4) là tứ giác lồi (Đúng)."
        },
        {
          "text": "d) Điểm B(2; 2) là giao điểm của hai đường thẳng x + y = 4 và 2x + y = 6.",
          "ans": true,
          "exp": "Giải hệ: (2x + y) - (x + y) = 6 - 4 ⇒ x = 2, y = 2 (Đúng)."
        }
      ],
      "stmts": [
        "a) Gốc toạ độ O(0; 0) thuộc miền nghiệm của hệ.",
        "b) Điểm M(3; 2) thuộc miền nghiệm của hệ.",
        "c) Miền nghiệm của hệ là một miền tứ giác lồi.",
        "d) Điểm B(2; 2) là giao điểm của hai đường thẳng x + y = 4 và 2x + y = 6."
      ],
      "ans": [
        true,
        false,
        true,
        true
      ]
    },
    {
      "type": "mcq",
      "q": "Cho miền nghiệm của hệ BPT là đa giác có các đỉnh O(0; 0), A(4; 0), B(3; 2), C(0; 3). Giá trị lớn nhất của biểu thức F(x, y) = 3x + 2y trên miền nghiệm này là:",
      "opts": [
        "13 (tại B(3; 2))",
        "12 (tại A(4; 0))",
        "6 (tại C(0; 3))",
        "0 (tại O(0; 0))"
      ],
      "ans": 0,
      "exp": "• Tính giá trị F(x, y) = 3x + 2y tại 4 đỉnh:<br>- F(O) = 0<br>- F(A) = 3(4) + 2(0) = 12<br>- F(B) = 3(3) + 2(2) = 9 + 4 = 13<br>- F(C) = 3(0) + 2(3) = 6<br>• Giá trị lớn nhất là 13 đạt tại điểm B(3; 2)."
    },
    {
      "type": "drag",
      "q": "Kéo các toạ độ đỉnh vào đúng vị trí của miền nghiệm hệ: {x ≥ 0; y ≥ 0; x + y ≤ 3}:<br>• Giao điểm với trục hoành Ox là %%%SLOT_1%%%.<br>• Giao điểm với trục tung Oy là %%%SLOT_2%%%.<br>• Điểm gốc toạ độ là %%%SLOT_3%%%.",
      "slots": [
        "(3; 0)",
        "(0; 3)",
        "(0; 0)"
      ],
      "pool": [
        "(3; 0)",
        "(0; 3)",
        "(0; 0)",
        "(3; 3)",
        "(1; 2)"
      ],
      "exp": "• Trục Ox (y = 0) giao với x + y = 3 tại (3; 0).<br>• Trục Oy (x = 0) giao với x + y = 3 tại (0; 3).<br>• Gốc toạ độ là (0; 0).",
      "sentence": "Kéo các toạ độ đỉnh vào đúng vị trí của miền nghiệm hệ: {x ≥ 0; y ≥ 0; x + y ≤ 3}:<br>• Giao điểm với trục hoành Ox là %%%SLOT_1%%%.<br>• Giao điểm với trục tung Oy là %%%SLOT_2%%%.<br>• Điểm gốc toạ độ là %%%SLOT_3%%%.",
      "words": [
        "(3; 0)",
        "(0; 3)",
        "(0; 0)",
        "(3; 3)",
        "(1; 2)"
      ],
      "ans": [
        "(3; 0)",
        "(0; 3)",
        "(0; 0)"
      ]
    },
    {
      "type": "mcq",
      "q": "Tìm giá trị nhỏ nhất của F(x, y) = 2x - y trên miền tứ giác có 4 đỉnh: (0; 1), (2; 0), (3; 3), (1; 4):",
      "opts": [
        "-2 (tại (1; 4))",
        "-1 (tại (0; 1))",
        "4 (tại (2; 0))",
        "3 (tại (3; 3))"
      ],
      "ans": 0,
      "exp": "• F(0, 1) = -1<br>• F(2, 0) = 4<br>• F(3, 3) = 2(3) - 3 = 3<br>• F(1, 4) = 2(1) - 4 = -2 (giá trị nhỏ nhất)."
    },
    {
      "type": "mcq",
      "q": "Cặp số (x; y) nào sau đây là nghiệm của hệ: {2x + 3y ≤ 12; x - y ≥ 1; x ≥ 0; y ≥ 0}?",
      "opts": [
        "(2; 1)",
        "(1; 2)",
        "(4; 2)",
        "(0; 3)"
      ],
      "ans": 0,
      "exp": "• Kiểm tra (2; 1):<br>2(2) + 3(1) = 7 ≤ 12 (đúng); 2 - 1 = 1 ≥ 1 (đúng); 2 ≥ 0, 1 ≥ 0 (đúng).<br>• (1; 2) có x - y = -1 < 1 (sai)."
    },
    {
      "type": "mcq",
      "q": "Một công ty sản xuất hai loại nước ngọt A và B. Mỗi thùng loại A lãi 40.000 đ, loại B lãi 30.000 đ. Biết lượng đường và hương liệu khống chế miền sản xuất trong tứ giác có các đỉnh (0; 0), (50; 0), (40; 30), (0; 45). Lợi nhuận tối đa công ty có thể đạt được là:",
      "opts": [
        "2.500.000 đồng",
        "2.000.000 đồng",
        "1.350.000 đồng",
        "2.200.000 đồng"
      ],
      "ans": 0,
      "exp": "• Hàm lợi nhuận F(x, y) = 40x + 30y (nghìn đồng).<br>• Tại (0; 0): F = 0.<br>• Tại (50; 0): F = 40(50) = 2.000 nghìn = 2.000.000 đ.<br>• Tại (40; 30): F = 40(40) + 30(30) = 1.600 + 900 = 2.500 nghìn = 2.500.000 đ.<br>• Tại (0; 45): F = 30(45) = 1.350 nghìn = 1.350.000 đ.<br>• Lợi nhuận tối đa là 2.500.000 đồng tại phương án sản xuất (40 thùng A; 30 thùng B)."
    },
    {
      "type": "mcq",
      "q": "Một bác nông dân có 10 ha đất trồng cam và bưởi. Vốn đầu tư cho 1 ha cam là 20 triệu đ, 1 ha bưởi là 30 triệu đ. Tổng vốn tối đa là 240 triệu đ. Hệ bất phương trình mô tả diện tích x (ha cam) và y (ha bưởi) là:",
      "opts": [
        "{x + y ≤ 10; 2x + 3y ≤ 24; x ≥ 0; y ≥ 0}",
        "{x + y ≤ 10; 3x + 2y ≤ 24; x ≥ 0; y ≥ 0}",
        "{x + y ≥ 10; 2x + 3y ≤ 24; x ≥ 0; y ≥ 0}",
        "{x + y ≤ 10; 20x + 30y ≥ 240; x ≥ 0; y ≥ 0}"
      ],
      "ans": 0,
      "exp": "• Ràng buộc quỹ đất: x + y ≤ 10 (ha).<br>• Ràng buộc vốn: 20x + 30y ≤ 240 ⇔ 2x + 3y ≤ 24 (triệu đ).<br>• Điều kiện không âm: x ≥ 0, y ≥ 0."
    },
    {
      "type": "mcq",
      "q": "Một xưởng gỗ gia công bàn (x) và ghế (y). Mỗi chiếc bàn cần 3 giờ cưa và 1 giờ chà nhám; mỗi ghế cần 1 giờ cưa và 1 giờ chà nhám. Tổng quỹ thời gian máy cưa không quá 9 giờ/ngày, máy nhám không quá 5 giờ/ngày. Số bàn và ghế tối đa xưởng nên làm để đạt lợi nhuận cao nhất biết mỗi bàn lãi 500k, mỗi ghế lãi 300k:",
      "opts": [
        "2 bàn và 3 ghế (Lãi 1,9 triệu đồng)",
        "3 bàn và 0 ghế (Lãi 1,5 triệu đồng)",
        "0 bàn và 5 ghế (Lãi 1,5 triệu đồng)",
        "1 bàn và 4 ghế (Lãi 1,7 triệu đồng)"
      ],
      "ans": 0,
      "exp": "• Hệ ràng buộc: {3x + y ≤ 9; x + y ≤ 5; x ≥ 0; y ≥ 0}.<br>• Giao điểm của 3x + y = 9 và x + y = 5: 2x = 4 ⇒ x = 2, y = 3.<br>• Các đỉnh miền nghiệm: (0; 0), (3; 0), (2; 3), (0; 5).<br>• F(x, y) = 500x + 300y:<br>- F(3, 0) = 1.500k<br>- F(0, 5) = 1.500k<br>- F(2, 3) = 500(2) + 300(3) = 1.900k = 1,9 triệu đồng (tối ưu nhất)."
    }
  ],
  "5": [
    {
      "type": "mcq",
      "q": "Trên nửa đường tròn đơn vị, toạ độ của điểm M ứng với góc α (0° ≤ α ≤ 180°) là:",
      "opts": [
        "M(cos α; sin α)",
        "M(sin α; cos α)",
        "M(tan α; cot α)",
        "M(cos α; -sin α)"
      ],
      "ans": 0,
      "exp": "• Định nghĩa trên nửa đường tròn đơn vị: hoành độ của điểm M là cos α, tung độ của điểm M là sin α ⇒ M(cos α; sin α)."
    },
    {
      "type": "match",
      "q": "Ghép các góc bù nhau (Cột A) với quan hệ lượng giác tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. sin(180° - α)",
          "b": "A. = sin α"
        },
        {
          "a": "2. cos(180° - α)",
          "b": "B. = -cos α"
        },
        {
          "a": "3. tan(180° - α) (với α ≠ 90°)",
          "b": "C. = -tan α"
        },
        {
          "a": "4. cot(180° - α) (với 0° < α < 180°)",
          "b": "D. = -cot α"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Hai góc bù nhau: sin bù (sin bằng nhau, các giá trị cos, tan, cot đối nhau).",
      "colA": [
        "1. sin(180° - α)",
        "2. cos(180° - α)",
        "3. tan(180° - α) (với α ≠ 90°)",
        "4. cot(180° - α) (với 0° < α < 180°)"
      ],
      "colB": [
        "A. = sin α",
        "B. = -cos α",
        "C. = -tan α",
        "D. = -cot α"
      ]
    },
    {
      "type": "tf",
      "q": "Xét tính đúng - sai của các khẳng định lượng giác với góc tù α (90° < α < 180°):",
      "items": [
        {
          "text": "a) sin α > 0.",
          "ans": true,
          "exp": "Với mọi 0° < α < 180°, tung độ điểm M luôn dương nên sin α > 0 (Đúng)."
        },
        {
          "text": "b) cos α > 0.",
          "ans": false,
          "exp": "Khi 90° < α < 180°, điểm M có hoành độ âm nên cos α < 0 (Sai)."
        },
        {
          "text": "c) tan α < 0.",
          "ans": true,
          "exp": "tan α = sin α / cos α; tử dương mẫu âm nên tan α < 0 (Đúng)."
        },
        {
          "text": "d) sin² α + cos² α = 1.",
          "ans": true,
          "exp": "Hệ thức cơ bản sin² α + cos² α = 1 luôn đúng với mọi góc α (Đúng)."
        }
      ],
      "stmts": [
        "a) sin α > 0.",
        "b) cos α > 0.",
        "c) tan α < 0.",
        "d) sin² α + cos² α = 1."
      ],
      "ans": [
        true,
        false,
        true,
        true
      ]
    },
    {
      "type": "mcq",
      "q": "Giá trị của biểu thức P = sin 30° + cos 60° - tan 45° là:",
      "opts": [
        "0",
        "1",
        "1/2",
        "-1"
      ],
      "ans": 0,
      "exp": "• sin 30° = 1/2.<br>• cos 60° = 1/2.<br>• tan 45° = 1.<br>• P = 1/2 + 1/2 - 1 = 0."
    },
    {
      "type": "drag",
      "q": "Kéo các giá trị lượng giác chính xác vào chỗ trống:<br>• cos 120° = %%%SLOT_1%%%.<br>• sin 135° = %%%SLOT_2%%%.<br>• cos 0° = %%%SLOT_3%%%.",
      "slots": [
        "-1/2",
        "√2/2",
        "1"
      ],
      "pool": [
        "-1/2",
        "√2/2",
        "1",
        "1/2",
        "-√2/2"
      ],
      "exp": "• cos 120° = -cos 60° = -1/2.<br>• sin 135° = sin 45° = √2/2.<br>• cos 0° = 1.",
      "sentence": "Kéo các giá trị lượng giác chính xác vào chỗ trống:<br>• cos 120° = %%%SLOT_1%%%.<br>• sin 135° = %%%SLOT_2%%%.<br>• cos 0° = %%%SLOT_3%%%.",
      "words": [
        "-1/2",
        "√2/2",
        "1",
        "1/2",
        "-√2/2"
      ],
      "ans": [
        "-1/2",
        "√2/2",
        "1"
      ]
    },
    {
      "type": "mcq",
      "q": "Cho biết cos α = -3/5 với 90° < α < 180°. Giá trị của sin α là:",
      "opts": [
        "4/5",
        "-4/5",
        "16/25",
        "2/5"
      ],
      "ans": 0,
      "exp": "• Áp dụng sin² α + cos² α = 1 ⇒ sin² α = 1 - (-3/5)² = 1 - 9/25 = 16/25.<br>• Do 90° < α < 180° nên sin α > 0 ⇒ sin α = √(16/25) = 4/5."
    },
    {
      "type": "mcq",
      "q": "Tính giá trị của tan 150°:",
      "opts": [
        "-√3/3",
        "√3/3",
        "-√3",
        "√3"
      ],
      "ans": 0,
      "exp": "• tan 150° = tan(180° - 30°) = -tan 30° = -1/√3 = -√3/3."
    },
    {
      "type": "mcq",
      "q": "Một sườn đồi dốc tạo với phương nằm ngang một góc α = 30°. Một người đi bộ lên dốc quãng đường 400 m. Độ cao thẳng đứng h mà người đó đạt được so với chân dốc là:",
      "opts": [
        "200 m",
        "346 m",
        "150 m",
        "250 m"
      ],
      "ans": 0,
      "exp": "• Tam giác vuông có cạnh huyền L = 400 m, góc nghiêng α = 30°.<br>• Chiều cao: h = L · sin α = 400 · sin 30° = 400 · (1/2) = 200 m."
    },
    {
      "type": "mcq",
      "q": "Một tấm pin năng lượng mặt trời lắp trên mái nhà nghiêng một góc 45° so với phương ngang. Vào buổi trưa, tia nắng mặt trời chiếu thẳng đứng. Nếu diện tích tấm pin là 2 m² thì diện tích bóng của tấm pin in trên mặt phẳng nằm ngang là:",
      "opts": [
        "√2 m² (≈ 1,41 m²)",
        "2 m²",
        "1 m²",
        "2√2 m²"
      ],
      "ans": 0,
      "exp": "• Công thức chiếu diện tích: S_bóng = S · cos α = 2 · cos 45° = 2 · (√2/2) = √2 m² ≈ 1,41 m²."
    },
    {
      "type": "mcq",
      "q": "Lực kéo F = 150 N tác dụng lên một toa xe trượt theo phương hợp với hướng chuyển động một góc α = 60°. Độ lớn thành phần lực hữu ích sinh công kéo xe di chuyển theo phương ngang là:",
      "opts": [
        "75 N",
        "129,9 N",
        "150 N",
        "100 N"
      ],
      "ans": 0,
      "exp": "• Thành phần lực theo phương chuyển động nằm ngang:<br>F_kéo = F · cos α = 150 · cos 60° = 150 · 0,5 = 75 N."
    }
  ],
  "6": [
    {
      "type": "mcq",
      "q": "Trong tam giác ABC với các cạnh a, b, c và các góc A, B, C tương ứng. Khẳng định nào sau đây là <b>Định lí Cosin</b>?",
      "opts": [
        "a² = b² + c² - 2bc · cos A",
        "a² = b² + c² + 2bc · cos A",
        "a² = b² + c² - bc · cos A",
        "a² = b² + c² - 2bc · sin A"
      ],
      "ans": 0,
      "exp": "• Định lí Cosin (SGK Toán 10): a² = b² + c² - 2bc · cos A."
    },
    {
      "type": "match",
      "q": "Ghép các công thức tính diện tích tam giác ABC (Cột A) với biểu thức tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Theo cạnh đáy và đường cao tương ứng",
          "b": "A. S = (1/2) · a · h_a"
        },
        {
          "a": "2. Theo hai cạnh và sin góc xen giữa",
          "b": "B. S = (1/2) · b · c · sin A"
        },
        {
          "a": "3. Theo 3 cạnh và bán kính đường tròn ngoại tiếp R",
          "b": "C. S = (abc) / (4R)"
        },
        {
          "a": "4. Theo nửa chu vi p và bán kính nội tiếp r",
          "b": "D. S = p · r"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Các công thức diện tích tam giác: S = 1/2 a·h = 1/2 bc·sin A = abc/(4R) = p·r = √[p(p-a)(p-b)(p-c)].",
      "colA": [
        "1. Theo cạnh đáy và đường cao tương ứng",
        "2. Theo hai cạnh và sin góc xen giữa",
        "3. Theo 3 cạnh và bán kính đường tròn ngoại tiếp R",
        "4. Theo nửa chu vi p và bán kính nội tiếp r"
      ],
      "colB": [
        "A. S = (1/2) · a · h_a",
        "B. S = (1/2) · b · c · sin A",
        "C. S = (abc) / (4R)",
        "D. S = p · r"
      ]
    },
    {
      "type": "tf",
      "q": "Cho tam giác ABC có a = 6, b = 8, c = 10. Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Tam giác ABC là tam giác vuông tại A.",
          "ans": false,
          "exp": "Ta có 6² + 8² = 36 + 64 = 100 = 10² nên tam giác vuông tại C (cạnh huyền c = 10, góc C = 90°) (Sai)."
        },
        {
          "text": "b) Diện tích tam giác ABC là S = 24.",
          "ans": true,
          "exp": "Tam giác vuông có hai cạnh góc vuông a = 6, b = 8: S = (1/2) · 6 · 8 = 24 (Đúng)."
        },
        {
          "text": "c) Bán kính đường tròn ngoại tiếp là R = 5.",
          "ans": true,
          "exp": "Trong tam giác vuông, tâm ngoại tiếp là trung điểm cạnh huyền: R = c / 2 = 10 / 2 = 5 (Đúng)."
        },
        {
          "text": "d) Bán kính đường tròn nội tiếp r = 2.",
          "ans": true,
          "exp": "Nửa chu vi p = (6 + 8 + 10)/2 = 12. Bán kính nội tiếp r = S / p = 24 / 12 = 2 (Đúng)."
        }
      ],
      "stmts": [
        "a) Tam giác ABC là tam giác vuông tại A.",
        "b) Diện tích tam giác ABC là S = 24.",
        "c) Bán kính đường tròn ngoại tiếp là R = 5.",
        "d) Bán kính đường tròn nội tiếp r = 2."
      ],
      "ans": [
        false,
        true,
        true,
        true
      ]
    },
    {
      "type": "mcq",
      "q": "Cho tam giác ABC có b = 7, c = 5, góc A = 60°. Độ dài cạnh a là:",
      "opts": [
        "√39",
        "39",
        "√49",
        "√19"
      ],
      "ans": 0,
      "exp": "• Áp dụng định lí Cosin: a² = b² + c² - 2bc · cos A<br>a² = 7² + 5² - 2 · 7 · 5 · cos 60° = 49 + 25 - 70 · (1/2) = 74 - 35 = 39.<br>⇒ a = √39."
    },
    {
      "type": "drag",
      "q": "Điền vào chỗ trống công thức Định lí Sin trong tam giác ABC:<br>• Tỉ số giữa mỗi cạnh và sin của góc đối diện luôn bằng đường kính đường tròn ngoại tiếp:<br><span class=\"fraction\"><span class=\"numerator\">a</span><span class=\"denominator\">sin A</span></span> = <span class=\"fraction\"><span class=\"numerator\">b</span><span class=\"denominator\">%%%SLOT_1%%%</span></span> = <span class=\"fraction\"><span class=\"numerator\">c</span><span class=\"denominator\">%%%SLOT_2%%%</span></span> = %%%SLOT_3%%%",
      "slots": [
        "sin B",
        "sin C",
        "2R"
      ],
      "pool": [
        "sin B",
        "sin C",
        "2R",
        "R",
        "cos B"
      ],
      "exp": "• Định lí Sin: a/sin A = b/sin B = c/sin C = 2R.",
      "sentence": "Điền vào chỗ trống công thức Định lí Sin trong tam giác ABC:<br>• Tỉ số giữa mỗi cạnh và sin của góc đối diện luôn bằng đường kính đường tròn ngoại tiếp:<br><span class=\"fraction\"><span class=\"numerator\">a</span><span class=\"denominator\">sin A</span></span> = <span class=\"fraction\"><span class=\"numerator\">b</span><span class=\"denominator\">%%%SLOT_1%%%</span></span> = <span class=\"fraction\"><span class=\"numerator\">c</span><span class=\"denominator\">%%%SLOT_2%%%</span></span> = %%%SLOT_3%%%",
      "words": [
        "sin B",
        "sin C",
        "2R",
        "R",
        "cos B"
      ],
      "ans": [
        "sin B",
        "sin C",
        "2R"
      ]
    },
    {
      "type": "mcq",
      "q": "Tam giác ABC có a = 10 và góc A = 30°. Bán kính đường tròn ngoại tiếp R của tam giác là:",
      "opts": [
        "10",
        "5",
        "20",
        "15"
      ],
      "ans": 0,
      "exp": "• Theo định lí Sin: 2R = a / sin A = 10 / sin 30° = 10 / 0,5 = 20.<br>⇒ R = 20 / 2 = 10."
    },
    {
      "type": "mcq",
      "q": "Tam giác ABC có 3 cạnh a = 4, b = 5, c = 7. Nửa chu vi p và diện tích S theo công thức Heron là:",
      "opts": [
        "p = 8, S = 4√6",
        "p = 16, S = 8√6",
        "p = 8, S = 12",
        "p = 7, S = 4√5"
      ],
      "ans": 0,
      "exp": "• p = (4 + 5 + 7)/2 = 8.<br>• S = √[8 · (8 - 4) · (8 - 5) · (8 - 7)] = √[8 · 4 · 3 · 1] = √96 = 4√6."
    },
    {
      "type": "mcq",
      "q": "Để đo khoảng cách từ một vị trí A trên bờ đến một con tàu C ngoài khơi, kĩ sư đo một đoạn mốc AB = 200 m trên bờ, đo được các góc ∠CAB = 70° và ∠CBA = 65°. Khoảng cách AC từ bờ tới tàu xấp xỉ là:",
      "opts": [
        "255,8 m",
        "275,3 m",
        "180,5 m",
        "310,2 m"
      ],
      "ans": 0,
      "exp": "• Trong tam giác ABC: góc C = 180° - (70° + 65°) = 45°.<br>• Áp dụng định lí Sin: AC / sin B = AB / sin C<br>⇒ AC = (AB · sin 65°) / sin 45° = (200 · 0,9063) / 0,7071 ≈ 255,8 m."
    },
    {
      "type": "mcq",
      "q": "Một ngọn hải đăng cao 80 m so với mực nước biển. Từ đỉnh ngọn hải đăng, người quan sát nhìn thấy một chiếc thuyền cứu hộ dưới góc hạ 22° so với phương ngang. Khoảng cách từ chân hải đăng đến con thuyền là:",
      "opts": [
        "198 m",
        "180 m",
        "213 m",
        "86 m"
      ],
      "ans": 0,
      "exp": "• Góc hạ 22° bằng góc nâng nhìn từ thuyền lên đỉnh hải đăng.<br>• Tam giác vuông tại chân hải đăng: d = h / tan 22° = 80 / tan 22° = 80 / 0,4040 ≈ 198 m."
    },
    {
      "type": "mcq",
      "q": "Hai người cùng xuất phát từ ngã ba đường O đi theo hai hướng tạo với nhau một góc 60°. Người thứ nhất đi với vận tốc 12 km/h, người thứ hai đi với vận tốc 16 km/h. Sau 1,5 giờ, khoảng cách giữa hai người là:",
      "opts": [
        "21,8 km",
        "25,0 km",
        "30,0 km",
        "18,5 km"
      ],
      "ans": 0,
      "exp": "• Quãng đường người 1 đi: OA = 12 · 1,5 = 18 km.<br>• Quãng đường người 2 đi: OB = 16 · 1,5 = 24 km.<br>• Áp dụng định lí Cosin cho tam giác OAB: AB² = OA² + OB² - 2 · OA · OB · cos 60°<br>AB² = 18² + 24² - 2 · 18 · 24 · 0,5 = 324 + 576 - 432 = 468.<br>⇒ AB = √468 ≈ 21,63 km (khoảng 21,8 km)."
    }
  ],
  "7": [
    {
      "type": "mcq",
      "q": "Vectơ là một đoạn thẳng có:",
      "opts": [
        "hướng (xác định rõ điểm đầu và điểm cuối)",
        "độ dài không đổi",
        "phương thẳng đứng",
        "hai đầu mút trùng nhau"
      ],
      "ans": 0,
      "exp": "• Định nghĩa vectơ (SGK Toán 10): Vectơ là một đoạn thẳng có hướng, nghĩa là trong hai điểm mút đã chỉ rõ điểm nào là điểm đầu, điểm nào là điểm cuối."
    },
    {
      "type": "match",
      "q": "Ghép các khái niệm về vectơ (Cột A) với định nghĩa tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Giá của vectơ",
          "b": "A. Đường thẳng đi qua điểm đầu và điểm cuối của vectơ"
        },
        {
          "a": "2. Hai vectơ cùng phương",
          "b": "B. Giá của chúng song song hoặc trùng nhau"
        },
        {
          "a": "3. Hai vectơ bằng nhau",
          "b": "C. Cùng hướng và có cùng độ dài"
        },
        {
          "a": "4. Vectơ-không (kí hiệu 0⃗)",
          "b": "D. Có điểm đầu và điểm cuối trùng nhau, độ dài bằng 0"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Giá: đường thẳng chứa vectơ.<br>• Cùng phương: giá song song hoặc trùng.<br>• Bằng nhau: cùng hướng + cùng độ dài.<br>• Vectơ-không: độ dài 0, cùng hướng với mọi vectơ.",
      "colA": [
        "1. Giá của vectơ",
        "2. Hai vectơ cùng phương",
        "3. Hai vectơ bằng nhau",
        "4. Vectơ-không (kí hiệu 0⃗)"
      ],
      "colB": [
        "A. Đường thẳng đi qua điểm đầu và điểm cuối của vectơ",
        "B. Giá của chúng song song hoặc trùng nhau",
        "C. Cùng hướng và có cùng độ dài",
        "D. Có điểm đầu và điểm cuối trùng nhau, độ dài bằng 0"
      ]
    },
    {
      "type": "tf",
      "q": "Cho hình bình hành ABCD tâm O. Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Vectơ AB⃗ và DC⃗ là hai vectơ bằng nhau.",
          "ans": true,
          "exp": "AB và DC song song, cùng chiều và AB = DC nên AB⃗ = DC⃗ (Đúng)."
        },
        {
          "text": "b) Vectơ AD⃗ và CB⃗ là hai vectơ bằng nhau.",
          "ans": false,
          "exp": "AD và CB có hướng ngược nhau nên AD⃗ = -CB⃗ = BC⃗ (Sai)."
        },
        {
          "text": "c) Vectơ AO⃗ và OC⃗ là hai vectơ bằng nhau.",
          "ans": true,
          "exp": "O là trung điểm AC nên AO = OC và cùng hướng A → C, tức AO⃗ = OC⃗ (Đúng)."
        },
        {
          "text": "d) Độ dài |AC⃗| bằng độ dài |BD⃗|.",
          "ans": false,
          "exp": "Trong hình bình hành nói chung, độ dài 2 đường chéo không bằng nhau (Sai)."
        }
      ],
      "stmts": [
        "a) Vectơ AB⃗ và DC⃗ là hai vectơ bằng nhau.",
        "b) Vectơ AD⃗ và CB⃗ là hai vectơ bằng nhau.",
        "c) Vectơ AO⃗ và OC⃗ là hai vectơ bằng nhau.",
        "d) Độ dài |AC⃗| bằng độ dài |BD⃗|."
      ],
      "ans": [
        true,
        false,
        true,
        false
      ]
    },
    {
      "type": "mcq",
      "q": "Cho hình vuông ABCD cạnh a. Độ dài của vectơ AC⃗ là:",
      "opts": [
        "a√2",
        "a",
        "2a",
        "a√3"
      ],
      "ans": 0,
      "exp": "• Độ dài vectơ AC⃗ chính là độ dài đoạn thẳng AC.<br>• Trong hình vuông cạnh a, đường chéo AC = √(a² + a²) = a√2."
    },
    {
      "type": "drag",
      "q": "Điền vào chỗ trống định nghĩa về hướng của hai vectơ:<br>• Hai vectơ cùng phương thì hoặc %%%SLOT_1%%% hoặc %%%SLOT_2%%%.<br>• Vectơ-không được coi là cùng phương, cùng hướng với %%%SLOT_3%%%.",
      "slots": [
        "cùng hướng",
        "ngược hướng",
        "mọi vectơ"
      ],
      "pool": [
        "cùng hướng",
        "ngược hướng",
        "mọi vectơ",
        "vuông góc",
        "không có hướng"
      ],
      "exp": "• Hai vectơ cùng phương có thể cùng hướng hoặc ngược hướng.<br>• Vectơ 0⃗ quy ước cùng phương cùng hướng với mọi vectơ.",
      "sentence": "Điền vào chỗ trống định nghĩa về hướng của hai vectơ:<br>• Hai vectơ cùng phương thì hoặc %%%SLOT_1%%% hoặc %%%SLOT_2%%%.<br>• Vectơ-không được coi là cùng phương, cùng hướng với %%%SLOT_3%%%.",
      "words": [
        "cùng hướng",
        "ngược hướng",
        "mọi vectơ",
        "vuông góc",
        "không có hướng"
      ],
      "ans": [
        "cùng hướng",
        "ngược hướng",
        "mọi vectơ"
      ]
    },
    {
      "type": "mcq",
      "q": "Cho tam giác ABC đều cạnh 4 cm. Độ dài vectơ AB⃗ là:",
      "opts": [
        "4 cm",
        "2 cm",
        "4√3 cm",
        "2√3 cm"
      ],
      "ans": 0,
      "exp": "• |AB⃗| = AB = 4 cm."
    },
    {
      "type": "mcq",
      "q": "Cho 3 điểm phân biệt A, B, C thẳng hàng. Điều kiện cần và đủ để hai vectơ AB⃗ và AC⃗ cùng hướng là:",
      "opts": [
        "Điểm A nằm ngoài đoạn thẳng BC và gần B hơn C (hoặc B nằm giữa A và C)",
        "Điểm A nằm giữa hai điểm B và C",
        "Điểm B là trung điểm của AC",
        "Điểm C là trung điểm của AB"
      ],
      "ans": 0,
      "exp": "• AB⃗ và AC⃗ cùng hướng khi và chỉ khi hai tia AB và AC trùng nhau, tức A không nằm giữa B và C."
    },
    {
      "type": "mcq",
      "q": "Một máy bay chở khách đang bay theo hướng Tây sang Đông với vận tốc 700 km/h. Vectơ vận tốc v⃗ của máy bay được biểu diễn bằng một mũi tên:",
      "opts": [
        "Nằm ngang, hướng từ trái sang phải, có độ dài biểu diễn 700 km/h",
        "Thẳng đứng hướng lên trên",
        "Nằm ngang, hướng từ phải sang trái",
        "Nghiêng 45° so với phương ngang"
      ],
      "ans": 0,
      "exp": "• Trên bản đồ quy ước: Bắc ở trên, Nam ở dưới, Tây ở bên trái, Đông ở bên phải.<br>• Bay từ Tây sang Đông ứng với hướng từ trái sang phải, độ lớn 700 km/h."
    },
    {
      "type": "mcq",
      "q": "Một con thuyền chuyển động trên mặt hồ phẳng lặng với vận tốc không đổi v⃗ = 15 km/h theo hướng Đông Bắc (hợp với hướng Đông góc 45°). Phát biểu nào sau đây là đúng về vận tốc của thuyền?",
      "opts": [
        "Vận tốc là một đại lượng vectơ xác định bởi cả hướng di chuyển (Đông Bắc) và tốc độ (15 km/h)",
        "Vận tốc thuyền chỉ là con số 15 km/h không cần quan tâm đến hướng",
        "Thuyền đang di chuyển theo hướng chính Bắc",
        "Độ dời của thuyền sau 1 giờ là 30 km"
      ],
      "ans": 0,
      "exp": "• Vận tốc là đại lượng vectơ có độ lớn (tốc độ 15 km/h) và hướng chuyển động (hướng Đông Bắc)."
    },
    {
      "type": "mcq",
      "q": "Một quả bóng bàn rơi tự do xuống đất rồi nảy ngược thẳng đứng lên trên với cùng độ lớn vận tốc 4 m/s. Gọi v₁⃗ là vectơ vận tốc ngay trước khi chạm đất và v₂⃗ là vectơ vận tốc ngay sau khi bật lên. Mối quan hệ giữa hai vectơ là:",
      "opts": [
        "v₂⃗ = -v₁⃗ (hai vectơ đối nhau)",
        "v₂⃗ = v₁⃗ (hai vectơ bằng nhau)",
        "v₂⃗ = 2v₁⃗",
        "v₂⃗ vuông góc với v₁⃗"
      ],
      "ans": 0,
      "exp": "• v₁⃗ hướng thẳng đứng xuống dưới, v₂⃗ hướng thẳng đứng lên trên.<br>• Cùng độ lớn 4 m/s và ngược hướng nên v₂⃗ = -v₁⃗ (hai vectơ đối nhau)."
    }
  ],
  "8": [
    {
      "type": "mcq",
      "q": "Quy tắc 3 điểm đối với phép cộng vectơ khẳng định rằng với 3 điểm A, B, C bất kì ta luôn có:",
      "opts": [
        "AB⃗ + BC⃗ = AC⃗",
        "AB⃗ + AC⃗ = BC⃗",
        "AB⃗ - BC⃗ = AC⃗",
        "AB⃗ + BC⃗ = CA⃗"
      ],
      "ans": 0,
      "exp": "• Quy tắc 3 điểm (nối đuôi): AB⃗ + BC⃗ = AC⃗."
    },
    {
      "type": "match",
      "q": "Ghép các quy tắc toán học về vectơ (Cột A) với công thức tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Quy tắc hình bình hành ABCD",
          "b": "A. AB⃗ + AD⃗ = AC⃗"
        },
        {
          "a": "2. Quy tắc trừ (chung gốc)",
          "b": "B. OB⃗ - OA⃗ = AB⃗"
        },
        {
          "a": "3. Tính chất trung điểm I của đoạn AB",
          "b": "C. IA⃗ + IB⃗ = 0⃗"
        },
        {
          "a": "4. Tính chất trọng tâm G tam giác ABC",
          "b": "D. GA⃗ + GB⃗ + GC⃗ = 0⃗"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Hình bình hành: AB⃗ + AD⃗ = AC⃗.<br>• Phép trừ: OB⃗ - OA⃗ = AB⃗.<br>• Trung điểm: IA⃗ + IB⃗ = 0⃗.<br>• Trọng tâm: GA⃗ + GB⃗ + GC⃗ = 0⃗.",
      "colA": [
        "1. Quy tắc hình bình hành ABCD",
        "2. Quy tắc trừ (chung gốc)",
        "3. Tính chất trung điểm I của đoạn AB",
        "4. Tính chất trọng tâm G tam giác ABC"
      ],
      "colB": [
        "A. AB⃗ + AD⃗ = AC⃗",
        "B. OB⃗ - OA⃗ = AB⃗",
        "C. IA⃗ + IB⃗ = 0⃗",
        "D. GA⃗ + GB⃗ + GC⃗ = 0⃗"
      ]
    },
    {
      "type": "tf",
      "q": "Cho hình vuông ABCD cạnh a tâm O. Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) AB⃗ + AD⃗ = AC⃗.",
          "ans": true,
          "exp": "Theo quy tắc hình bình hành: AB⃗ + AD⃗ = AC⃗ (Đúng)."
        },
        {
          "text": "b) Độ dài |AB⃗ + AD⃗| = a√2.",
          "ans": true,
          "exp": "|AB⃗ + AD⃗| = |AC⃗| = AC = a√2 (Đúng)."
        },
        {
          "text": "c) AB⃗ - AD⃗ = DB⃗.",
          "ans": true,
          "exp": "AB⃗ - AD⃗ = DB⃗ (theo quy tắc trừ chung gốc A) (Đúng)."
        },
        {
          "text": "d) OA⃗ + OB⃗ + OC⃗ + OD⃗ = a√2.",
          "ans": false,
          "exp": "OA⃗ + OC⃗ = 0⃗ và OB⃗ + OD⃗ = 0⃗, tổng là 0⃗, độ dài bằng 0 (Sai)."
        }
      ],
      "stmts": [
        "a) AB⃗ + AD⃗ = AC⃗.",
        "b) Độ dài |AB⃗ + AD⃗| = a√2.",
        "c) AB⃗ - AD⃗ = DB⃗.",
        "d) OA⃗ + OB⃗ + OC⃗ + OD⃗ = a√2."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ]
    },
    {
      "type": "mcq",
      "q": "Cho tam giác ABC đều cạnh a. Độ dài của tổng vectơ |AB⃗ + AC⃗| bằng:",
      "opts": [
        "a√3",
        "2a",
        "a",
        "a√3/2"
      ],
      "ans": 0,
      "exp": "• Gọi M là trung điểm BC thì AB⃗ + AC⃗ = 2AM⃗.<br>• Trong tam giác đều cạnh a, đường cao AM = a√3/2.<br>• Độ dài: |AB⃗ + AC⃗| = 2 · (a√3/2) = a√3."
    },
    {
      "type": "drag",
      "q": "Kéo các kết quả chính xác vào vị trí biểu thức:<br>• Với điểm M bất kì và I là trung điểm AB: MA⃗ + MB⃗ = %%%SLOT_1%%%.<br>• Với điểm M bất kì và G là trọng tâm tam giác ABC: MA⃗ + MB⃗ + MC⃗ = %%%SLOT_2%%%.<br>• Hiệu hai vectơ đối nhau a⃗ - (-a⃗) = %%%SLOT_3%%%.",
      "slots": [
        "2MI⃗",
        "3MG⃗",
        "2a⃗"
      ],
      "pool": [
        "2MI⃗",
        "3MG⃗",
        "2a⃗",
        "0⃗",
        "MG⃗"
      ],
      "exp": "• MA⃗ + MB⃗ = 2MI⃗.<br>• MA⃗ + MB⃗ + MC⃗ = 3MG⃗.<br>• a⃗ - (-a⃗) = a⃗ + a⃗ = 2a⃗.",
      "sentence": "Kéo các kết quả chính xác vào vị trí biểu thức:<br>• Với điểm M bất kì và I là trung điểm AB: MA⃗ + MB⃗ = %%%SLOT_1%%%.<br>• Với điểm M bất kì và G là trọng tâm tam giác ABC: MA⃗ + MB⃗ + MC⃗ = %%%SLOT_2%%%.<br>• Hiệu hai vectơ đối nhau a⃗ - (-a⃗) = %%%SLOT_3%%%.",
      "words": [
        "2MI⃗",
        "3MG⃗",
        "2a⃗",
        "0⃗",
        "MG⃗"
      ],
      "ans": [
        "2MI⃗",
        "3MG⃗",
        "2a⃗"
      ]
    },
    {
      "type": "mcq",
      "q": "Cho hình chữ nhật ABCD có AB = 3, BC = 4. Độ dài của vectơ AB⃗ + AD⃗ là:",
      "opts": [
        "5",
        "7",
        "1",
        "25"
      ],
      "ans": 0,
      "exp": "• Theo quy tắc hình bình hành: AB⃗ + AD⃗ = AC⃗.<br>• Độ dài: AC = √(AB² + BC²) = √(3² + 4²) = 5."
    },
    {
      "type": "mcq",
      "q": "Cho hai vectơ a⃗ và b⃗ vuông góc với nhau và có độ lớn |a⃗| = 6, |b⃗| = 8. Độ lớn của vectơ tổng |a⃗ + b⃗| là:",
      "opts": [
        "10",
        "14",
        "2",
        "48"
      ],
      "ans": 0,
      "exp": "• Do a⃗ ⊥ b⃗ nên |a⃗ + b⃗|² = 6² + 8² = 100 ⇒ |a⃗ + b⃗| = 10."
    },
    {
      "type": "mcq",
      "q": "Hai lực F₁⃗ và F₂⃗ cùng tác dụng vào một chất điểm tại điểm O, có độ lớn |F₁⃗| = 40 N và |F₂⃗| = 30 N, hai lực hợp với nhau một góc 90°. Hợp lực F⃗ = F₁⃗ + F₂⃗ có độ lớn là:",
      "opts": [
        "50 N",
        "70 N",
        "10 N",
        "1200 N"
      ],
      "ans": 0,
      "exp": "• Hai lực vuông góc: F² = 40² + 30² = 2500 ⇒ F = 50 N."
    },
    {
      "type": "mcq",
      "q": "Một chiếc ca nô chạy xuôi dòng với vận tốc riêng đối với nước là 25 km/h, vận tốc dòng nước chảy là 5 km/h. Vận tốc của ca nô đối với bờ sông khi xuôi dòng là:",
      "opts": [
        "30 km/h",
        "20 km/h",
        "25,5 km/h",
        "15 km/h"
      ],
      "ans": 0,
      "exp": "• Vận tốc xuôi dòng: v = 25 + 5 = 30 km/h."
    },
    {
      "type": "mcq",
      "q": "Một con tàu chịu tác dụng của hai lực kéo: tàu kéo 1 kéo với lực 5000 N theo hướng chính Bắc, tàu kéo 2 kéo với lực 5000 N theo hướng chính Đông. Hợp lực tác dụng lên con tàu hướng về:",
      "opts": [
        "Hướng Đông Bắc (hợp với hướng Đông một góc 45°)",
        "Hướng Tây Bắc",
        "Hướng Đông Nam",
        "Chính Bắc"
      ],
      "ans": 0,
      "exp": "• Hai lực kéo bằng nhau và vuông góc theo hướng Bắc và Đông tạo thành đường chéo hình vuông hướng Đông Bắc."
    }
  ],
  "9": [
    {
      "type": "mcq",
      "q": "Cho số thực k và vectơ a⃗ ≠ 0⃗. Vectơ k·a⃗ cùng hướng với a⃗ khi và chỉ khi:",
      "opts": [
        "k > 0",
        "k < 0",
        "k = 0",
        "k tùy ý"
      ],
      "ans": 0,
      "exp": "• Tích vectơ với một số k: cùng hướng khi k > 0, ngược hướng khi k < 0."
    },
    {
      "type": "match",
      "q": "Ghép các phép biến đổi vectơ (Cột A) với đẳng thức tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Điểm M là trung điểm đoạn AB",
          "b": "A. MA⃗ + MB⃗ = 0⃗ hay AM⃗ = (1/2)AB⃗"
        },
        {
          "a": "2. Điểm G là trọng tâm tam giác ABC",
          "b": "B. AG⃗ = (2/3)AM⃗ (M là trung điểm BC)"
        },
        {
          "a": "3. Điểm B nằm giữa A và C với AB = 2BC",
          "b": "C. AB⃗ = 2BC⃗"
        },
        {
          "a": "4. Hai vectơ cùng phương",
          "b": "D. a⃗ = k·b⃗ (với b⃗ ≠ 0⃗)"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Trung điểm: AM⃗ = 1/2 AB⃗.<br>• Trọng tâm: AG⃗ = 2/3 AM⃗.<br>• Tỉ lệ đoạn thẳng: AB⃗ = 2BC⃗.<br>• Cùng phương: a⃗ = k·b⃗.",
      "colA": [
        "1. Điểm M là trung điểm đoạn AB",
        "2. Điểm G là trọng tâm tam giác ABC",
        "3. Điểm B nằm giữa A và C với AB = 2BC",
        "4. Hai vectơ cùng phương"
      ],
      "colB": [
        "A. MA⃗ + MB⃗ = 0⃗ hay AM⃗ = (1/2)AB⃗",
        "B. AG⃗ = (2/3)AM⃗ (M là trung điểm BC)",
        "C. AB⃗ = 2BC⃗",
        "D. a⃗ = k·b⃗ (với b⃗ ≠ 0⃗)"
      ]
    },
    {
      "type": "tf",
      "q": "Cho đoạn thẳng AB có độ dài 6 cm và I là trung điểm của AB. Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) AI⃗ = (1/2)AB⃗.",
          "ans": true,
          "exp": "AI và AB cùng hướng, AI = 3 = (1/2)AB nên AI⃗ = (1/2)AB⃗ (Đúng)."
        },
        {
          "text": "b) IB⃗ = -IA⃗.",
          "ans": true,
          "exp": "IB và IA đối nhau nên IB⃗ = -IA⃗ (Đúng)."
        },
        {
          "text": "c) Độ dài |2AB⃗| = 12 cm.",
          "ans": true,
          "exp": "|2AB⃗| = 2 · 6 = 12 cm (Đúng)."
        },
        {
          "text": "d) Vectơ -3AI⃗ có độ dài bằng -9 cm.",
          "ans": false,
          "exp": "Độ dài vectơ luôn không âm: |-3AI⃗| = 3 · 3 = 9 cm (Sai)."
        }
      ],
      "stmts": [
        "a) AI⃗ = (1/2)AB⃗.",
        "b) IB⃗ = -IA⃗.",
        "c) Độ dài |2AB⃗| = 12 cm.",
        "d) Vectơ -3AI⃗ có độ dài bằng -9 cm."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ]
    },
    {
      "type": "mcq",
      "q": "Cho tam giác ABC có trọng tâm G và M là trung điểm BC. Biểu diễn vectơ AG⃗ theo hai vectơ AB⃗ và AC⃗ là:",
      "opts": [
        "AG⃗ = (1/3)AB⃗ + (1/3)AC⃗",
        "AG⃗ = (1/2)AB⃗ + (1/2)AC⃗",
        "AG⃗ = (2/3)AB⃗ + (2/3)AC⃗",
        "AG⃗ = AB⃗ + AC⃗"
      ],
      "ans": 0,
      "exp": "• AM⃗ = (1/2)(AB⃗ + AC⃗) ⇒ AG⃗ = (2/3)AM⃗ = (1/3)AB⃗ + (1/3)AC⃗."
    },
    {
      "type": "drag",
      "q": "Điền hệ số thích hợp vào đẳng thức vectơ:<br>• Cho điểm C thuộc đoạn AB sao cho AC = 3CB. Khi đó AC⃗ = %%%SLOT_1%%% AB⃗.<br>• Vectơ CA⃗ = %%%SLOT_2%%% CB⃗.<br>• Với điểm O bất kì: OC⃗ = %%%SLOT_3%%% OA⃗ + (3/4)OB⃗.",
      "slots": [
        "3/4",
        "-3",
        "1/4"
      ],
      "pool": [
        "3/4",
        "-3",
        "1/4",
        "4/3",
        "3"
      ],
      "exp": "• AC = (3/4)AB ⇒ AC⃗ = (3/4)AB⃗.<br>• CA⃗ = -3CB⃗.<br>• OC⃗ = (1/4)OA⃗ + (3/4)OB⃗.",
      "sentence": "Điền hệ số thích hợp vào đẳng thức vectơ:<br>• Cho điểm C thuộc đoạn AB sao cho AC = 3CB. Khi đó AC⃗ = %%%SLOT_1%%% AB⃗.<br>• Vectơ CA⃗ = %%%SLOT_2%%% CB⃗.<br>• Với điểm O bất kì: OC⃗ = %%%SLOT_3%%% OA⃗ + (3/4)OB⃗.",
      "words": [
        "3/4",
        "-3",
        "1/4",
        "4/3",
        "3"
      ],
      "ans": [
        "3/4",
        "-3",
        "1/4"
      ]
    },
    {
      "type": "mcq",
      "q": "Cho tam giác ABC. Điểm N thỏa mãn NA⃗ + 2NB⃗ = 0⃗. Vị trí của điểm N là:",
      "opts": [
        "N nằm trên đoạn thẳng AB và NB = (1/2)NA",
        "N là trung điểm AB",
        "N nằm ngoài đoạn thẳng AB",
        "N trùng với điểm A"
      ],
      "ans": 0,
      "exp": "• NA⃗ = -2NB⃗ ⇒ N nằm giữa A và B, NA = 2NB."
    },
    {
      "type": "mcq",
      "q": "Cho hai vectơ a⃗ và b⃗ không cùng phương. Vectơ u⃗ = 2a⃗ - 3b⃗ và v⃗ = ka⃗ + 6b⃗ cùng phương khi giá trị k bằng:",
      "opts": [
        "-4",
        "4",
        "-1",
        "-9"
      ],
      "ans": 0,
      "exp": "• k / 2 = 6 / (-3) = -2 ⇒ k = -4."
    },
    {
      "type": "mcq",
      "q": "Một hệ thống đòn bẩy có điểm tựa O nằm giữa hai đầu A và B. Một vật nặng treo ở A sinh lực F₁ = 60 N, một vật nặng treo ở B sinh lực F₂ = 20 N để đòn bẩy cân bằng. Mối quan hệ vectơ vị trí OA⃗ và OB⃗ là:",
      "opts": [
        "OA⃗ = -(1/3)OB⃗",
        "OA⃗ = -3OB⃗",
        "OA⃗ = (1/3)OB⃗",
        "OA⃗ = OB⃗"
      ],
      "ans": 0,
      "exp": "• F₁ · OA = F₂ · OB ⇒ 60 OA = 20 OB ⇒ OA = 1/3 OB.<br>• O nằm giữa nên ngược hướng ⇒ OA⃗ = -(1/3)OB⃗."
    },
    {
      "type": "mcq",
      "q": "Một vệ tinh viễn thông bay ở quỹ đạo địa tĩnh với bán kính r₂ = 42.164 km từ tâm Trái Đất, trong khi một vệ tinh tầm thấp bay ở bán kính r₁ = 7.000 km. Tỉ số bán kính vị trí vectơ r₂⃗ so với r₁⃗ khi hai vệ tinh nằm trên cùng một tia xuất phát từ tâm Trái Đất là:",
      "opts": [
        "r₂⃗ ≈ 6,02 · r₁⃗",
        "r₂⃗ ≈ 0,16 · r₁⃗",
        "r₂⃗ = -6,02 · r₁⃗",
        "r₂⃗ = 12 · r₁⃗"
      ],
      "ans": 0,
      "exp": "• r₂ / r₁ = 42.164 / 7.000 ≈ 6,02 ⇒ r₂⃗ ≈ 6,02 · r₁⃗."
    },
    {
      "type": "mcq",
      "q": "Trọng tâm G của một con tàu chở hàng ba khoang A, B, C có khối lượng bằng nhau được mô tả bởi công thức vị trí đối với gốc toạ độ hải đăng O: OG⃗ = (1/3)(OA⃗ + OB⃗ + OC⃗). Nếu khoang A có toạ độ (10; 20), khoang B có (40; 50), khoang C có (70; 20) (đơn vị: mét). Toạ độ trọng tâm G là:",
      "opts": [
        "(40; 30)",
        "(30; 40)",
        "(120; 90)",
        "(60; 45)"
      ],
      "ans": 0,
      "exp": "• x_G = (10 + 40 + 70)/3 = 40; y_G = (20 + 50 + 20)/3 = 30 ⇒ G(40; 30)."
    }
  ],
  "10": [
    {
      "type": "mcq",
      "q": "Trong mặt phẳng toạ độ Oxy, toạ độ của vectơ u⃗ = x·i⃗ + y·j⃗ (với i⃗, j⃗ là các vectơ đơn vị trên Ox, Oy) là:",
      "opts": [
        "u⃗ = (x; y)",
        "u⃗ = (y; x)",
        "u⃗ = (x + y; 0)",
        "u⃗ = (1; 1)"
      ],
      "ans": 0,
      "exp": "• Định nghĩa: u⃗ = x·i⃗ + y·j⃗ ⇔ u⃗ = (x; y)."
    },
    {
      "type": "match",
      "q": "Ghép các công thức toạ độ vectơ và điểm (Cột A) với biểu thức tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Vectơ AB⃗ nối hai điểm A(x_A; y_A), B(x_B; y_B)",
          "b": "A. AB⃗ = (x_B - x_A; y_B - y_A)"
        },
        {
          "a": "2. Trung điểm I của đoạn thẳng AB",
          "b": "B. x_I = (x_A + x_B)/2; y_I = (y_A + y_B)/2"
        },
        {
          "a": "3. Trọng tâm G của tam giác ABC",
          "b": "C. x_G = (x_A + x_B + x_C)/3; y_G = (y_A + y_B + y_C)/3"
        },
        {
          "a": "4. Độ dài của vectơ u⃗ = (x; y)",
          "b": "D. |u⃗| = √(x² + y²)"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Toạ độ vectơ: cuối trừ đầu.<br>• Trung điểm: trung bình cộng 2 điểm.<br>• Trọng tâm: trung bình cộng 3 điểm.<br>• Độ dài: căn tổng bình phương.",
      "colA": [
        "1. Vectơ AB⃗ nối hai điểm A(x_A; y_A), B(x_B; y_B)",
        "2. Trung điểm I của đoạn thẳng AB",
        "3. Trọng tâm G của tam giác ABC",
        "4. Độ dài của vectơ u⃗ = (x; y)"
      ],
      "colB": [
        "A. AB⃗ = (x_B - x_A; y_B - y_A)",
        "B. x_I = (x_A + x_B)/2; y_I = (y_A + y_B)/2",
        "C. x_G = (x_A + x_B + x_C)/3; y_G = (y_A + y_B + y_C)/3",
        "D. |u⃗| = √(x² + y²)"
      ]
    },
    {
      "type": "tf",
      "q": "Cho hai điểm A(2; -3) và B(4; 1). Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Vectơ AB⃗ có toạ độ là (2; 4).",
          "ans": true,
          "exp": "AB⃗ = (4 - 2; 1 - (-3)) = (2; 4) (Đúng)."
        },
        {
          "text": "b) Trung điểm I của đoạn AB có toạ độ là (3; -1).",
          "ans": true,
          "exp": "x_I = (2 + 4)/2 = 3; y_I = (-3 + 1)/2 = -1 (Đúng)."
        },
        {
          "text": "c) Độ dài đoạn thẳng AB bằng 2√5.",
          "ans": true,
          "exp": "AB = √(2² + 4²) = √20 = 2√5 (Đúng)."
        },
        {
          "text": "d) Vectơ đối của AB⃗ là (-2; 4).",
          "ans": false,
          "exp": "-AB⃗ = (-2; -4) (Sai)."
        }
      ],
      "stmts": [
        "a) Vectơ AB⃗ có toạ độ là (2; 4).",
        "b) Trung điểm I của đoạn AB có toạ độ là (3; -1).",
        "c) Độ dài đoạn thẳng AB bằng 2√5.",
        "d) Vectơ đối của AB⃗ là (-2; 4)."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ]
    },
    {
      "type": "mcq",
      "q": "Cho u⃗ = (2; -1) và v⃗ = (-3; 4). Toạ độ của vectơ tổng 2u⃗ + v⃗ là:",
      "opts": [
        "(1; 2)",
        "(-1; 2)",
        "(1; 7)",
        "(7; -2)"
      ],
      "ans": 0,
      "exp": "• 2u⃗ = (4; -2) ⇒ 2u⃗ + v⃗ = (4 - 3; -2 + 4) = (1; 2)."
    },
    {
      "type": "drag",
      "q": "Kéo các giá trị toạ độ vào chỗ trống cho tam giác có 3 đỉnh A(1; 2), B(-2; 3), C(4; 1):<br>• Trọng tâm G có toạ độ là %%%SLOT_1%%%.<br>• Vectơ AC⃗ có toạ độ là %%%SLOT_2%%%.<br>• Độ dài cạnh AC là %%%SLOT_3%%%.",
      "slots": [
        "(1; 2)",
        "(3; -1)",
        "√10"
      ],
      "pool": [
        "(1; 2)",
        "(3; -1)",
        "√10",
        "(3; 6)",
        "10"
      ],
      "exp": "• G = ( (1-2+4)/3; (2+3+1)/3 ) = (1; 2).<br>• AC⃗ = (4-1; 1-2) = (3; -1).<br>• AC = √(3² + (-1)²) = √10.",
      "sentence": "Kéo các giá trị toạ độ vào chỗ trống cho tam giác có 3 đỉnh A(1; 2), B(-2; 3), C(4; 1):<br>• Trọng tâm G có toạ độ là %%%SLOT_1%%%.<br>• Vectơ AC⃗ có toạ độ là %%%SLOT_2%%%.<br>• Độ dài cạnh AC là %%%SLOT_3%%%.",
      "words": [
        "(1; 2)",
        "(3; -1)",
        "√10",
        "(3; 6)",
        "10"
      ],
      "ans": [
        "(1; 2)",
        "(3; -1)",
        "√10"
      ]
    },
    {
      "type": "mcq",
      "q": "Cho u⃗ = (x; 2) và v⃗ = (6; -3). Hai vectơ u⃗ và v⃗ cùng phương khi x nhận giá trị:",
      "opts": [
        "-4",
        "4",
        "-3",
        "6"
      ],
      "ans": 0,
      "exp": "• x / 6 = 2 / (-3) ⇒ x = -4."
    },
    {
      "type": "mcq",
      "q": "Cho điểm A(-1; 2), B(3; 4), C(5; -1). Toạ độ đỉnh D để tứ giác ABCD là hình bình hành là:",
      "opts": [
        "(1; -3)",
        "(-3; 1)",
        "(9; 1)",
        "(7; 5)"
      ],
      "ans": 0,
      "exp": "• AD⃗ = BC⃗ = (2; -5) ⇒ x_D + 1 = 2, y_D - 2 = -5 ⇒ D(1; -3)."
    },
    {
      "type": "mcq",
      "q": "Màn hình radar trắc địa có gốc toạ độ tại trạm điều khiển O(0; 0). Một flycam đang bay ở vị trí A(6; 8) (đơn vị: km). Khoảng cách từ trạm điều khiển đến flycam là:",
      "opts": [
        "10 km",
        "14 km",
        "100 km",
        "7 km"
      ],
      "ans": 0,
      "exp": "• OA = √(6² + 8²) = 10 km."
    },
    {
      "type": "mcq",
      "q": "Một robot hút bụi tự hành di chuyển từ điểm A(1; 2) đến điểm B(4; 6) (đơn vị: mét) trong thời gian 5 giây. Tốc độ trung bình của robot là:",
      "opts": [
        "1,0 m/s",
        "1,4 m/s",
        "5,0 m/s",
        "0,8 m/s"
      ],
      "ans": 0,
      "exp": "• AB = √(3² + 4²) = 5 m.<br>• v = 5 m / 5 s = 1,0 m/s."
    },
    {
      "type": "mcq",
      "q": "Trong bản đồ số nông nghiệp thông minh, một thửa ruộng hình bình hành có 3 góc đã cắm cọc cảm biến đo độ ẩm tại A(2; 1), B(8; 3), C(10; 7). Để phủ sóng đều, cọc cảm biến thứ 4 tại D cần cắm ở toạ độ:",
      "opts": [
        "D(4; 5)",
        "D(16; 9)",
        "D(0; 5)",
        "D(6; 4)"
      ],
      "ans": 0,
      "exp": "• AD⃗ = BC⃗ = (2; 4) ⇒ D(2 + 2; 1 + 4) = D(4; 5)."
    }
  ],
  "11": [
    {
      "type": "mcq",
      "q": "Tích vô hướng của hai vectơ a⃗ và b⃗ đều khác 0⃗ được tính bởi công thức:",
      "opts": [
        "a⃗ · b⃗ = |a⃗| · |b⃗| · cos(a⃗, b⃗)",
        "a⃗ · b⃗ = |a⃗| · |b⃗| · sin(a⃗, b⃗)",
        "a⃗ · b⃗ = |a⃗| · |b⃗|",
        "a⃗ · b⃗ = |a⃗ + b⃗| · cos(a⃗, b⃗)"
      ],
      "ans": 0,
      "exp": "• Định nghĩa: a⃗ · b⃗ = |a⃗| · |b⃗| · cos(a⃗, b⃗)."
    },
    {
      "type": "match",
      "q": "Ghép các tính chất của tích vô hướng (Cột A) với biểu thức tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Hai vectơ vuông góc a⃗ ⊥ b⃗",
          "b": "A. a⃗ · b⃗ = 0"
        },
        {
          "a": "2. Bình phương vô hướng a⃗²",
          "b": "B. = |a⃗|² (bằng bình phương độ dài)"
        },
        {
          "a": "3. Biểu thức toạ độ khi a⃗ = (x₁; y₁), b⃗ = (x₂; y₂)",
          "b": "C. a⃗ · b⃗ = x₁x₂ + y₁y₂"
        },
        {
          "a": "4. Cosin của góc giữa hai vectơ",
          "b": "D. cos(a⃗, b⃗) = (x₁x₂ + y₁y₂) / [√(x₁² + y₁²) · √(x₂² + y₂²)]"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Vuông góc ⇔ tích vô hướng bằng 0.<br>• Bình phương vô hướng = bình phương độ dài.<br>• Toạ độ: x₁x₂ + y₁y₂.<br>• Cosin góc.",
      "colA": [
        "1. Hai vectơ vuông góc a⃗ ⊥ b⃗",
        "2. Bình phương vô hướng a⃗²",
        "3. Biểu thức toạ độ khi a⃗ = (x₁; y₁), b⃗ = (x₂; y₂)",
        "4. Cosin của góc giữa hai vectơ"
      ],
      "colB": [
        "A. a⃗ · b⃗ = 0",
        "B. = |a⃗|² (bằng bình phương độ dài)",
        "C. a⃗ · b⃗ = x₁x₂ + y₁y₂",
        "D. cos(a⃗, b⃗) = (x₁x₂ + y₁y₂) / [√(x₁² + y₁²) · √(x₂² + y₂²)]"
      ]
    },
    {
      "type": "tf",
      "q": "Cho hai vectơ u⃗ = (1; 2) và v⃗ = (-2; 1). Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Tích vô hướng u⃗ · v⃗ = 0.",
          "ans": true,
          "exp": "u⃗ · v⃗ = 1(-2) + 2(1) = 0 (Đúng)."
        },
        {
          "text": "b) Hai vectơ u⃗ và v⃗ vuông góc với nhau.",
          "ans": true,
          "exp": "u⃗ · v⃗ = 0 ⇒ u⃗ ⊥ v⃗ (Đúng)."
        },
        {
          "text": "c) Độ dài |u⃗| = |v⃗| = √5.",
          "ans": true,
          "exp": "√(1² + 2²) = √5 (Đúng)."
        },
        {
          "text": "d) Góc giữa u⃗ và v⃗ là 0°.",
          "ans": false,
          "exp": "Góc giữa chúng là 90° (Sai)."
        }
      ],
      "stmts": [
        "a) Tích vô hướng u⃗ · v⃗ = 0.",
        "b) Hai vectơ u⃗ và v⃗ vuông góc với nhau.",
        "c) Độ dài |u⃗| = |v⃗| = √5.",
        "d) Góc giữa u⃗ và v⃗ là 0°."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ]
    },
    {
      "type": "mcq",
      "q": "Cho tam giác đều ABC cạnh a. Tích vô hướng AB⃗ · AC⃗ có giá trị là:",
      "opts": [
        "a²/2",
        "a²",
        "a²√3/2",
        "-a²/2"
      ],
      "ans": 0,
      "exp": "• AB⃗ · AC⃗ = a · a · cos 60° = a²/2."
    },
    {
      "type": "drag",
      "q": "Kéo các giá trị thích hợp vào chỗ trống cho hai vectơ a⃗ = (3; 4) và b⃗ = (4; -3):<br>• Tích vô hướng a⃗ · b⃗ = %%%SLOT_1%%%.<br>• Góc giữa hai vectơ là %%%SLOT_2%%%.<br>• Bình phương vô hướng a⃗² = %%%SLOT_3%%%.",
      "slots": [
        "0",
        "90°",
        "25"
      ],
      "pool": [
        "0",
        "90°",
        "25",
        "24",
        "45°"
      ],
      "exp": "• a⃗ · b⃗ = 3(4) + 4(-3) = 0.<br>• Góc = 90°.<br>• a⃗² = 3² + 4² = 25.",
      "sentence": "Kéo các giá trị thích hợp vào chỗ trống cho hai vectơ a⃗ = (3; 4) và b⃗ = (4; -3):<br>• Tích vô hướng a⃗ · b⃗ = %%%SLOT_1%%%.<br>• Góc giữa hai vectơ là %%%SLOT_2%%%.<br>• Bình phương vô hướng a⃗² = %%%SLOT_3%%%.",
      "words": [
        "0",
        "90°",
        "25",
        "24",
        "45°"
      ],
      "ans": [
        "0",
        "90°",
        "25"
      ]
    },
    {
      "type": "mcq",
      "q": "Cho hai vectơ a⃗ = (2; 1) và b⃗ = (1; 3). Cosin của góc giữa hai vectơ là:",
      "opts": [
        "1/√2 (tức góc 45°)",
        "√3/2",
        "1/2",
        "0"
      ],
      "ans": 0,
      "exp": "• a⃗ · b⃗ = 5; |a⃗| = √5; |b⃗| = √10 ⇒ cos = 5 / (√5√10) = 1/√2."
    },
    {
      "type": "mcq",
      "q": "Tìm m để hai vectơ u⃗ = (m; 3) và v⃗ = (2; -4) vuông góc với nhau:",
      "opts": [
        "m = 6",
        "m = -6",
        "m = 3",
        "m = -3"
      ],
      "ans": 0,
      "exp": "• 2m + 3(-4) = 0 ⇒ 2m = 12 ⇒ m = 6."
    },
    {
      "type": "mcq",
      "q": "Một công nhân tác dụng lực kéo F⃗ không đổi có độ lớn 120 N để kéo một thùng hàng di chuyển quãng đường s = 25 m trên sàn phẳng. Lực F⃗ hợp với hướng chuyển động góc 60°. Công cơ học thực hiện bởi lực kéo là:",
      "opts": [
        "1.500 J",
        "3.000 J",
        "2.598 J",
        "750 J"
      ],
      "ans": 0,
      "exp": "• A = F · s · cos 60° = 120 · 25 · 0,5 = 1500 J."
    },
    {
      "type": "mcq",
      "q": "Một cần cẩu nâng một khối bê tông lên cao theo phương thẳng đứng với lực nâng F⃗ có độ lớn 8000 N, độ dời h = 10 m. Góc giữa lực nâng và hướng chuyển động là 0°. Công của lực nâng cần cẩu là:",
      "opts": [
        "80.000 J",
        "0 J",
        "40.000 J",
        "-80.000 J"
      ],
      "ans": 0,
      "exp": "• A = 8000 · 10 · cos 0° = 80.000 J."
    },
    {
      "type": "mcq",
      "q": "Trong đồ họa máy tính 3D, kiểm tra xem bề mặt vật thể có quay về phía camera hay không bằng tích vô hướng giữa vectơ pháp tuyến mặt n⃗ và vectơ hướng nhìn v⃗. Nếu n⃗ = (0,6; 0,8) và v⃗ = (-0,8; 0,6) thì góc giữa hai vectơ là:",
      "opts": [
        "90° (vuông góc, mặt phẳng nằm nghiêng tiếp tuyến góc nhìn)",
        "0°",
        "180°",
        "45°"
      ],
      "ans": 0,
      "exp": "• n⃗ · v⃗ = 0,6(-0,8) + 0,8(0,6) = 0 ⇒ góc 90°."
    }
  ],
  "12": [
    {
      "type": "mcq",
      "q": "Nếu a là số gần đúng của số đúng ā thì sai số tuyệt đối của số gần đúng a được định nghĩa là:",
      "opts": [
        "Δ_a = |ā - a|",
        "Δ_a = ā - a",
        "Δ_a = a / ā",
        "Δ_a = |ā + a|"
      ],
      "ans": 0,
      "exp": "• Sai số tuyệt đối: Δ_a = |ā - a|."
    },
    {
      "type": "match",
      "q": "Ghép các khái niệm về sai số (Cột A) với định nghĩa tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Độ chính xác d của số gần đúng a",
          "b": "A. Giới hạn trên của sai số tuyệt đối: Δ_a ≤ d"
        },
        {
          "a": "2. Sai số tương đối δ_a",
          "b": "B. Tỉ số giữa sai số tuyệt đối và giá trị tuyệt đối số gần đúng: δ_a = Δ_a / |a|"
        },
        {
          "a": "3. Quy tròn đến hàng chục",
          "b": "C. Chữ số hàng đơn vị nếu < 5 thì thay bằng 0; nếu ≥ 5 thì cộng 1 vào hàng chục"
        },
        {
          "a": "4. Chữ số chắc (đáng tin)",
          "b": "D. Chữ số mà sai số tuyệt đối không vượt quá nửa đơn vị của hàng đó"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Độ chính xác d: |ā - a| ≤ d.<br>• Sai số tương đối.<br>• Quy tròn.<br>• Chữ số chắc.",
      "colA": [
        "1. Độ chính xác d của số gần đúng a",
        "2. Sai số tương đối δ_a",
        "3. Quy tròn đến hàng chục",
        "4. Chữ số chắc (đáng tin)"
      ],
      "colB": [
        "A. Giới hạn trên của sai số tuyệt đối: Δ_a ≤ d",
        "B. Tỉ số giữa sai số tuyệt đối và giá trị tuyệt đối số gần đúng: δ_a = Δ_a / |a|",
        "C. Chữ số hàng đơn vị nếu < 5 thì thay bằng 0; nếu ≥ 5 thì cộng 1 vào hàng chục",
        "D. Chữ số mà sai số tuyệt đối không vượt quá nửa đơn vị của hàng đó"
      ]
    },
    {
      "type": "tf",
      "q": "Cho số đúng ā = 3,14159265... Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Số quy tròn của ā đến hàng phần trăm là a = 3,14.",
          "ans": true,
          "exp": "Chữ số sau 4 là 1 < 5 nên giữ nguyên 3,14 (Đúng)."
        },
        {
          "text": "b) Sai số tuyệt đối khi lấy a = 3,14 không vượt quá 0,005.",
          "ans": true,
          "exp": "|3,14159... - 3,14| = 0,00159... < 0,005 (Đúng)."
        },
        {
          "text": "c) Số quy tròn của ā đến hàng phần mười là 3,2.",
          "ans": false,
          "exp": "Chữ số sau 1 là 4 < 5 nên làm tròn là 3,1 (Sai)."
        },
        {
          "text": "d) Sai số tương đối càng nhỏ thì phép đo càng chính xác.",
          "ans": true,
          "exp": "Sai số tương đối đo độ tin cậy của phép đo (Đúng)."
        }
      ],
      "stmts": [
        "a) Số quy tròn của ā đến hàng phần trăm là a = 3,14.",
        "b) Sai số tuyệt đối khi lấy a = 3,14 không vượt quá 0,005.",
        "c) Số quy tròn của ā đến hàng phần mười là 3,2.",
        "d) Sai số tương đối càng nhỏ thì phép đo càng chính xác."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ]
    },
    {
      "type": "mcq",
      "q": "Cho số gần đúng a = 12 354 với độ chính xác d = 50. Số quy tròn của a là:",
      "opts": [
        "12 400",
        "12 350",
        "12 000",
        "12 300"
      ],
      "ans": 0,
      "exp": "• d = 50 (hàng chục) nên quy tròn đến hàng trăm.<br>• Hàng chục là 5 ≥ 5 nên tăng hàng trăm lên 1: 12 400."
    },
    {
      "type": "drag",
      "q": "Điền vào chỗ trống kết quả làm tròn các số đo:<br>• Số 45,678 làm tròn đến hàng phần mười là %%%SLOT_1%%%.<br>• Số 3,14159 làm tròn đến 3 chữ số thập phân là %%%SLOT_2%%%.<br>• Số 128 450 làm tròn đến hàng nghìn là %%%SLOT_3%%%.",
      "slots": [
        "45,7",
        "3,142",
        "128 000"
      ],
      "pool": [
        "45,7",
        "3,142",
        "128 000",
        "45,6",
        "129 000"
      ],
      "exp": "• 45,678 → 45,7.<br>• 3,14159 → 3,142.<br>• 128 450 → 128 000.",
      "sentence": "Điền vào chỗ trống kết quả làm tròn các số đo:<br>• Số 45,678 làm tròn đến hàng phần mười là %%%SLOT_1%%%.<br>• Số 3,14159 làm tròn đến 3 chữ số thập phân là %%%SLOT_2%%%.<br>• Số 128 450 làm tròn đến hàng nghìn là %%%SLOT_3%%%.",
      "words": [
        "45,7",
        "3,142",
        "128 000",
        "45,6",
        "129 000"
      ],
      "ans": [
        "45,7",
        "3,142",
        "128 000"
      ]
    },
    {
      "type": "mcq",
      "q": "Một sợi dây có chiều dài đúng l thỏa mãn 5,4 m ≤ l ≤ 5,6 m. Khi lấy chiều dài gần đúng là 5,5 m thì sai số tuyệt đối không vượt quá:",
      "opts": [
        "0,1 m",
        "0,2 m",
        "0,05 m",
        "0,5 m"
      ],
      "ans": 0,
      "exp": "• |l - 5,5| ≤ 0,1 m."
    },
    {
      "type": "mcq",
      "q": "Tính sai số tương đối δ của kết quả đo khối lượng m = (12,5 ± 0,1) kg:",
      "opts": [
        "0,8%",
        "0,1%",
        "1,25%",
        "8%"
      ],
      "ans": 0,
      "exp": "• δ = 0,1 / 12,5 = 0,008 = 0,8%."
    },
    {
      "type": "mcq",
      "q": "Một thửa đất hình chữ nhật có kích thước đo được là chiều dài a = (40 ± 0,2) m và chiều rộng b = (25 ± 0,1) m. Chu vi thửa đất P = 2(a + b) có độ chính xác là:",
      "opts": [
        "d_P = 0,6 m",
        "d_P = 0,3 m",
        "d_P = 0,2 m",
        "d_P = 0,02 m"
      ],
      "ans": 0,
      "exp": "• d_P = 2 · (d_a + d_b) = 2 · (0,2 + 0,1) = 0,6 m."
    },
    {
      "type": "mcq",
      "q": "Đồng hồ đo tốc độ của xe ô tô chỉ v = 85 km/h với sai số cho phép ±2 km/h. Tốc độ thực tế v_tt của xe nằm trong khoảng nào?",
      "opts": [
        "[83; 87] km/h",
        "[80; 90] km/h",
        "[84; 86] km/h",
        "[83; 85] km/h"
      ],
      "ans": 0,
      "exp": "• 85 - 2 ≤ v_tt ≤ 85 + 2 ⇔ [83; 87] km/h."
    },
    {
      "type": "mcq",
      "q": "Một kĩ sư gia công trục máy tiện yêu cầu đường kính d = 50 mm với dung sai ±0,02 mm. Kết quả đo kiểm tra nào sau đây khiến chi tiết <b>bị loại</b> (không đạt chuẩn)?",
      "opts": [
        "50,035 mm",
        "50,015 mm",
        "49,985 mm",
        "50,000 mm"
      ],
      "ans": 0,
      "exp": "• Dung sai cho phép: [49,98; 50,02] mm. Chi tiết 50,035 mm > 50,02 mm nên bị loại."
    }
  ],
  "13": [
    {
      "type": "mcq",
      "q": "Trung vị (M_e) của một mẫu số liệu là giá trị:",
      "opts": [
        "chia mẫu số liệu đã sắp xếp thành hai phần bằng nhau về số lượng",
        "xuất hiện nhiều lần nhất trong mẫu",
        "trung bình cộng của tất cả các giá trị",
        "lớn nhất trừ đi giá trị nhỏ nhất"
      ],
      "ans": 0,
      "exp": "• Trung vị M_e: giá trị ở vị trí chính giữa của mẫu số liệu sau khi sắp xếp theo thứ tự không giảm."
    },
    {
      "type": "match",
      "q": "Ghép các số đặc trưng đo xu thế trung tâm (Cột A) với ý nghĩa tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Số trung bình (x̄)",
          "b": "A. Đại diện cho giá trị trung bình cộng của cả mẫu"
        },
        {
          "a": "2. Trung vị (M_e hay Q₂)",
          "b": "B. Không bị ảnh hưởng bởi các giá trị bất thường (quá lớn hoặc quá bé)"
        },
        {
          "a": "3. Mốt (M_o)",
          "b": "C. Giá trị có tần số xuất hiện lớn nhất trong mẫu"
        },
        {
          "a": "4. Tứ phân vị (Q₁, Q₂, Q₃)",
          "b": "D. Chia mẫu số liệu đã sắp xếp thành 4 phần bằng nhau"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Trung bình: nhạy cảm với ngoại lai.<br>• Trung vị: chống chịu tốt ngoại lai.<br>• Mốt: thị hiếu phổ biến nhất.<br>• Tứ phân vị: phân vị 25%, 50%, 75%.",
      "colA": [
        "1. Số trung bình (x̄)",
        "2. Trung vị (M_e hay Q₂)",
        "3. Mốt (M_o)",
        "4. Tứ phân vị (Q₁, Q₂, Q₃)"
      ],
      "colB": [
        "A. Đại diện cho giá trị trung bình cộng của cả mẫu",
        "B. Không bị ảnh hưởng bởi các giá trị bất thường (quá lớn hoặc quá bé)",
        "C. Giá trị có tần số xuất hiện lớn nhất trong mẫu",
        "D. Chia mẫu số liệu đã sắp xếp thành 4 phần bằng nhau"
      ]
    },
    {
      "type": "tf",
      "q": "Cho mẫu số liệu điểm kiểm tra: 6, 7, 7, 8, 8, 8, 9, 10 (n = 8). Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Số trung bình x̄ = 7,875.",
          "ans": true,
          "exp": "Tổng = 63. x̄ = 63 / 8 = 7,875 (Đúng)."
        },
        {
          "text": "b) Mốt của mẫu số liệu là M_o = 8.",
          "ans": true,
          "exp": "Điểm 8 xuất hiện 3 lần (nhiều nhất) (Đúng)."
        },
        {
          "text": "c) Trung vị M_e = 8.",
          "ans": true,
          "exp": "M_e = (8 + 8)/2 = 8 (Đúng)."
        },
        {
          "text": "d) Tứ phân vị thứ nhất Q₁ = 6,5.",
          "ans": false,
          "exp": "Nửa dưới {6, 7, 7, 8} có Q₁ = (7 + 7)/2 = 7 (Sai)."
        }
      ],
      "stmts": [
        "a) Số trung bình x̄ = 7,875.",
        "b) Mốt của mẫu số liệu là M_o = 8.",
        "c) Trung vị M_e = 8.",
        "d) Tứ phân vị thứ nhất Q₁ = 6,5."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ]
    },
    {
      "type": "mcq",
      "q": "Tìm trung vị của mẫu số liệu sau: 3, 5, 8, 10, 12, 15, 18:",
      "opts": [
        "10",
        "8",
        "12",
        "10,1"
      ],
      "ans": 0,
      "exp": "• n = 7 (lẻ). Số thứ 4 là 10 ⇒ M_e = 10."
    },
    {
      "type": "drag",
      "q": "Kéo các giá trị thích hợp vào chỗ trống cho mẫu số liệu: 2, 4, 6, 8, 10:<br>• Số trung bình x̄ = %%%SLOT_1%%%.<br>• Trung vị M_e = %%%SLOT_2%%%.<br>• Khoảng biến thiên R = %%%SLOT_3%%%.",
      "slots": [
        "6",
        "6",
        "8"
      ],
      "pool": [
        "6",
        "6",
        "8",
        "10",
        "4"
      ],
      "exp": "• x̄ = 30 / 5 = 6.<br>• M_e = 6.<br>• R = 10 - 2 = 8.",
      "sentence": "Kéo các giá trị thích hợp vào chỗ trống cho mẫu số liệu: 2, 4, 6, 8, 10:<br>• Số trung bình x̄ = %%%SLOT_1%%%.<br>• Trung vị M_e = %%%SLOT_2%%%.<br>• Khoảng biến thiên R = %%%SLOT_3%%%.",
      "words": [
        "6",
        "6",
        "8",
        "10",
        "4"
      ],
      "ans": [
        "6",
        "6",
        "8"
      ]
    },
    {
      "type": "mcq",
      "q": "Tìm mốt của dãy điểm thi môn Toán: 5, 6, 7, 7, 8, 8, 8, 9, 9, 10:",
      "opts": [
        "8 (tần số 3)",
        "7",
        "9",
        "Không có mốt"
      ],
      "ans": 0,
      "exp": "• Điểm 8 xuất hiện 3 lần, nhiều nhất nên M_o = 8."
    },
    {
      "type": "mcq",
      "q": "Mẫu số liệu 1, 2, 3, 4, 5, 6, 7, 8 có tứ phân vị thứ nhất Q₁ và thứ ba Q₃ lần lượt là:",
      "opts": [
        "Q₁ = 2,5; Q₃ = 6,5",
        "Q₁ = 2; Q₃ = 7",
        "Q₁ = 3; Q₃ = 6",
        "Q₁ = 2,5; Q₃ = 7,5"
      ],
      "ans": 0,
      "exp": "• Nửa dưới {1, 2, 3, 4} có Q₁ = 2,5.<br>• Nửa trên {5, 6, 7, 8} có Q₃ = 6,5."
    },
    {
      "type": "mcq",
      "q": "Bảng lương hàng tháng của một xí nghiệp may: 1 giám đốc lương 80 triệu, 2 phó giám đốc 30 triệu, 40 công nhân lương 8 triệu. Số đặc trưng nào phản ánh sát nhất thu nhập thực tế của đa số người lao động?",
      "opts": [
        "Trung vị (8 triệu đồng)",
        "Số trung bình (khoảng 10,2 triệu đồng)",
        "Số lớn nhất (80 triệu)",
        "Khoảng biến thiên"
      ],
      "ans": 0,
      "exp": "• Trung vị = 8 triệu đồng phản ánh trung thực mức thu nhập của đa số công nhân."
    },
    {
      "type": "mcq",
      "q": "Một cửa hàng giày thể thao theo dõi kích cỡ (size) giày nam bán ra trong tháng: size 39 (15 đôi), size 40 (45 đôi), size 41 (80 đôi), size 42 (50 đôi), size 43 (10 đôi). Chủ cửa hàng nên ưu tiên nhập nhiều nhất size giày nào?",
      "opts": [
        "Size 41 (ứng với Mốt của mẫu số liệu)",
        "Size 40",
        "Size 42",
        "Size trung bình 40,8"
      ],
      "ans": 0,
      "exp": "• Mốt M_o = 41 (bán được nhiều nhất với 80 đôi) thể hiện thị hiếu số đông khách hàng."
    },
    {
      "type": "mcq",
      "q": "Thời gian hoàn thành một bài test tuyển dụng của 5 ứng viên là: 18, 22, 25, 27, 38 phút. Sau khi kiểm tra lại, ứng viên 38 phút thực tế chỉ mất 28 phút. Đại lượng nào sau đây <b>không thay đổi</b>?",
      "opts": [
        "Trung vị (vẫn là 25 phút)",
        "Số trung bình",
        "Khoảng biến thiên",
        "Tổng thời gian"
      ],
      "ans": 0,
      "exp": "• Dãy cũ: 18, 22, 25, 27, 38 (M_e = 25). Dãy mới: 18, 22, 25, 27, 28 (M_e vẫn là 25)."
    }
  ],
  "14": [
    {
      "type": "mcq",
      "q": "Khoảng biến thiên R của một mẫu số liệu được định nghĩa là:",
      "opts": [
        "Hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất: R = x_max - x_min",
        "Tích giữa x_max và x_min",
        "Tổng giữa x_max và x_min",
        "Hiệu giữa Q₃ và Q₁"
      ],
      "ans": 0,
      "exp": "• Khoảng biến thiên: R = x_max - x_min."
    },
    {
      "type": "match",
      "q": "Ghép các số đặc trưng đo độ phân tán (Cột A) với công thức tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Khoảng tứ phân vị Δ_Q",
          "b": "A. Δ_Q = Q₃ - Q₁"
        },
        {
          "a": "2. Phương sai s²",
          "b": "B. s² = (1/n) · ∑ (x_i - x̄)²"
        },
        {
          "a": "3. Độ lệch chuẩn s",
          "b": "C. s = √(s²)"
        },
        {
          "a": "4. Giá trị ngoại lệ (bất thường)",
          "b": "D. Nhỏ hơn Q₁ - 1,5·Δ_Q hoặc lớn hơn Q₃ + 1,5·Δ_Q"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Khoảng tứ phân vị: Q₃ - Q₁.<br>• Phương sai: trung bình bình phương độ lệch.<br>• Độ lệch chuẩn: căn bậc hai của phương sai.<br>• Tiêu chuẩn rào Tukey phát hiện ngoại lai.",
      "colA": [
        "1. Khoảng tứ phân vị Δ_Q",
        "2. Phương sai s²",
        "3. Độ lệch chuẩn s",
        "4. Giá trị ngoại lệ (bất thường)"
      ],
      "colB": [
        "A. Δ_Q = Q₃ - Q₁",
        "B. s² = (1/n) · ∑ (x_i - x̄)²",
        "C. s = √(s²)",
        "D. Nhỏ hơn Q₁ - 1,5·Δ_Q hoặc lớn hơn Q₃ + 1,5·Δ_Q"
      ]
    },
    {
      "type": "tf",
      "q": "Cho mẫu số liệu: 4, 6, 8, 10, 12. Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Khoảng biến thiên R = 8.",
          "ans": true,
          "exp": "R = 12 - 4 = 8 (Đúng)."
        },
        {
          "text": "b) Số trung bình x̄ = 8.",
          "ans": true,
          "exp": "x̄ = (4 + 6 + 8 + 10 + 12)/5 = 40 / 5 = 8 (Đúng)."
        },
        {
          "text": "c) Phương sai s² = 8.",
          "ans": true,
          "exp": "s² = [(-4)² + (-2)² + 0² + 2² + 4²] / 5 = [16 + 4 + 0 + 4 + 16]/5 = 40 / 5 = 8 (Đúng)."
        },
        {
          "text": "d) Độ lệch chuẩn s = 8.",
          "ans": false,
          "exp": "Độ lệch chuẩn s = √8 = 2√2 ≈ 2,83 (Sai)."
        }
      ],
      "stmts": [
        "a) Khoảng biến thiên R = 8.",
        "b) Số trung bình x̄ = 8.",
        "c) Phương sai s² = 8.",
        "d) Độ lệch chuẩn s = 8."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ]
    },
    {
      "type": "mcq",
      "q": "Độ lệch chuẩn s của mẫu số liệu đo lường mức độ:",
      "opts": [
        "phân tán của các số liệu quanh số trung bình",
        "chính xác của giá trị trung vị",
        "xuất hiện nhiều lần của mốt",
        "lớn nhất của mẫu số liệu"
      ],
      "ans": 0,
      "exp": "• Phương sai và độ lệch chuẩn đo mức độ phân tán của các giá trị trong mẫu quanh giá trị trung bình."
    },
    {
      "type": "drag",
      "q": "Điền vào chỗ trống công thức xác định giá trị ngoại lệ của mẫu số liệu:<br>• Rào dưới: x < %%%SLOT_1%%% - 1,5 · Δ_Q.<br>• Rào trên: x > %%%SLOT_2%%% + 1,5 · Δ_Q.<br>• Khoảng tứ phân vị Δ_Q = %%%SLOT_3%%%.",
      "slots": [
        "Q₁",
        "Q₃",
        "Q₃ - Q₁"
      ],
      "pool": [
        "Q₁",
        "Q₃",
        "Q₃ - Q₁",
        "x̄",
        "R"
      ],
      "exp": "• Rào dưới: Q₁ - 1,5·Δ_Q.<br>• Rào trên: Q₃ + 1,5·Δ_Q.<br>• Δ_Q = Q₃ - Q₁.",
      "sentence": "Điền vào chỗ trống công thức xác định giá trị ngoại lệ của mẫu số liệu:<br>• Rào dưới: x < %%%SLOT_1%%% - 1,5 · Δ_Q.<br>• Rào trên: x > %%%SLOT_2%%% + 1,5 · Δ_Q.<br>• Khoảng tứ phân vị Δ_Q = %%%SLOT_3%%%.",
      "words": [
        "Q₁",
        "Q₃",
        "Q₃ - Q₁",
        "x̄",
        "R"
      ],
      "ans": [
        "Q₁",
        "Q₃",
        "Q₃ - Q₁"
      ]
    },
    {
      "type": "mcq",
      "q": "Cho mẫu số liệu có phương sai s² = 16. Độ lệch chuẩn s bằng:",
      "opts": [
        "4",
        "256",
        "8",
        "2"
      ],
      "ans": 0,
      "exp": "• s = √16 = 4."
    },
    {
      "type": "mcq",
      "q": "Tính khoảng tứ phân vị Δ_Q của mẫu số liệu: 10, 15, 20, 25, 30, 35, 40, 45:",
      "opts": [
        "20",
        "35",
        "15",
        "10"
      ],
      "ans": 0,
      "exp": "• Q₁ = 17,5; Q₃ = 37,5 ⇒ Δ_Q = 37,5 - 17,5 = 20."
    },
    {
      "type": "mcq",
      "q": "Hai xạ thủ A và B bắn mỗi người 10 viên đạn vào bia. Cả hai đều có điểm trung bình là 9,0 điểm. Độ lệch chuẩn điểm số của xạ thủ A là s_A = 0,6 điểm, của xạ thủ B là s_B = 1,4 điểm. Nhận định nào đúng?",
      "opts": [
        "Xạ thủ A bắn ổn định và đều tay hơn xạ thủ B",
        "Xạ thủ B bắn ổn định hơn xạ thủ A",
        "Hai xạ thủ bắn ổn định như nhau vì cùng điểm trung bình",
        "Không thể so sánh"
      ],
      "ans": 0,
      "exp": "• s_A = 0,6 < s_B = 1,4 nên xạ thủ A bắn ổn định hơn."
    },
    {
      "type": "mcq",
      "q": "Giá cổ phiếu của hai công ty X và Y trong 30 ngày giao dịch đều có mức giá trung bình 50.000 đ/cổ phiếu. Độ lệch chuẩn giá cổ phiếu X là 1.500 đ, cổ phiếu Y là 8.500 đ. Nhà đầu tư thích mức độ an toàn ít rủi ro nên chọn cổ phiếu nào?",
      "opts": [
        "Cổ phiếu X vì biên độ dao động giá thấp hơn nhiều",
        "Cổ phiếu Y vì dao động mạnh hơn",
        "Cả hai như nhau",
        "Không đầu tư"
      ],
      "ans": 0,
      "exp": "• Cổ phiếu X có độ lệch chuẩn nhỏ hơn nên giá ít biến động sốc hơn."
    },
    {
      "type": "mcq",
      "q": "Kiểm tra khối lượng 5 gói mì tôm (gam): 80, 81, 79, 80, 80. Độ lệch chuẩn khối lượng của 5 gói mì tôm là:",
      "opts": [
        "0,63 gam",
        "1,2 gam",
        "0 gam",
        "2,5 gam"
      ],
      "ans": 0,
      "exp": "• x̄ = 80; s² = 0,4 ⇒ s = √0,4 ≈ 0,63 gam."
    }
  ],
  "15": [
    {
      "type": "mcq",
      "q": "Tập xác định D của hàm số y = √(x - 2) + <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">x - 5</span></span> là:",
      "opts": [
        "D = [2; +∞) \\ {5}",
        "D = [2; +∞)",
        "D = (2; +∞) \\ {5}",
        "D = ℝ \\ {5}"
      ],
      "ans": 0,
      "exp": "• Điều kiện xác định: x - 2 ≥ 0 và x - 5 ≠ 0 ⇔ x ≥ 2 và x ≠ 5.<br>• Tập xác định: D = [2; +∞) \\ {5}."
    },
    {
      "type": "match",
      "q": "Ghép tính đơn điệu của hàm số y = f(x) trên khoảng (a; b) (Cột A) với định nghĩa tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Hàm số đồng biến (tăng)",
          "b": "A. ∀ x₁, x₂ ∈ (a; b): x₁ < x₂ ⇒ f(x₁) < f(x₂)"
        },
        {
          "a": "2. Hàm số nghịch biến (giảm)",
          "b": "B. ∀ x₁, x₂ ∈ (a; b): x₁ < x₂ ⇒ f(x₁) > f(x₂)"
        },
        {
          "a": "3. Hàm số không đổi (hằng số)",
          "b": "C. f(x) = c với mọi x ∈ (a; b)"
        },
        {
          "a": "4. Đồ thị hàm số đồng biến",
          "b": "D. Đi lên từ trái sang phải"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Đồng biến: x tăng thì y tăng (đồ thị đi lên).<br>• Nghịch biến: x tăng thì y giảm (đồ thị đi xuống).<br>• Hàm hằng: đồ thị là đường thẳng nằm ngang.",
      "colA": [
        "1. Hàm số đồng biến (tăng)",
        "2. Hàm số nghịch biến (giảm)",
        "3. Hàm số không đổi (hằng số)",
        "4. Đồ thị hàm số đồng biến"
      ],
      "colB": [
        "A. ∀ x₁, x₂ ∈ (a; b): x₁ < x₂ ⇒ f(x₁) < f(x₂)",
        "B. ∀ x₁, x₂ ∈ (a; b): x₁ < x₂ ⇒ f(x₁) > f(x₂)",
        "C. f(x) = c với mọi x ∈ (a; b)",
        "D. Đi lên từ trái sang phải"
      ]
    },
    {
      "type": "tf",
      "q": "Cho hàm số f(x) = 2x - 3. Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Tập xác định của hàm số là D = ℝ.",
          "ans": true,
          "exp": "Hàm đa thức bậc nhất xác định với mọi x ∈ ℝ (Đúng)."
        },
        {
          "text": "b) Hàm số đồng biến trên ℝ.",
          "ans": true,
          "exp": "Hệ số góc a = 2 > 0 nên hàm số luôn đồng biến trên ℝ (Đúng)."
        },
        {
          "text": "c) Đồ thị hàm số đi qua điểm M(2; 1).",
          "ans": true,
          "exp": "f(2) = 2(2) - 3 = 1 (Đúng)."
        },
        {
          "text": "d) Giao điểm của đồ thị với trục tung Oy là (3/2; 0).",
          "ans": false,
          "exp": "Giao với Oy cho x = 0 ⇒ y = -3, toạ độ là (0; -3). Điểm (3/2; 0) là giao với Ox (Sai)."
        }
      ],
      "stmts": [
        "a) Tập xác định của hàm số là D = ℝ.",
        "b) Hàm số đồng biến trên ℝ.",
        "c) Đồ thị hàm số đi qua điểm M(2; 1).",
        "d) Giao điểm của đồ thị với trục tung Oy là (3/2; 0)."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ]
    },
    {
      "type": "mcq",
      "q": "Tìm tập xác định D của hàm số y = <span class=\"fraction\"><span class=\"numerator\">x + 1</span><span class=\"denominator\">x² - 4</span></span>:",
      "opts": [
        "D = ℝ \\ {-2; 2}",
        "D = ℝ \\ {2}",
        "D = ℝ \\ {-2}",
        "D = (-2; 2)"
      ],
      "ans": 0,
      "exp": "• Mẫu số khác 0: x² - 4 ≠ 0 ⇔ x ≠ ±2.<br>• D = ℝ \\ {-2; 2}."
    },
    {
      "type": "drag",
      "q": "Kéo các khoảng thích hợp vào chỗ trống cho hàm số f(x) = x² - 2x + 3:<br>• Hàm số nghịch biến trên khoảng %%%SLOT_1%%%.<br>• Hàm số đồng biến trên khoảng %%%SLOT_2%%%.<br>• Hoành độ đỉnh của đồ thị là x = %%%SLOT_3%%%.",
      "slots": [
        "(-∞; 1)",
        "(1; +∞)",
        "1"
      ],
      "pool": [
        "(-∞; 1)",
        "(1; +∞)",
        "1",
        "(-∞; 2)",
        "2"
      ],
      "exp": "• Hoành độ đỉnh x = -b/(2a) = 2 / 2 = 1.<br>• a = 1 > 0 nên hàm số nghịch biến trên (-∞; 1) và đồng biến trên (1; +∞).",
      "sentence": "Kéo các khoảng thích hợp vào chỗ trống cho hàm số f(x) = x² - 2x + 3:<br>• Hàm số nghịch biến trên khoảng %%%SLOT_1%%%.<br>• Hàm số đồng biến trên khoảng %%%SLOT_2%%%.<br>• Hoành độ đỉnh của đồ thị là x = %%%SLOT_3%%%.",
      "words": [
        "(-∞; 1)",
        "(1; +∞)",
        "1",
        "(-∞; 2)",
        "2"
      ],
      "ans": [
        "(-∞; 1)",
        "(1; +∞)",
        "1"
      ]
    },
    {
      "type": "mcq",
      "q": "Cho hàm số f(x) = |x - 1| + 2. Giá trị nhỏ nhất của f(x) trên ℝ là:",
      "opts": [
        "2",
        "1",
        "0",
        "3"
      ],
      "ans": 0,
      "exp": "• Vì |x - 1| ≥ 0 với mọi x nên f(x) = |x - 1| + 2 ≥ 2. Dấu bằng xảy ra khi x = 1."
    },
    {
      "type": "mcq",
      "q": "Đồ thị hàm số y = ax + b đi qua hai điểm A(1; 3) và B(-1; -1). Giá trị của a và b là:",
      "opts": [
        "a = 2, b = 1",
        "a = 1, b = 2",
        "a = -2, b = 5",
        "a = 3, b = 0"
      ],
      "ans": 0,
      "exp": "• Hệ phương trình: {a + b = 3; -a + b = -1} ⇒ 2b = 2 ⇒ b = 1, a = 2."
    },
    {
      "type": "mcq",
      "q": "Giá cước taxi của một hãng: 10.000 đ cho 1 km đầu tiên; mỗi km tiếp theo tính 14.000 đ/km. Công thức hàm số tính số tiền cước T(x) (đồng) cho quãng đường x > 1 (km) là:",
      "opts": [
        "T(x) = 10.000 + 14.000(x - 1)",
        "T(x) = 14.000x",
        "T(x) = 10.000x + 14.000",
        "T(x) = 24.000x"
      ],
      "ans": 0,
      "exp": "• 1 km đầu: 10.000 đ.<br>• (x - 1) km tiếp theo: 14.000 · (x - 1) đ.<br>• Tổng cước: T(x) = 10.000 + 14.000(x - 1)."
    },
    {
      "type": "mcq",
      "q": "Nhiệt độ sôi của nước T (°C) phụ thuộc vào độ cao h (mét) so với mực nước biển xấp xỉ theo hàm số bậc nhất T(h) = 100 - 0,0033h. Tại đỉnh Fansipan (cao 3.143 m), nước sôi ở nhiệt độ khoảng:",
      "opts": [
        "89,6 °C",
        "95,0 °C",
        "100 °C",
        "85,2 °C"
      ],
      "ans": 0,
      "exp": "• T(3143) = 100 - 0,0033 · 3143 = 100 - 10,37 = 89,63 °C ≈ 89,6 °C."
    },
    {
      "type": "mcq",
      "q": "Một bể nước đang chứa 200 lít, vòi nước chảy vào với lưu lượng không đổi 25 lít/phút. Hàm số V(t) biểu diễn lượng nước trong bể sau t phút và thời gian để bể đầy 1000 lít là:",
      "opts": [
        "V(t) = 200 + 25t; đầy sau 32 phút",
        "V(t) = 200 + 25t; đầy sau 40 phút",
        "V(t) = 25t; đầy sau 40 phút",
        "V(t) = 1000 - 25t; đầy sau 32 phút"
      ],
      "ans": 0,
      "exp": "• V(t) = 200 + 25t.<br>• Khi đầy 1000 lít: 200 + 25t = 1000 ⇒ 25t = 800 ⇒ t = 32 phút."
    }
  ],
  "16": [
    {
      "type": "mcq",
      "q": "Đồ thị hàm số bậc hai y = ax² + bx + c (a ≠ 0) là một đường parabol có toạ độ đỉnh I là:",
      "opts": [
        "I(-b/(2a); -Δ/(4a))",
        "I(b/(2a); Δ/(4a))",
        "I(-b/a; -c/a)",
        "I(0; c)"
      ],
      "ans": 0,
      "exp": "• Toạ độ đỉnh parabol (SGK Toán 10): I(-b/(2a); -Δ/(4a))."
    },
    {
      "type": "match",
      "q": "Ghép đặc điểm hình học của parabol y = ax² + bx + c (a ≠ 0) (Cột A) với điều kiện đại số tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Bề lõm quay lên trên (có điểm cực tiểu)",
          "b": "A. a > 0"
        },
        {
          "a": "2. Bề lõm quay xuống dưới (có điểm cực đại)",
          "b": "B. a < 0"
        },
        {
          "a": "3. Trục đối xứng của parabol",
          "b": "C. Đường thẳng x = -b/(2a)"
        },
        {
          "a": "4. Giao điểm với trục tung Oy",
          "b": "D. Điểm (0; c)"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• a > 0: bề lõm quay lên.<br>• a < 0: bề lõm quay xuống.<br>• Trục đối xứng: x = -b/(2a).<br>• Giao với Oy: (0; c).",
      "colA": [
        "1. Bề lõm quay lên trên (có điểm cực tiểu)",
        "2. Bề lõm quay xuống dưới (có điểm cực đại)",
        "3. Trục đối xứng của parabol",
        "4. Giao điểm với trục tung Oy"
      ],
      "colB": [
        "A. a > 0",
        "B. a < 0",
        "C. Đường thẳng x = -b/(2a)",
        "D. Điểm (0; c)"
      ]
    },
    {
      "type": "tf",
      "q": "Cho hàm số bậc hai y = -x² + 4x - 3. Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Đỉnh của parabol là I(2; 1).",
          "ans": true,
          "exp": "x_I = -4 / (2 · (-1)) = 2; y_I = -(2)² + 4(2) - 3 = 1 ⇒ I(2; 1) (Đúng)."
        },
        {
          "text": "b) Parabol có bề lõm quay lên trên.",
          "ans": false,
          "exp": "Hệ số a = -1 < 0 nên bề lõm quay xuống dưới (Sai)."
        },
        {
          "text": "c) Hàm số đồng biến trên khoảng (-∞; 2) và nghịch biến trên khoảng (2; +∞).",
          "ans": true,
          "exp": "Với a < 0, hàm tăng trước đỉnh và giảm sau đỉnh (Đúng)."
        },
        {
          "text": "d) Giá trị lớn nhất của hàm số bằng 1.",
          "ans": true,
          "exp": "Do bề lõm quay xuống nên y_max = y_I = 1 (Đúng)."
        }
      ],
      "stmts": [
        "a) Đỉnh của parabol là I(2; 1).",
        "b) Parabol có bề lõm quay lên trên.",
        "c) Hàm số đồng biến trên khoảng (-∞; 2) và nghịch biến trên khoảng (2; +∞).",
        "d) Giá trị lớn nhất của hàm số bằng 1."
      ],
      "ans": [
        true,
        false,
        true,
        true
      ]
    },
    {
      "type": "mcq",
      "q": "Trục đối xứng của parabol y = 2x² - 8x + 5 là đường thẳng:",
      "opts": [
        "x = 2",
        "x = -2",
        "x = 4",
        "y = 2"
      ],
      "ans": 0,
      "exp": "• x = -b / (2a) = -(-8) / (2 · 2) = 8 / 4 = 2."
    },
    {
      "type": "drag",
      "q": "Kéo các thông tin chính xác vào chỗ trống cho parabol y = x² - 4x + 3:<br>• Đỉnh của parabol có toạ độ là %%%SLOT_1%%%.<br>• Giá trị nhỏ nhất của hàm số là %%%SLOT_2%%%.<br>• Các giao điểm với trục Ox là %%%SLOT_3%%%.",
      "slots": [
        "(2; -1)",
        "-1",
        "x = 1 và x = 3"
      ],
      "pool": [
        "(2; -1)",
        "-1",
        "x = 1 và x = 3",
        "(1; 0)",
        "3"
      ],
      "exp": "• x_I = 2, y_I = -1.<br>• y_min = -1.<br>• x² - 4x + 3 = 0 ⇔ x = 1, x = 3.",
      "sentence": "Kéo các thông tin chính xác vào chỗ trống cho parabol y = x² - 4x + 3:<br>• Đỉnh của parabol có toạ độ là %%%SLOT_1%%%.<br>• Giá trị nhỏ nhất của hàm số là %%%SLOT_2%%%.<br>• Các giao điểm với trục Ox là %%%SLOT_3%%%.",
      "words": [
        "(2; -1)",
        "-1",
        "x = 1 và x = 3",
        "(1; 0)",
        "3"
      ],
      "ans": [
        "(2; -1)",
        "-1",
        "x = 1 và x = 3"
      ]
    },
    {
      "type": "mcq",
      "q": "Biết parabol y = ax² + bx + 2 đi qua điểm M(1; 5) và có trục đối xứng x = -1. Giá trị của a và b là:",
      "opts": [
        "a = 1, b = 2",
        "a = 2, b = 1",
        "a = -1, b = 4",
        "a = 3, b = 0"
      ],
      "ans": 0,
      "exp": "• Đi qua (1; 5): a(1)² + b(1) + 2 = 5 ⇔ a + b = 3.<br>• Trục x = -1: -b/(2a) = -1 ⇔ b = 2a.<br>• Thay b = 2a vào: a + 2a = 3 ⇒ 3a = 3 ⇒ a = 1, b = 2."
    },
    {
      "type": "mcq",
      "q": "Tìm giá trị lớn nhất của hàm số y = -2x² + 4x + 6 trên đoạn [0; 3]:",
      "opts": [
        "8 (tại x = 1)",
        "6 (tại x = 0)",
        "0 (tại x = 3)",
        "10"
      ],
      "ans": 0,
      "exp": "• Đỉnh x = -4 / (-4) = 1 ∈ [0; 3].<br>• y(0) = 6; y(1) = -2(1) + 4(1) + 6 = 8; y(3) = -2(9) + 4(3) + 6 = 0.<br>• GTLN là 8 tại x = 1."
    },
    {
      "type": "mcq",
      "q": "Một quả bóng đá được sút lên từ mặt đất có quỹ đạo là một cung parabol mô tả bởi hàm số h(t) = -5t² + 20t (h tính bằng mét, t tính bằng giây). Độ cao cực đại mà quả bóng đạt được là:",
      "opts": [
        "20 mét (sau 2 giây)",
        "25 mét",
        "15 mét",
        "10 mét"
      ],
      "ans": 0,
      "exp": "• h(t) = -5t² + 20t.<br>• Đỉnh đạt tại t = -20 / (2 · (-5)) = 2 s.<br>• h_max = h(2) = -5(4) + 20(2) = -20 + 40 = 20 m."
    },
    {
      "type": "mcq",
      "q": "Một bác nông dân dùng 60 mét lưới rào một mảnh vườn hình chữ nhật tựa vào một bờ tường thẳng (không cần rào phía bờ tường). Kích thước chiều rộng x (mét) vuông góc bờ tường để mảnh vườn có diện tích lớn nhất là:",
      "opts": [
        "x = 15 m (Diện tích cực đại 450 m²)",
        "x = 20 m",
        "x = 10 m",
        "x = 30 m"
      ],
      "ans": 0,
      "exp": "• Chiều dài mảnh vườn tựa tường: L = 60 - 2x.<br>• Diện tích: S(x) = x(60 - 2x) = -2x² + 60x.<br>• Đỉnh parabol: x = -60 / (2 · (-2)) = 15 m.<br>• S_max = 15 · (60 - 30) = 450 m²."
    },
    {
      "type": "mcq",
      "q": "Một doanh nghiệp bán sản phẩm với giá bán p(x) = 120 - 2x (nghìn đồng/sản phẩm), với x là số sản phẩm bán ra. Doanh thu R(x) = x · p(x) đạt giá trị cao nhất khi sản xuất và bán bao nhiêu sản phẩm?",
      "opts": [
        "30 sản phẩm (Doanh thu 1,8 triệu đồng)",
        "60 sản phẩm",
        "40 sản phẩm",
        "20 sản phẩm"
      ],
      "ans": 0,
      "exp": "• R(x) = x(120 - 2x) = -2x² + 120x.<br>• Đỉnh: x = -120 / (-4) = 30 sản phẩm.<br>• R_max = 30(120 - 60) = 1800 nghìn = 1,8 triệu đồng."
    }
  ],
  "17": [
    {
      "type": "mcq",
      "q": "Định lý về dấu của tam thức bậc hai f(x) = ax² + bx + c (a ≠ 0) khẳng định rằng khi biệt thức Δ < 0 thì:",
      "opts": [
        "f(x) luôn cùng dấu với hệ số a với mọi x ∈ ℝ",
        "f(x) luôn trái dấu với hệ số a với mọi x ∈ ℝ",
        "f(x) luôn dương với mọi x ∈ ℝ",
        "f(x) luôn âm với mọi x ∈ ℝ"
      ],
      "ans": 0,
      "exp": "• Định lý dấu tam thức bậc hai (SGK Toán 10): Khi Δ < 0, tam thức f(x) luôn cùng dấu với hệ số a với mọi x ∈ ℝ."
    },
    {
      "type": "match",
      "q": "Ghép điều kiện nghiệm của tam thức bậc hai f(x) = ax² + bx + c (với a > 0) (Cột A) với dấu tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Δ < 0",
          "b": "A. f(x) > 0 với mọi x ∈ ℝ"
        },
        {
          "a": "2. Δ = 0",
          "b": "B. f(x) > 0 với mọi x ≠ -b/(2a) và f(-b/(2a)) = 0"
        },
        {
          "a": "3. Δ > 0 (có 2 nghiệm phân biệt x₁ < x₂)",
          "b": "C. Trong trái dấu (f(x) < 0), ngoài cùng dấu (f(x) > 0)"
        },
        {
          "a": "4. f(x) ≤ 0 với mọi x ∈ ℝ",
          "b": "D. a < 0 và Δ ≤ 0"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Quy tắc xét dấu 'Trong trái, ngoài cùng'.<br>• Khi Δ < 0, a > 0 thì f(x) > 0 ∀x.<br>• f(x) ≤ 0 ∀x ⇔ a < 0 và Δ ≤ 0.",
      "colA": [
        "1. Δ < 0",
        "2. Δ = 0",
        "3. Δ > 0 (có 2 nghiệm phân biệt x₁ < x₂)",
        "4. f(x) ≤ 0 với mọi x ∈ ℝ"
      ],
      "colB": [
        "A. f(x) > 0 với mọi x ∈ ℝ",
        "B. f(x) > 0 với mọi x ≠ -b/(2a) và f(-b/(2a)) = 0",
        "C. Trong trái dấu (f(x) < 0), ngoài cùng dấu (f(x) > 0)",
        "D. a < 0 và Δ ≤ 0"
      ]
    },
    {
      "type": "tf",
      "q": "Cho bất phương trình x² - 5x + 6 ≤ 0. Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Tam thức bậc hai x² - 5x + 6 có hai nghiệm phân biệt là x₁ = 2 và x₂ = 3.",
          "ans": true,
          "exp": "x² - 5x + 6 = (x - 2)(x - 3) = 0 ⇔ x = 2 hoặc x = 3 (Đúng)."
        },
        {
          "text": "b) Hệ số a = 1 > 0.",
          "ans": true,
          "exp": "a = 1 > 0 (Đúng)."
        },
        {
          "text": "c) Tập nghiệm của bất phương trình là S = [2; 3].",
          "ans": true,
          "exp": "Quy tắc 'trong trái ngoài cùng': lấy khoảng trong hai nghiệm kể cả đầu mút vì có dấu ≤ (Đúng)."
        },
        {
          "text": "d) Bất phương trình có vô số nghiệm nguyên.",
          "ans": false,
          "exp": "Các nghiệm nguyên trong [2; 3] chỉ có {2; 3}, gồm 2 nghiệm (Sai)."
        }
      ],
      "stmts": [
        "a) Tam thức bậc hai x² - 5x + 6 có hai nghiệm phân biệt là x₁ = 2 và x₂ = 3.",
        "b) Hệ số a = 1 > 0.",
        "c) Tập nghiệm của bất phương trình là S = [2; 3].",
        "d) Bất phương trình có vô số nghiệm nguyên."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ]
    },
    {
      "type": "mcq",
      "q": "Tập nghiệm của bất phương trình -x² + 4x - 4 ≥ 0 là:",
      "opts": [
        "{2}",
        "ℝ",
        "∅",
        "[2; +∞)"
      ],
      "ans": 0,
      "exp": "• -x² + 4x - 4 = -(x - 2)² ≤ 0 với mọi x.<br>• BPT -(x - 2)² ≥ 0 chỉ thỏa mãn khi dấu bằng xảy ra: x - 2 = 0 ⇔ x = 2.<br>• Tập nghiệm S = {2}."
    },
    {
      "type": "drag",
      "q": "Kéo các tập nghiệm thích hợp vào chỗ trống:<br>• BPT x² - 4 > 0 có tập nghiệm là %%%SLOT_1%%%.<br>• BPT x² + 1 > 0 có tập nghiệm là %%%SLOT_2%%%.<br>• BPT x² + 2x + 3 < 0 có tập nghiệm là %%%SLOT_3%%%.",
      "slots": [
        "(-∞; -2) ∪ (2; +∞)",
        "ℝ",
        "∅"
      ],
      "pool": [
        "(-∞; -2) ∪ (2; +∞)",
        "ℝ",
        "∅",
        "[-2; 2]",
        "(-2; 2)"
      ],
      "exp": "• x² - 4 > 0 ⇔ x < -2 hoặc x > 2.<br>• x² + 1 > 0 đúng với mọi x ∈ ℝ.<br>• x² + 2x + 3 = (x+1)² + 2 > 0 nên vô nghiệm (∅).",
      "sentence": "Kéo các tập nghiệm thích hợp vào chỗ trống:<br>• BPT x² - 4 > 0 có tập nghiệm là %%%SLOT_1%%%.<br>• BPT x² + 1 > 0 có tập nghiệm là %%%SLOT_2%%%.<br>• BPT x² + 2x + 3 < 0 có tập nghiệm là %%%SLOT_3%%%.",
      "words": [
        "(-∞; -2) ∪ (2; +∞)",
        "ℝ",
        "∅",
        "[-2; 2]",
        "(-2; 2)"
      ],
      "ans": [
        "(-∞; -2) ∪ (2; +∞)",
        "ℝ",
        "∅"
      ]
    },
    {
      "type": "mcq",
      "q": "Tìm tất cả các giá trị của tham số m để bất phương trình x² - 2mx + 4 > 0 nghiệm đúng với mọi x ∈ ℝ:",
      "opts": [
        "-2 < m < 2",
        "m < -2 hoặc m > 2",
        "m ≤ -2 hoặc m ≥ 2",
        "-2 ≤ m ≤ 2"
      ],
      "ans": 0,
      "exp": "• f(x) > 0 ∀x ∈ ℝ ⇔ a = 1 > 0 (luôn đúng) và Δ' < 0.<br>• Δ' = m² - 4 < 0 ⇔ -2 < m < 2."
    },
    {
      "type": "mcq",
      "q": "Tập nghiệm của bất phương trình (x - 1)(3 - x) > 0 là:",
      "opts": [
        "(1; 3)",
        "(-∞; 1) ∪ (3; +∞)",
        "[1; 3]",
        "(-∞; 1] ∪ [3; +∞)"
      ],
      "ans": 0,
      "exp": "• (x - 1)(3 - x) = -x² + 4x - 3 > 0.<br>• a = -1 < 0, nghiệm 1 và 3. Trong trái dấu với a nên mang dấu dương: (1; 3)."
    },
    {
      "type": "mcq",
      "q": "Một công ty sản xuất bóng bay khí heli xác định chi phí sản xuất x nghìn quả bóng là C(x) = x² - 40x + 500 (triệu đồng). Số lượng sản phẩm x tối thiểu cần sản xuất để chi phí không vượt quá 200 triệu đồng là:",
      "opts": [
        "10 nghìn quả bóng (x ∈ [10; 30])",
        "20 nghìn quả bóng",
        "5 nghìn quả bóng",
        "30 nghìn quả bóng"
      ],
      "ans": 0,
      "exp": "• C(x) ≤ 200 ⇔ x² - 40x + 500 ≤ 200 ⇔ x² - 40x + 300 ≤ 0.<br>• (x - 10)(x - 30) ≤ 0 ⇔ 10 ≤ x ≤ 30.<br>• Số lượng tối thiểu là 10 nghìn quả bóng."
    },
    {
      "type": "mcq",
      "q": "Một vật thể rơi tự do từ độ cao 80 m với gia tốc g = 10 m/s². Độ cao của vật sau t giây là h(t) = 80 - 5t² (mét). Khoảng thời gian vật thể ở độ cao lớn hơn 35 mét là:",
      "opts": [
        "0 ≤ t < 3 giây",
        "t > 3 giây",
        "0 ≤ t ≤ 4 giây",
        "2 < t < 4 giây"
      ],
      "ans": 0,
      "exp": "• h(t) > 35 ⇔ 80 - 5t² > 35 ⇔ 5t² < 45 ⇔ t² < 9.<br>• Vì t ≥ 0 nên 0 ≤ t < 3 giây."
    },
    {
      "type": "mcq",
      "q": "Lợi nhuận P(x) (triệu đồng) bán điện thoại theo mức giảm giá x (trăm nghìn đồng) được ước tính: P(x) = -x² + 8x + 20. Để việc kinh doanh chắc chắn có lãi (P(x) > 0), mức giảm giá x cần thỏa mãn:",
      "opts": [
        "0 ≤ x < 10 (giảm dưới 1 triệu đồng)",
        "x > 10",
        "2 < x < 8",
        "x = 4"
      ],
      "ans": 0,
      "exp": "• P(x) > 0 ⇔ -x² + 8x + 20 > 0 ⇔ x² - 8x - 20 < 0.<br>• (x + 2)(x - 10) < 0 ⇔ -2 < x < 10.<br>• Vì x ≥ 0 nên 0 ≤ x < 10 (tức giảm giá từ 0 đến dưới 1 triệu đồng)."
    }
  ],
  "18": [
    {
      "type": "mcq",
      "q": "Phương trình dạng √(ax² + bx + c) = dx + e được giải bằng phương pháp bình phương hai vế sau khi đặt điều kiện:",
      "opts": [
        "dx + e ≥ 0",
        "ax² + bx + c ≥ 0",
        "ax² + bx + c > 0",
        "dx + e ≤ 0"
      ],
      "ans": 0,
      "exp": "• Quy tắc chuẩn SGK Toán 10: Bình phương hai vế khi dx + e ≥ 0, hoặc bình phương hai vế rồi thử lại nghiệm để loại nghiệm ngoại lai."
    },
    {
      "type": "match",
      "q": "Ghép dạng phương trình chứa căn (Cột A) với phương pháp giải chuẩn (Cột B):",
      "pairs": [
        {
          "a": "1. √(f(x)) = √(g(x))",
          "b": "A. Bình phương hai vế và đặt điều kiện f(x) ≥ 0 (hoặc g(x) ≥ 0)"
        },
        {
          "a": "2. √(f(x)) = g(x)",
          "b": "B. Điều kiện g(x) ≥ 0 rồi bình phương hai vế: f(x) = [g(x)]²"
        },
        {
          "a": "3. Thử lại nghiệm",
          "b": "C. Thay các nghiệm tìm được sau khi bình phương vào phương trình ban đầu"
        },
        {
          "a": "4. Nghiệm ngoại lai",
          "b": "D. Nghiệm xuất hiện do phép biến đổi hệ quả không tương đương"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Quy tắc giải phương trình vô tỉ cơ bản lớp 10.",
      "colA": [
        "1. √(f(x)) = √(g(x))",
        "2. √(f(x)) = g(x)",
        "3. Thử lại nghiệm",
        "4. Nghiệm ngoại lai"
      ],
      "colB": [
        "A. Bình phương hai vế và đặt điều kiện f(x) ≥ 0 (hoặc g(x) ≥ 0)",
        "B. Điều kiện g(x) ≥ 0 rồi bình phương hai vế: f(x) = [g(x)]²",
        "C. Thay các nghiệm tìm được sau khi bình phương vào phương trình ban đầu",
        "D. Nghiệm xuất hiện do phép biến đổi hệ quả không tương đương"
      ]
    },
    {
      "type": "tf",
      "q": "Cho phương trình √(x² - 3x + 2) = x - 1. Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Điều kiện để vế phải không âm là x ≥ 1.",
          "ans": true,
          "exp": "x - 1 ≥ 0 ⇔ x ≥ 1 (Đúng)."
        },
        {
          "text": "b) Bình phương hai vế ta được x² - 3x + 2 = x² - 2x + 1.",
          "ans": true,
          "exp": "(x - 1)² = x² - 2x + 1 (Đúng)."
        },
        {
          "text": "c) Phương trình có nghiệm x = 1.",
          "ans": true,
          "exp": "-3x + 2 = -2x + 1 ⇔ x = 1. Nghiệm x = 1 thỏa mãn điều kiện x ≥ 1 (Đúng)."
        },
        {
          "text": "d) Phương trình có 2 nghiệm phân biệt.",
          "ans": false,
          "exp": "Phương trình chỉ có duy nhất 1 nghiệm x = 1 (Sai)."
        }
      ],
      "stmts": [
        "a) Điều kiện để vế phải không âm là x ≥ 1.",
        "b) Bình phương hai vế ta được x² - 3x + 2 = x² - 2x + 1.",
        "c) Phương trình có nghiệm x = 1.",
        "d) Phương trình có 2 nghiệm phân biệt."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ]
    },
    {
      "type": "mcq",
      "q": "Số nghiệm của phương trình √(2x² - 5x + 3) = √(x² - 2x + 1) là:",
      "opts": [
        "2 nghiệm (x = 1 và x = 2)",
        "1 nghiệm",
        "0 nghiệm",
        "3 nghiệm"
      ],
      "ans": 0,
      "exp": "• Bình phương: 2x² - 5x + 3 = x² - 2x + 1 ⇔ x² - 3x + 2 = 0 ⇔ x = 1 hoặc x = 2.<br>• Thử lại:<br>- x = 1: vế trái √0 = vế phải √0 = 0 (thỏa mãn).<br>- x = 2: vế trái √(8 - 10 + 3) = 1, vế phải √(4 - 4 + 1) = 1 (thỏa mãn).<br>• Phương trình có 2 nghiệm."
    },
    {
      "type": "drag",
      "q": "Kéo nghiệm chính xác vào vị trí giải phương trình √(3x + 1) = x - 1:<br>• Nghiệm đại số sau khi bình phương là x = 0 và x = %%%SLOT_1%%%.<br>• Điều kiện vế phải x ≥ %%%SLOT_2%%%.<br>• Nghiệm thực sự của phương trình là x = %%%SLOT_3%%%.",
      "slots": [
        "5",
        "1",
        "5"
      ],
      "pool": [
        "5",
        "1",
        "0",
        "-1",
        "4"
      ],
      "exp": "• 3x + 1 = (x - 1)² = x² - 2x + 1 ⇔ x² - 5x = 0 ⇔ x = 0 hoặc x = 5.<br>• Điều kiện x - 1 ≥ 0 ⇔ x ≥ 1.<br>• Do đó loại x = 0, nhận x = 5.",
      "sentence": "Kéo nghiệm chính xác vào vị trí giải phương trình √(3x + 1) = x - 1:<br>• Nghiệm đại số sau khi bình phương là x = 0 và x = %%%SLOT_1%%%.<br>• Điều kiện vế phải x ≥ %%%SLOT_2%%%.<br>• Nghiệm thực sự của phương trình là x = %%%SLOT_3%%%.",
      "words": [
        "5",
        "1",
        "0",
        "-1",
        "4"
      ],
      "ans": [
        "5",
        "1",
        "5"
      ]
    },
    {
      "type": "mcq",
      "q": "Tổng các nghiệm của phương trình √(x² - 4x + 3) = x - 1 là:",
      "opts": [
        "1 (chỉ có nghiệm duy nhất x = 1)",
        "3",
        "4",
        "0"
      ],
      "ans": 0,
      "exp": "• x² - 4x + 3 = (x - 1)² = x² - 2x + 1 ⇔ -2x = -2 ⇔ x = 1.<br>• Thử lại x = 1: √0 = 0 (thỏa mãn). Nghiệm duy nhất x = 1."
    },
    {
      "type": "mcq",
      "q": "Phương trình √(x + 3) = 2x - 1 có tập nghiệm là:",
      "opts": [
        "S = {1}",
        "S = {-1/4; 1}",
        "S = {-1/4}",
        "S = ∅"
      ],
      "ans": 0,
      "exp": "• Điều kiện: 2x - 1 ≥ 0 ⇔ x ≥ 1/2.<br>• x + 3 = 4x² - 4x + 1 ⇔ 4x² - 5x - 2 = 0.<br>• Nghiệm x = (5 ± √57)/8. x ≈ 1,57 > 1/2 thỏa mãn."
    },
    {
      "type": "mcq",
      "q": "Một sợi dây cáp nối từ đỉnh một cột ăng-ten cao h = 12 m đến cọc néo trên mặt đất cách chân cột khoảng cách d (mét). Biết chiều dài dây cáp là L = √(d² + 144). Để chiều dài cáp bằng đúng d + 4 (mét), khoảng cách d phải là:",
      "opts": [
        "16 m",
        "12 m",
        "20 m",
        "18 m"
      ],
      "ans": 0,
      "exp": "• √(d² + 144) = d + 4.<br>• Bình phương: d² + 144 = d² + 8d + 16 ⇔ 8d = 128 ⇔ d = 16 m."
    },
    {
      "type": "mcq",
      "q": "Hai ô tô xuất phát cùng lúc từ ngã tư đường vuông góc. Xe A đi về hướng Bắc với vận tốc 30 km/h, xe B đi về hướng Đông với vận tốc 40 km/h. Khoảng cách d(t) giữa hai xe sau t giờ là d(t) = √((30t)² + (40t)²) = 50t. Sau bao lâu khoảng cách giữa hai xe là 125 km?",
      "opts": [
        "2,5 giờ (2 giờ 30 phút)",
        "3,0 giờ",
        "2,0 giờ",
        "1,5 giờ"
      ],
      "ans": 0,
      "exp": "• 50t = 125 ⇒ t = 125 / 50 = 2,5 giờ = 2 giờ 30 phút."
    },
    {
      "type": "mcq",
      "q": "Tầm nhìn xa d (hải lý) từ đài quan sát trên ngọn hải đăng có độ cao h (feet) so với mực nước biển xấp xỉ theo công thức d = 1,17√h. Để người gác hải đăng có tầm nhìn xa 11,7 hải lý thì ngọn hải đăng cần có độ cao là:",
      "opts": [
        "100 feet (khoảng 30,5 m)",
        "10 feet",
        "120 feet",
        "80 feet"
      ],
      "ans": 0,
      "exp": "• 1,17√h = 11,7 ⇒ √h = 10 ⇒ h = 100 feet."
    }
  ],
  "19": [
    {
      "type": "mcq",
      "q": "Vectơ nào sau đây là một <b>vectơ chỉ phương</b> của đường thẳng có phương trình tổng quát 2x - 3y + 6 = 0?",
      "opts": [
        "u⃗ = (3; 2)",
        "u⃗ = (2; -3)",
        "u⃗ = (-3; 2)",
        "u⃗ = (2; 3)"
      ],
      "ans": 0,
      "exp": "• Đường thẳng ax + by + c = 0 có VTPT n⃗ = (a; b) = (2; -3).<br>• VTCP u⃗ vuông góc với n⃗ nên u⃗ = (-b; a) = (3; 2)."
    },
    {
      "type": "match",
      "q": "Ghép các dạng phương trình đường thẳng (Cột A) với công thức tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Phương trình tổng quát",
          "b": "A. ax + by + c = 0 (với a² + b² > 0)"
        },
        {
          "a": "2. Phương trình tham số đi qua M(x₀; y₀) có VTCP u⃗ = (u₁; u₂)",
          "b": "B. {x = x₀ + u₁t; y = y₀ + u₂t}"
        },
        {
          "a": "3. Phương trình chính tắc",
          "b": "C. (x - x₀)/u₁ = (y - y₀)/u₂"
        },
        {
          "a": "4. Phương trình theo đoạn chắn qua (a; 0) và (0; b)",
          "b": "D. x/a + y/b = 1"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Các dạng phương trình đường thẳng trong mặt phẳng toạ độ Oxy.",
      "colA": [
        "1. Phương trình tổng quát",
        "2. Phương trình tham số đi qua M(x₀; y₀) có VTCP u⃗ = (u₁; u₂)",
        "3. Phương trình chính tắc",
        "4. Phương trình theo đoạn chắn qua (a; 0) và (0; b)"
      ],
      "colB": [
        "A. ax + by + c = 0 (với a² + b² > 0)",
        "B. {x = x₀ + u₁t; y = y₀ + u₂t}",
        "C. (x - x₀)/u₁ = (y - y₀)/u₂",
        "D. x/a + y/b = 1"
      ]
    },
    {
      "type": "tf",
      "q": "Cho đường thẳng d: {x = 1 + 2t; y = -3 + 4t} (t ∈ ℝ). Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Đường thẳng d đi qua điểm A(1; -3).",
          "ans": true,
          "exp": "Khi t = 0 thì x = 1, y = -3 nên A(1; -3) ∈ d (Đúng)."
        },
        {
          "text": "b) Một vectơ chỉ phương của d là u⃗ = (2; 4).",
          "ans": true,
          "exp": "Hệ số của t là (2; 4) nên u⃗ = (2; 4) là VTCP (Đúng)."
        },
        {
          "text": "c) Điểm B(3; 1) thuộc đường thẳng d.",
          "ans": true,
          "exp": "Với t = 1: x = 1 + 2(1) = 3; y = -3 + 4(1) = 1 nên B(3; 1) ∈ d (Đúng)."
        },
        {
          "text": "d) Phương trình tổng quát của d là 4x + 2y + 2 = 0.",
          "ans": false,
          "exp": "u⃗ = (1; 2) ⇒ n⃗ = (2; -1). PTTQ: 2(x - 1) - 1(y + 3) = 0 ⇔ 2x - y - 5 = 0 (Sai)."
        }
      ],
      "stmts": [
        "a) Đường thẳng d đi qua điểm A(1; -3).",
        "b) Một vectơ chỉ phương của d là u⃗ = (2; 4).",
        "c) Điểm B(3; 1) thuộc đường thẳng d.",
        "d) Phương trình tổng quát của d là 4x + 2y + 2 = 0."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ]
    },
    {
      "type": "mcq",
      "q": "Phương trình tổng quát của đường thẳng đi qua điểm M(2; -1) và nhận n⃗ = (3; 4) làm vectơ pháp tuyến là:",
      "opts": [
        "3x + 4y - 2 = 0",
        "3x + 4y + 2 = 0",
        "4x - 3y - 11 = 0",
        "3x - 4y - 10 = 0"
      ],
      "ans": 0,
      "exp": "• a(x - x₀) + b(y - y₀) = 0 ⇔ 3(x - 2) + 4(y + 1) = 0 ⇔ 3x + 4y - 2 = 0."
    },
    {
      "type": "drag",
      "q": "Kéo các hệ số thích hợp vào phương trình đường thẳng:<br>• Đường thẳng đi qua hai điểm A(1; 0) và B(0; 2) có phương trình đoạn chắn là: x / %%%SLOT_1%%% + y / %%%SLOT_2%%% = %%%SLOT_3%%%.",
      "slots": [
        "1",
        "2",
        "1"
      ],
      "pool": [
        "1",
        "2",
        "1",
        "0",
        "-1"
      ],
      "exp": "• Phương trình đoạn chắn: x/a + y/b = 1 với a = 1, b = 2.",
      "sentence": "Kéo các hệ số thích hợp vào phương trình đường thẳng:<br>• Đường thẳng đi qua hai điểm A(1; 0) và B(0; 2) có phương trình đoạn chắn là: x / %%%SLOT_1%%% + y / %%%SLOT_2%%% = %%%SLOT_3%%%.",
      "words": [
        "1",
        "2",
        "1",
        "0",
        "-1"
      ],
      "ans": [
        "1",
        "2",
        "1"
      ]
    },
    {
      "type": "mcq",
      "q": "Cho hai điểm A(1; 3) và B(5; 1). Phương trình đường trung trực của đoạn thẳng AB là:",
      "opts": [
        "2x - y - 4 = 0",
        "2x + y - 8 = 0",
        "x - 2y + 1 = 0",
        "x + 2y - 7 = 0"
      ],
      "ans": 0,
      "exp": "• Trung điểm I: x_I = 3, y_I = 2 ⇒ I(3; 2).<br>• AB⃗ = (4; -2) cùng phương n⃗ = (2; -1).<br>• Trung trực: 2(x - 3) - 1(y - 2) = 0 ⇔ 2x - y - 4 = 0."
    },
    {
      "type": "mcq",
      "q": "Hệ số góc k của đường thẳng có phương trình 3x - y + 5 = 0 là:",
      "opts": [
        "k = 3",
        "k = -3",
        "k = 1/3",
        "k = -1/3"
      ],
      "ans": 0,
      "exp": "• y = 3x + 5 ⇒ hệ số góc k = 3."
    },
    {
      "type": "mcq",
      "q": "Trong bản đồ quy hoạch một khu đô thị, tuyến ống dẫn nước sạch chạy thẳng qua trạm phân phối A(2; 3) và trạm B(6; 11) (đơn vị: km). Phương trình đường ống dẫn nước trên bản đồ là:",
      "opts": [
        "2x - y - 1 = 0",
        "2x + y - 7 = 0",
        "x - 2y + 4 = 0",
        "4x - 8y + 16 = 0"
      ],
      "ans": 0,
      "exp": "• AB⃗ = (4; 8) = 4(1; 2) ⇒ n⃗ = (2; -1).<br>• Đường thẳng qua A(2; 3): 2(x - 2) - (y - 3) = 0 ⇔ 2x - y - 1 = 0."
    },
    {
      "type": "mcq",
      "q": "Một máy bay hạ cánh theo đường bay thẳng nghiêng góc dốc đều đặn từ độ cao 2 km tại điểm cách đầu đường băng 20 km. Nếu chọn gốc toạ độ O tại đầu đường băng, phương trình quỹ đạo hạ cánh trên mặt phẳng thẳng đứng Oxy là:",
      "opts": [
        "x + 10y - 20 = 0 (với 0 ≤ x ≤ 20)",
        "x - 10y = 0",
        "10x + y - 20 = 0",
        "x + 5y - 10 = 0"
      ],
      "ans": 0,
      "exp": "• Máy bay đi qua điểm A(20; 2) và đầu đường băng O(0; 0) (hoặc tiếp đất tại (0; 0)). Đường thẳng qua (0; 0) và (20; 2) là y = (2/20)x = 0,1x ⇔ x - 10y = 0."
    },
    {
      "type": "mcq",
      "q": "Một chiếc tàu cứu hộ neo đậu tại cảng toạ độ A(1; 2) nhận lệnh cứu nạn một thuyền câu đang trôi dạt theo hướng vectơ u⃗ = (3; 4). Phương trình đường đi thẳng của tàu cứu hộ để tiếp cận nhanh nhất là:",
      "opts": [
        "{x = 1 + 3t; y = 2 + 4t} (t ≥ 0)",
        "{x = 3 + t; y = 4 + 2t}",
        "4x - 3y + 2 = 0",
        "3x + 4y - 11 = 0"
      ],
      "ans": 0,
      "exp": "• Đường thẳng qua A(1; 2) có VTCP u⃗ = (3; 4) có dạng tham số: {x = 1 + 3t; y = 2 + 4t}."
    }
  ],
  "20": [
    {
      "type": "mcq",
      "q": "Khoảng cách từ điểm M(x₀; y₀) đến đường thẳng Δ: ax + by + c = 0 được tính bởi công thức:",
      "opts": [
        "d(M, Δ) = |ax₀ + by₀ + c| / √(a² + b²)",
        "d(M, Δ) = (ax₀ + by₀ + c) / √(a² + b²)",
        "d(M, Δ) = |ax₀ + by₀ + c| / (a² + b²)",
        "d(M, Δ) = √(ax₀² + by₀²)"
      ],
      "ans": 0,
      "exp": "• Công thức khoảng cách từ điểm đến đường thẳng (SGK Toán 10): d(M, Δ) = |ax₀ + by₀ + c| / √(a² + b²)."
    },
    {
      "type": "match",
      "q": "Ghép vị trí tương đối của hai đường thẳng Δ₁: a₁x + b₁y + c₁ = 0 và Δ₂: a₂x + b₂y + c₂ = 0 (Cột A) với điều kiện đại số (Cột B):",
      "pairs": [
        {
          "a": "1. Cắt nhau",
          "b": "A. a₁/a₂ ≠ b₁/b₂"
        },
        {
          "a": "2. Song song",
          "b": "B. a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
        },
        {
          "a": "3. Trùng nhau",
          "b": "C. a₁/a₂ = b₁/b₂ = c₁/c₂"
        },
        {
          "a": "4. Vuông góc",
          "b": "D. a₁a₂ + b₁b₂ = 0"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Vị trí tương đối và điều kiện vuông góc của 2 đường thẳng.",
      "colA": [
        "1. Cắt nhau",
        "2. Song song",
        "3. Trùng nhau",
        "4. Vuông góc"
      ],
      "colB": [
        "A. a₁/a₂ ≠ b₁/b₂",
        "B. a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
        "C. a₁/a₂ = b₁/b₂ = c₁/c₂",
        "D. a₁a₂ + b₁b₂ = 0"
      ]
    },
    {
      "type": "tf",
      "q": "Cho hai đường thẳng d₁: 3x - 4y + 5 = 0 và d₂: 3x - 4y - 15 = 0. Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Hai đường thẳng d₁ và d₂ song song với nhau.",
          "ans": true,
          "exp": "3/3 = -4/(-4) = 1 ≠ 5/(-15) nên d₁ // d₂ (Đúng)."
        },
        {
          "text": "b) Khoảng cách từ gốc toạ độ O(0; 0) đến d₁ bằng 1.",
          "ans": true,
          "exp": "d(O, d₁) = |5| / √(3² + 4²) = 5 / 5 = 1 (Đúng)."
        },
        {
          "text": "c) Khoảng cách giữa hai đường thẳng d₁ và d₂ bằng 4.",
          "ans": true,
          "exp": "Lấy M(0; 5/4) ∈ d₁. d(M, d₂) = |3(0) - 4(5/4) - 15| / 5 = |-5 - 15| / 5 = 20 / 5 = 4 (Đúng)."
        },
        {
          "text": "d) Điểm A(1; 2) cách đều hai đường thẳng d₁ và d₂.",
          "ans": false,
          "exp": "d(A, d₁) = |3 - 8 + 5|/5 = 0; d(A, d₂) = |-20|/5 = 4. Không cách đều (Sai)."
        }
      ],
      "stmts": [
        "a) Hai đường thẳng d₁ và d₂ song song với nhau.",
        "b) Khoảng cách từ gốc toạ độ O(0; 0) đến d₁ bằng 1.",
        "c) Khoảng cách giữa hai đường thẳng d₁ và d₂ bằng 4.",
        "d) Điểm A(1; 2) cách đều hai đường thẳng d₁ và d₂."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ]
    },
    {
      "type": "mcq",
      "q": "Khoảng cách từ điểm M(1; -2) đến đường thẳng Δ: 3x - 4y + 4 = 0 là:",
      "opts": [
        "3",
        "5",
        "15",
        "1"
      ],
      "ans": 0,
      "exp": "• d = |3(1) - 4(-2) + 4| / √(3² + (-4)²) = |3 + 8 + 4| / 5 = 15 / 5 = 3."
    },
    {
      "type": "drag",
      "q": "Kéo góc tương ứng vào chỗ trống cho hai đường thẳng:<br>• Hai đường thẳng vuông góc có góc giữa chúng bằng %%%SLOT_1%%%.<br>• Hai đường thẳng song song hoặc trùng nhau quy ước góc bằng %%%SLOT_2%%%.<br>• Góc giữa hai đường thẳng d₁: x - y = 0 và d₂: x + y = 0 bằng %%%SLOT_3%%%.",
      "slots": [
        "90°",
        "0°",
        "90°"
      ],
      "pool": [
        "90°",
        "0°",
        "45°",
        "60°",
        "180°"
      ],
      "exp": "• Vuông góc: 90°.<br>• Song song/trùng: 0°.<br>• d₁ có n₁=(1; -1), d₂ có n₂=(1; 1) có n₁·n₂ = 0 nên vuông góc (90°).",
      "sentence": "Kéo góc tương ứng vào chỗ trống cho hai đường thẳng:<br>• Hai đường thẳng vuông góc có góc giữa chúng bằng %%%SLOT_1%%%.<br>• Hai đường thẳng song song hoặc trùng nhau quy ước góc bằng %%%SLOT_2%%%.<br>• Góc giữa hai đường thẳng d₁: x - y = 0 và d₂: x + y = 0 bằng %%%SLOT_3%%%.",
      "words": [
        "90°",
        "0°",
        "45°",
        "60°",
        "180°"
      ],
      "ans": [
        "90°",
        "0°",
        "90°"
      ]
    },
    {
      "type": "mcq",
      "q": "Góc giữa hai đường thẳng d₁: x + √3y + 1 = 0 và d₂: x - √3y + 2 = 0 là:",
      "opts": [
        "60°",
        "30°",
        "90°",
        "45°"
      ],
      "ans": 0,
      "exp": "• n₁ = (1; √3); n₂ = (1; -√3).<br>• cos φ = |1(1) + √3(-√3)| / [√(1+3) · √(1+3)] = |1 - 3| / (2 · 2) = 2 / 4 = 1/2 ⇒ φ = 60°."
    },
    {
      "type": "mcq",
      "q": "Toạ độ giao điểm của hai đường thẳng d₁: 2x - y + 3 = 0 và d₂: x + 2y - 1 = 0 là:",
      "opts": [
        "(-1; 1)",
        "(1; -1)",
        "(0; 3)",
        "(1; 0)"
      ],
      "ans": 0,
      "exp": "• Hệ: {2x - y = -3; x + 2y = 1} ⇒ x = -1, y = 1."
    },
    {
      "type": "mcq",
      "q": "Một trạm thu phát sóng 5G đặt tại vị trí M(4; 5). Một tuyến đường cao tốc chạy thẳng theo đường thẳng d: 3x + 4y - 7 = 0 (đơn vị: km). Khoảng cách ngắn nhất từ trạm thu phát sóng đến đường cao tốc là:",
      "opts": [
        "5 km",
        "4 km",
        "6 km",
        "3 km"
      ],
      "ans": 0,
      "exp": "• d = |3(4) + 4(5) - 7| / √(3² + 4²) = |12 + 20 - 7| / 5 = 25 / 5 = 5 km."
    },
    {
      "type": "mcq",
      "q": "Trong một sân bóng đá, khung thành đội nhà nằm trên đường thẳng d₁: 4x - 3y + 10 = 0 và khung thành đối phương nằm trên d₂: 4x - 3y - 90 = 0 (đơn vị: mét). Chiều dài sân bóng (khoảng cách giữa 2 đường thẳng) là:",
      "opts": [
        "20 mét",
        "100 mét",
        "16 mét",
        "25 mét"
      ],
      "ans": 0,
      "exp": "• d = |10 - (-90)| / √(4² + 3²) = 100 / 5 = 20 mét."
    },
    {
      "type": "mcq",
      "q": "Một tia laser chiếu từ nguồn S(2; 1) tới một gương phẳng đặt trên trục Ox. Điểm phản xạ I trên Ox để tia phản xạ đi qua điểm thu tín hiệu R(6; 2) có hoành độ x_I là:",
      "opts": [
        "10/3 (≈ 3,33)",
        "4",
        "3",
        "7/2"
      ],
      "ans": 0,
      "exp": "• Điểm đối xứng của S(2; 1) qua Ox là S'(2; -1).<br>• Đường thẳng S'R đi qua I: S'R⃗ = (4; 3) ⇒ PTTQ: 3(x - 2) - 4(y + 1) = 0 ⇔ 3x - 4y - 10 = 0.<br>• I thuộc Ox (y = 0) ⇒ 3x - 10 = 0 ⇒ x = 10/3."
    }
  ],
  "21": [
    {
      "type": "mcq",
      "q": "Phương trình chính tắc của đường tròn tâm I(a; b) bán kính R là:",
      "opts": [
        "(x - a)² + (y - b)² = R²",
        "(x + a)² + (y + b)² = R²",
        "(x - a)² + (y - b)² = R",
        "(x - a)² - (y - b)² = R²"
      ],
      "ans": 0,
      "exp": "• Phương trình đường tròn (SGK Toán 10): (x - a)² + (y - b)² = R²."
    },
    {
      "type": "match",
      "q": "Ghép các dạng phương trình và yếu tố đường tròn (Cột A) với biểu thức tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Dạng khai triển x² + y² - 2ax - 2by + c = 0",
          "b": "A. Bán kính R = √(a² + b² - c) (với a² + b² - c > 0)"
        },
        {
          "a": "2. Tâm đường tròn dạng khai triển",
          "b": "B. I(a; b)"
        },
        {
          "a": "3. Tiếp tuyến tại điểm M₀(x₀; y₀) ∈ (C)",
          "b": "C. (x₀ - a)(x - a) + (y₀ - b)(y - b) = R²"
        },
        {
          "a": "4. Điều kiện tiếp xúc đường thẳng Δ",
          "b": "D. d(I, Δ) = R"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Các công thức cơ bản về đường tròn trong mặt phẳng toạ độ.",
      "colA": [
        "1. Dạng khai triển x² + y² - 2ax - 2by + c = 0",
        "2. Tâm đường tròn dạng khai triển",
        "3. Tiếp tuyến tại điểm M₀(x₀; y₀) ∈ (C)",
        "4. Điều kiện tiếp xúc đường thẳng Δ"
      ],
      "colB": [
        "A. Bán kính R = √(a² + b² - c) (với a² + b² - c > 0)",
        "B. I(a; b)",
        "C. (x₀ - a)(x - a) + (y₀ - b)(y - b) = R²",
        "D. d(I, Δ) = R"
      ]
    },
    {
      "type": "tf",
      "q": "Cho đường tròn (C): x² + y² - 4x + 6y - 12 = 0. Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Toạ độ tâm của đường tròn là I(2; -3).",
          "ans": true,
          "exp": "a = 2, b = -3 nên tâm I(2; -3) (Đúng)."
        },
        {
          "text": "b) Bán kính của đường tròn là R = 5.",
          "ans": true,
          "exp": "R = √(2² + (-3)² - (-12)) = √(4 + 9 + 12) = √25 = 5 (Đúng)."
        },
        {
          "text": "c) Điểm O(0; 0) nằm bên trong đường tròn.",
          "ans": true,
          "exp": "0² + 0² - 0 + 0 - 12 = -12 < 0 nên O nằm trong đường tròn (Đúng)."
        },
        {
          "text": "d) Điểm A(2; 2) nằm trên đường tròn.",
          "ans": true,
          "exp": "2² + 2² - 4(2) + 6(2) - 12 = 4 + 4 - 8 + 12 - 12 = 0 (Đúng)."
        }
      ],
      "stmts": [
        "a) Toạ độ tâm của đường tròn là I(2; -3).",
        "b) Bán kính của đường tròn là R = 5.",
        "c) Điểm O(0; 0) nằm bên trong đường tròn.",
        "d) Điểm A(2; 2) nằm trên đường tròn."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ]
    },
    {
      "type": "mcq",
      "q": "Phương trình đường tròn có tâm I(-1; 2) và đi qua điểm M(2; 6) là:",
      "opts": [
        "(x + 1)² + (y - 2)² = 25",
        "(x - 1)² + (y + 2)² = 25",
        "(x + 1)² + (y - 2)² = 5",
        "(x - 2)² + (y - 6)² = 25"
      ],
      "ans": 0,
      "exp": "• R² = IM² = (2 - (-1))² + (6 - 2)² = 3² + 4² = 25.<br>• Phương trình: (x + 1)² + (y - 2)² = 25."
    },
    {
      "type": "drag",
      "q": "Kéo các giá trị thích hợp vào chỗ trống cho đường tròn (C): (x - 3)² + (y + 1)² = 16:<br>• Toạ độ tâm I là %%%SLOT_1%%%.<br>• Bán kính R bằng %%%SLOT_2%%%.<br>• Diện tích hình tròn giới hạn bởi (C) là %%%SLOT_3%%%.",
      "slots": [
        "(3; -1)",
        "4",
        "16π"
      ],
      "pool": [
        "(3; -1)",
        "4",
        "16π",
        "(-3; 1)",
        "8π"
      ],
      "exp": "• Tâm I(3; -1).<br>• R = √16 = 4.<br>• Diện tích S = πR² = 16π.",
      "sentence": "Kéo các giá trị thích hợp vào chỗ trống cho đường tròn (C): (x - 3)² + (y + 1)² = 16:<br>• Toạ độ tâm I là %%%SLOT_1%%%.<br>• Bán kính R bằng %%%SLOT_2%%%.<br>• Diện tích hình tròn giới hạn bởi (C) là %%%SLOT_3%%%.",
      "words": [
        "(3; -1)",
        "4",
        "16π",
        "(-3; 1)",
        "8π"
      ],
      "ans": [
        "(3; -1)",
        "4",
        "16π"
      ]
    },
    {
      "type": "mcq",
      "q": "Phương trình tiếp tuyến của đường tròn (C): x² + y² = 25 tại điểm M(3; 4) là:",
      "opts": [
        "3x + 4y - 25 = 0",
        "3x - 4y + 25 = 0",
        "4x + 3y - 25 = 0",
        "3x + 4y = 0"
      ],
      "ans": 0,
      "exp": "• Phương trình tiếp tuyến: x₀x + y₀y = R² ⇔ 3x + 4y = 25 ⇔ 3x + 4y - 25 = 0."
    },
    {
      "type": "mcq",
      "q": "Đường tròn đường kính AB với A(1; 1) và B(5; 3) có phương trình là:",
      "opts": [
        "(x - 3)² + (y - 2)² = 5",
        "(x - 3)² + (y - 2)² = 20",
        "(x + 3)² + (y + 2)² = 5",
        "(x - 1)² + (y - 1)² = 5"
      ],
      "ans": 0,
      "exp": "• Tâm I: trung điểm AB là I(3; 2).<br>• R² = IA² = (1 - 3)² + (1 - 2)² = 4 + 1 = 5.<br>• Phương trình: (x - 3)² + (y - 2)² = 5."
    },
    {
      "type": "mcq",
      "q": "Một trạm phát sóng Wi-Fi công cộng có vùng phủ sóng dạng hình tròn với tâm tại toạ độ (20; 30) và bán kính phủ sóng 50 mét. Phương trình đường biên giới hạn vùng phủ sóng là:",
      "opts": [
        "(x - 20)² + (y - 30)² = 2500",
        "(x - 20)² + (y - 30)² = 50",
        "(x + 20)² + (y + 30)² = 2500",
        "x² + y² = 2500"
      ],
      "ans": 0,
      "exp": "• (x - a)² + (y - b)² = R² ⇔ (x - 20)² + (y - 30)² = 50² = 2500."
    },
    {
      "type": "mcq",
      "q": "Một bánh xe quay tròn có tâm gắn tại trục O(0; 0) bán kính 30 cm. Một đinh nhỏ gắn ở vành bánh xe đang quay. Quỹ đạo chuyển động của chiếc đinh mô tả bởi phương trình nào?",
      "opts": [
        "x² + y² = 900",
        "x² + y² = 30",
        "x² - y² = 900",
        "(x - 30)² + y² = 900"
      ],
      "ans": 0,
      "exp": "• Tâm O(0; 0), R = 30 cm ⇒ x² + y² = 30² = 900."
    },
    {
      "type": "mcq",
      "q": "Tâm của một cơn bão nhiệt đới đang ở toạ độ (100; 150) (đơn vị: km) và bán kính vùng gió nguy hiểm là 80 km. Một tàu hàng đang ở vị trí M(150; 190). Vị trí của tàu có nằm trong vùng gió nguy hiểm không?",
      "opts": [
        "Có nằm trong vùng nguy hiểm (khoảng cách đến tâm bão là khoảng 64 km < 80 km)",
        "Không nằm trong vùng nguy hiểm",
        "Nằm đúng trên rìa mắt bão",
        "Không đủ dữ liệu"
      ],
      "ans": 0,
      "exp": "• Khoảng cách từ tàu đến tâm bão:<br>d = √((150 - 100)² + (190 - 150)²) = √(50² + 40²) = √(2500 + 1600) = √4100 ≈ 64,03 km.<br>• Vì 64,03 km < 80 km nên tàu nằm sâu trong vùng gió bão nguy hiểm."
    }
  ],
  "22": [
    {
      "type": "mcq",
      "q": "Phương trình chính tắc của đường elip (E) có dạng:",
      "opts": [
        "<span class=\"fraction\"><span class=\"numerator\">x²</span><span class=\"denominator\">a²</span></span> + <span class=\"fraction\"><span class=\"numerator\">y²</span><span class=\"denominator\">b²</span></span> = 1 (với a > b > 0)",
        "<span class=\"fraction\"><span class=\"numerator\">x²</span><span class=\"denominator\">a²</span></span> - <span class=\"fraction\"><span class=\"numerator\">y²</span><span class=\"denominator\">b²</span></span> = 1",
        "y² = 2px",
        "x² + y² = R²"
      ],
      "ans": 0,
      "exp": "• Phương trình chính tắc elip: x²/a² + y²/b² = 1 với a > b > 0 và b² = a² - c²."
    },
    {
      "type": "match",
      "q": "Ghép các đường conic (Cột A) với phương trình chính tắc tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Elip (E)",
          "b": "A. x²/a² + y²/b² = 1 (a > b > 0)"
        },
        {
          "a": "2. Hypebol (H)",
          "b": "B. x²/a² - y²/b² = 1 (a, b > 0)"
        },
        {
          "a": "3. Parabol (P)",
          "b": "C. y² = 2px (p > 0)"
        },
        {
          "a": "4. Tiêu cự của elip",
          "b": "D. 2c = 2√(a² - b²)"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Ba đường conic: Elip, Hypebol, Parabol.",
      "colA": [
        "1. Elip (E)",
        "2. Hypebol (H)",
        "3. Parabol (P)",
        "4. Tiêu cự của elip"
      ],
      "colB": [
        "A. x²/a² + y²/b² = 1 (a > b > 0)",
        "B. x²/a² - y²/b² = 1 (a, b > 0)",
        "C. y² = 2px (p > 0)",
        "D. 2c = 2√(a² - b²)"
      ]
    },
    {
      "type": "tf",
      "q": "Cho elip (E): <span class=\"fraction\"><span class=\"numerator\">x²</span><span class=\"denominator\">25</span></span> + <span class=\"fraction\"><span class=\"numerator\">y²</span><span class=\"denominator\">9</span></span> = 1. Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Độ dài trục lớn bằng 10.",
          "ans": true,
          "exp": "a² = 25 ⇒ a = 5. Độ dài trục lớn 2a = 10 (Đúng)."
        },
        {
          "text": "b) Độ dài trục nhỏ bằng 6.",
          "ans": true,
          "exp": "b² = 9 ⇒ b = 3. Độ dài trục nhỏ 2b = 6 (Đúng)."
        },
        {
          "text": "c) Tiêu cự của elip bằng 4.",
          "ans": false,
          "exp": "c = √(a² - b²) = √(25 - 9) = 4. Tiêu cự là 2c = 8 (Sai)."
        },
        {
          "text": "d) Toạ độ hai tiêu điểm là F₁(-4; 0) và F₂(4; 0).",
          "ans": true,
          "exp": "Hai tiêu điểm trên trục Ox: F₁(-c; 0) = (-4; 0), F₂(c; 0) = (4; 0) (Đúng)."
        }
      ],
      "stmts": [
        "a) Độ dài trục lớn bằng 10.",
        "b) Độ dài trục nhỏ bằng 6.",
        "c) Tiêu cự của elip bằng 4.",
        "d) Toạ độ hai tiêu điểm là F₁(-4; 0) và F₂(4; 0)."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ]
    },
    {
      "type": "mcq",
      "q": "Hypebol (H): <span class=\"fraction\"><span class=\"numerator\">x²</span><span class=\"denominator\">16</span></span> - <span class=\"fraction\"><span class=\"numerator\">y²</span><span class=\"denominator\">9</span></span> = 1 có tiêu cự bằng:",
      "opts": [
        "10",
        "5",
        "8",
        "6"
      ],
      "ans": 0,
      "exp": "• c² = a² + b² = 16 + 9 = 25 ⇒ c = 5.<br>• Tiêu cự: 2c = 10."
    },
    {
      "type": "drag",
      "q": "Kéo các yếu tố chính xác của parabol (P): y² = 8x:<br>• Tham số tiêu p = %%%SLOT_1%%%.<br>• Toạ độ tiêu điểm F là %%%SLOT_2%%%.<br>• Phương trình đường chuẩn Δ là x = %%%SLOT_3%%%.",
      "slots": [
        "4",
        "(2; 0)",
        "-2"
      ],
      "pool": [
        "4",
        "(2; 0)",
        "-2",
        "8",
        "(4; 0)"
      ],
      "exp": "• 2p = 8 ⇒ p = 4.<br>• Tiêu điểm F(p/2; 0) = (2; 0).<br>• Đường chuẩn x = -p/2 = -2.",
      "sentence": "Kéo các yếu tố chính xác của parabol (P): y² = 8x:<br>• Tham số tiêu p = %%%SLOT_1%%%.<br>• Toạ độ tiêu điểm F là %%%SLOT_2%%%.<br>• Phương trình đường chuẩn Δ là x = %%%SLOT_3%%%.",
      "words": [
        "4",
        "(2; 0)",
        "-2",
        "8",
        "(4; 0)"
      ],
      "ans": [
        "4",
        "(2; 0)",
        "-2"
      ]
    },
    {
      "type": "mcq",
      "q": "Cho parabol (P): y² = 4x. Khoảng cách từ tiêu điểm F đến đường chuẩn Δ của (P) bằng:",
      "opts": [
        "2",
        "4",
        "1",
        "0,5"
      ],
      "ans": 0,
      "exp": "• Khoảng cách từ tiêu điểm đến đường chuẩn chính là tham số tiêu p.<br>• 2p = 4 ⇒ p = 2."
    },
    {
      "type": "mcq",
      "q": "Phương trình chính tắc của elip có độ dài trục lớn bằng 8 và tiêu cự bằng 6 là:",
      "opts": [
        "x²/16 + y²/7 = 1",
        "x²/64 + y²/36 = 1",
        "x²/16 + y²/9 = 1",
        "x²/8 + y²/6 = 1"
      ],
      "ans": 0,
      "exp": "• 2a = 8 ⇒ a = 4 ⇒ a² = 16.<br>• 2c = 6 ⇒ c = 3.<br>• b² = a² - c² = 16 - 9 = 7.<br>• Phương trình: x²/16 + y²/7 = 1."
    },
    {
      "type": "mcq",
      "q": "Trái Đất chuyển động quanh Mặt Trời theo quỹ đạo elip với Mặt Trời nằm ở một tiêu điểm. Biết bán trục lớn a ≈ 149,6 triệu km và tâm sai e = c/a ≈ 0,0167. Khoảng cách gần nhất từ Trái Đất đến Mặt Trời (điểm cận nhật) xấp xỉ là:",
      "opts": [
        "147,1 triệu km",
        "149,6 triệu km",
        "152,1 triệu km",
        "140,0 triệu km"
      ],
      "ans": 0,
      "exp": "• Khoảng cách điểm cận nhật: d_min = a - c = a(1 - e) = 149,6 · (1 - 0,0167) ≈ 147,1 triệu km."
    },
    {
      "type": "mcq",
      "q": "Một chóa đèn pin có mặt cắt là một parabol có phương trình y² = 12x (đơn vị: cm). Để chùm sáng phản xạ phát ra là chùm tia song song, bóng đèn cần được đặt tại tiêu điểm F có toạ độ là:",
      "opts": [
        "(3; 0)",
        "(6; 0)",
        "(12; 0)",
        "(1,5; 0)"
      ],
      "ans": 0,
      "exp": "• Tính chất quang học của parabol: mọi tia sáng xuất phát từ tiêu điểm F khi phản xạ trên parabol đều cho chùm tia song song với trục đối xứng.<br>• 2p = 12 ⇒ p = 6 ⇒ tiêu điểm F(p/2; 0) = (3; 0)."
    },
    {
      "type": "mcq",
      "q": "Cổng chào hình elip có chiều cao 6 m và bề rộng chân cổng 16 m. Chọn hệ trục toạ độ Oxy sao cho gốc O là trung điểm chân cổng. Phương trình elip của cổng chào là:",
      "opts": [
        "x²/64 + y²/36 = 1 (với y ≥ 0)",
        "x²/16 + y²/6 = 1",
        "x²/36 + y²/64 = 1",
        "x²/256 + y²/36 = 1"
      ],
      "ans": 0,
      "exp": "• Bề rộng chân cổng 2a = 16 ⇒ a = 8 ⇒ a² = 64.<br>• Chiều cao b = 6 ⇒ b² = 36.<br>• Phương trình nửa elip trên: x²/64 + y²/36 = 1 (y ≥ 0)."
    }
  ],
  "23": [
    {
      "type": "mcq",
      "q": "Khi một công việc có thể hoàn thành bởi một trong hai phương án độc lập (phương án 1 có m cách, phương án 2 có n cách không trùng nhau), số cách hoàn thành công việc là:",
      "opts": [
        "m + n (Quy tắc cộng)",
        "m · n (Quy tắc nhân)",
        "mⁿ",
        "m! + n!"
      ],
      "ans": 0,
      "exp": "• Quy tắc cộng (SGK Toán 10): Nếu một công việc được thực hiện theo một trong hai phương án loại trừ nhau, có m và n cách thì tổng số cách là m + n."
    },
    {
      "type": "match",
      "q": "Ghép các quy tắc đếm (Cột A) với ví dụ thực tế tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Quy tắc cộng",
          "b": "A. Chọn 1 món tráng miệng trong thực đơn gồm 3 loại chè HOẶC 4 loại bánh"
        },
        {
          "a": "2. Quy tắc nhân",
          "b": "B. Chọn 1 bộ trang phục gồm 1 áo VÀ 1 quần"
        },
        {
          "a": "3. Sơ đồ cây (Tree diagram)",
          "b": "C. Biểu diễn trực quan phân nhánh các công đoạn kế tiếp"
        },
        {
          "a": "4. Công việc gồm k công đoạn",
          "b": "D. Tổng số cách thực hiện là tích n₁ · n₂ · ... · n_k"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Hoặc: quy tắc cộng.<br>• Và (kế tiếp): quy tắc nhân.<br>• Sơ đồ cây.",
      "colA": [
        "1. Quy tắc cộng",
        "2. Quy tắc nhân",
        "3. Sơ đồ cây (Tree diagram)",
        "4. Công việc gồm k công đoạn"
      ],
      "colB": [
        "A. Chọn 1 món tráng miệng trong thực đơn gồm 3 loại chè HOẶC 4 loại bánh",
        "B. Chọn 1 bộ trang phục gồm 1 áo VÀ 1 quần",
        "C. Biểu diễn trực quan phân nhánh các công đoạn kế tiếp",
        "D. Tổng số cách thực hiện là tích n₁ · n₂ · ... · n_k"
      ]
    },
    {
      "type": "tf",
      "q": "Từ các chữ số {1, 2, 3, 4, 5}, lập các số tự nhiên. Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Số các số tự nhiên gồm 3 chữ số là 5³ = 125 số.",
          "ans": true,
          "exp": "Mỗi vị trí có 5 cách chọn: 5 · 5 · 5 = 125 (Đúng)."
        },
        {
          "text": "b) Số các số tự nhiên gồm 3 chữ số đôi một khác nhau là 5 · 4 · 3 = 60 số.",
          "ans": true,
          "exp": "Chữ số đầu có 5 cách, chữ số 2 có 4 cách, chữ số 3 có 3 cách: 60 (Đúng)."
        },
        {
          "text": "c) Số các số tự nhiên chẵn gồm 2 chữ số khác nhau là 10 số.",
          "ans": false,
          "exp": "Chữ số tận cùng chẵn chọn từ {2, 4} (2 cách). Chữ số đầu chọn từ 4 số còn lại: 4 · 2 = 8 số (Sai)."
        },
        {
          "text": "d) Số các số lẻ gồm 3 chữ số khác nhau là 36 số.",
          "ans": true,
          "exp": "Chữ số cuối chọn từ {1, 3, 5} (3 cách). Hai chữ số đầu có 4 · 3 = 12 cách. Tổng: 3 · 12 = 36 số (Đúng)."
        }
      ],
      "stmts": [
        "a) Số các số tự nhiên gồm 3 chữ số là 5³ = 125 số.",
        "b) Số các số tự nhiên gồm 3 chữ số đôi một khác nhau là 5 · 4 · 3 = 60 số.",
        "c) Số các số tự nhiên chẵn gồm 2 chữ số khác nhau là 10 số.",
        "d) Số các số lẻ gồm 3 chữ số khác nhau là 36 số."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ]
    },
    {
      "type": "mcq",
      "q": "Một quán cơm phục vụ bữa trưa gồm: 4 món mặn, 3 món xào và 2 món canh. Một khách hàng chọn một bữa ăn đầy đủ gồm 1 món mặn, 1 món xào và 1 món canh. Số cách chọn bữa ăn là:",
      "opts": [
        "24 cách",
        "9 cách",
        "12 cách",
        "36 cách"
      ],
      "ans": 0,
      "exp": "• Áp dụng quy tắc nhân: N = 4 · 3 · 2 = 24 cách."
    },
    {
      "type": "drag",
      "q": "Điền vào chỗ trống số cách chọn:<br>• Bạn Bình có 5 áo sơ mi và 4 quần tây. Số cách chọn 1 bộ quần áo đi học là %%%SLOT_1%%%.<br>• Bình có thêm 3 đôi giày. Số cách chọn 1 bộ gồm áo, quần và giày là %%%SLOT_2%%%.<br>• Bình muốn chọn mặc áo sơ mi HOẶC áo khoác (có 2 áo khoác) thì có %%%SLOT_3%%% cách chọn áo.",
      "slots": [
        "20",
        "60",
        "7"
      ],
      "pool": [
        "20",
        "60",
        "7",
        "9",
        "40"
      ],
      "exp": "• Áo và quần: 5 · 4 = 20.<br>• Áo, quần và giày: 5 · 4 · 3 = 60.<br>• Áo sơ mi hoặc áo khoác: 5 + 2 = 7.",
      "sentence": "Điền vào chỗ trống số cách chọn:<br>• Bạn Bình có 5 áo sơ mi và 4 quần tây. Số cách chọn 1 bộ quần áo đi học là %%%SLOT_1%%%.<br>• Bình có thêm 3 đôi giày. Số cách chọn 1 bộ gồm áo, quần và giày là %%%SLOT_2%%%.<br>• Bình muốn chọn mặc áo sơ mi HOẶC áo khoác (có 2 áo khoác) thì có %%%SLOT_3%%% cách chọn áo.",
      "words": [
        "20",
        "60",
        "7",
        "9",
        "40"
      ],
      "ans": [
        "20",
        "60",
        "7"
      ]
    },
    {
      "type": "mcq",
      "q": "Có bao nhiêu số tự nhiên có 4 chữ số khác nhau được lập từ các chữ số {0, 1, 2, 3, 4, 5}?",
      "opts": [
        "300 số",
        "360 số",
        "120 số",
        "720 số"
      ],
      "ans": 0,
      "exp": "• Chữ số đầu a ≠ 0: 5 cách chọn (1 đến 5).<br>• Chữ số b: 5 cách (kể cả 0).<br>• Chữ số c: 4 cách.<br>• Chữ số d: 3 cách.<br>• Số các số: 5 · 5 · 4 · 3 = 300 số."
    },
    {
      "type": "mcq",
      "q": "Để đi từ thành phố A đến thành phố B có 3 tuyến xe buýt. Từ B đến C có 4 tuyến tàu hỏa. Hỏi có bao nhiêu cách đi từ A đến C qua B rồi quay trở lại A mà tuyến xe và tuyến tàu lượt về không trùng với lượt đi?",
      "opts": [
        "72 cách",
        "144 cách",
        "12 cách",
        "24 cách"
      ],
      "ans": 0,
      "exp": "• Lượt đi A → B: 3 cách; B → C: 4 cách.<br>• Lượt về C → B: 3 cách (khác lượt đi); B → A: 2 cách (khác lượt đi).<br>• Tổng số cách: 3 · 4 · 3 · 2 = 72 cách."
    },
    {
      "type": "mcq",
      "q": "Mã mở khóa điện thoại (mã PIN) gồm 6 chữ số thập phân (từ 0 đến 9). Có bao nhiêu mã PIN khác nhau có thể tạo được?",
      "opts": [
        "1.000.000 mã (10⁶)",
        "151.200 mã",
        "720 mã",
        "600.000 mã"
      ],
      "ans": 0,
      "exp": "• Mỗi vị trí có 10 lựa chọn độc lập từ 0 đến 9: 10 · 10 · 10 · 10 · 10 · 10 = 10⁶ = 1.000.000 mã."
    },
    {
      "type": "mcq",
      "q": "Biển số xe máy của một tỉnh có dạng 29-X1 ABCD (trong đó X là một chữ cái trong bảng 20 chữ in hoa, ABCD là cụm 4 chữ số từ 0 đến 9). Nếu cụm 4 chữ số ABCD không trùng nhau hoàn toàn, số lượng biển số xe tối đa có thể cấp cho một quận (cố định X) là:",
      "opts": [
        "5.040 biển",
        "10.000 biển",
        "9.000 biển",
        "4.536 biển"
      ],
      "ans": 0,
      "exp": "• Cụm 4 chữ số đôi một khác nhau: 10 · 9 · 8 · 7 = 5.040 biển."
    },
    {
      "type": "mcq",
      "q": "Một đề thi trắc nghiệm gồm 10 câu hỏi, mỗi câu có 4 phương án trả lời A, B, C, D và chỉ có một phương án đúng. Một thí sinh làm bài bằng cách khoanh ngẫu nhiên tất cả các câu. Hỏi có bao nhiêu cách điền phiếu trả lời khác nhau?",
      "opts": [
        "4¹⁰ = 1.048.576 cách",
        "40 cách",
        "10⁴ = 10.000 cách",
        "24 cách"
      ],
      "ans": 0,
      "exp": "• Mỗi câu có 4 cách điền. 10 câu liên tiếp: 4 · 4 · ... · 4 = 4¹⁰ = 1.048.576 cách."
    }
  ],
  "24": [
    {
      "type": "mcq",
      "q": "Số các chỉnh hợp chập k của n phần tử (1 ≤ k ≤ n) được tính bởi công thức:",
      "opts": [
        "A_n^k = n! / (n - k)!",
        "C_n^k = n! / [k!(n - k)!]",
        "P_n = n!",
        "A_n^k = n! / k!"
      ],
      "ans": 0,
      "exp": "• Chỉnh hợp: chọn k phần tử và CÓ sắp xếp thứ tự: A_n^k = n! / (n - k)!."
    },
    {
      "type": "match",
      "q": "Ghép các khái niệm tổ hợp (Cột A) với công thức tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Số hoán vị của n phần tử",
          "b": "A. P_n = n! = n(n - 1)...1"
        },
        {
          "a": "2. Số chỉnh hợp chập k của n",
          "b": "B. A_n^k = n! / (n - k)!"
        },
        {
          "a": "3. Số tổ hợp chập k của n",
          "b": "C. C_n^k = n! / [k!(n - k)!]"
        },
        {
          "a": "4. Tính chất đối xứng tổ hợp",
          "b": "D. C_n^k = C_n^(n - k)"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Hoán vị: đổi chỗ toàn bộ.<br>• Chỉnh hợp: chọn có thứ tự.<br>• Tổ hợp: chọn không phân biệt thứ tự.<br>• C_n^k = C_n^(n - k).",
      "colA": [
        "1. Số hoán vị của n phần tử",
        "2. Số chỉnh hợp chập k của n",
        "3. Số tổ hợp chập k của n",
        "4. Tính chất đối xứng tổ hợp"
      ],
      "colB": [
        "A. P_n = n! = n(n - 1)...1",
        "B. A_n^k = n! / (n - k)!",
        "C. C_n^k = n! / [k!(n - k)!]",
        "D. C_n^k = C_n^(n - k)"
      ]
    },
    {
      "type": "tf",
      "q": "Xét tính đúng - sai của các đẳng thức tổ hợp sau:",
      "items": [
        {
          "text": "a) P₄ = 4! = 24.",
          "ans": true,
          "exp": "4! = 4 · 3 · 2 · 1 = 24 (Đúng)."
        },
        {
          "text": "b) A₅² = 20.",
          "ans": true,
          "exp": "A₅² = 5 · 4 = 20 (Đúng)."
        },
        {
          "text": "c) C₅² = 10.",
          "ans": true,
          "exp": "C₅² = (5 · 4) / 2 = 10 (Đúng)."
        },
        {
          "text": "d) C₆³ = A₆³.",
          "ans": false,
          "exp": "A₆³ = 6 · 5 · 4 = 120, còn C₆³ = 120 / 3! = 20. Khác nhau hoàn toàn (Sai)."
        }
      ],
      "stmts": [
        "a) P₄ = 4! = 24.",
        "b) A₅² = 20.",
        "c) C₅² = 10.",
        "d) C₆³ = A₆³."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ]
    },
    {
      "type": "mcq",
      "q": "Một lớp học có 35 học sinh. Cần chọn ra 1 ban cán sự lớp gồm 3 người: 1 lớp trưởng, 1 lớp phó và 1 bí thư. Số cách chọn là:",
      "opts": [
        "A₃₅³ = 39.270 cách",
        "C₃₅³ = 6.545 cách",
        "35³ cách",
        "105 cách"
      ],
      "ans": 0,
      "exp": "• Do 3 chức danh khác nhau (có thứ tự phân công nhiệm vụ), số cách chọn là chỉnh hợp:<br>A₃₅³ = 35 · 34 · 33 = 39.270 cách."
    },
    {
      "type": "drag",
      "q": "Kéo số cách thích hợp vào chỗ trống cho nhóm gồm 10 bạn học sinh:<br>• Số cách xếp 10 bạn thành 1 hàng dọc là %%%SLOT_1%%%.<br>• Số cách chọn 3 bạn đi trực nhật (không phân biệt nhiệm vụ) là %%%SLOT_2%%%.<br>• Số cách trao 3 giải Nhất, Nhì, Ba cho 10 bạn là %%%SLOT_3%%%.",
      "slots": [
        "10! cách",
        "C₁₀³ = 120 cách",
        "A₁₀³ = 720 cách"
      ],
      "pool": [
        "10! cách",
        "C₁₀³ = 120 cách",
        "A₁₀³ = 720 cách",
        "30 cách",
        "10³ cách"
      ],
      "exp": "• Xếp hàng: hoán vị 10!.<br>• Chọn trực nhật: tổ hợp C₁₀³ = 120.<br>• Giải Nhất, Nhì, Ba: chỉnh hợp A₁₀³ = 720.",
      "sentence": "Kéo số cách thích hợp vào chỗ trống cho nhóm gồm 10 bạn học sinh:<br>• Số cách xếp 10 bạn thành 1 hàng dọc là %%%SLOT_1%%%.<br>• Số cách chọn 3 bạn đi trực nhật (không phân biệt nhiệm vụ) là %%%SLOT_2%%%.<br>• Số cách trao 3 giải Nhất, Nhì, Ba cho 10 bạn là %%%SLOT_3%%%.",
      "words": [
        "10! cách",
        "C₁₀³ = 120 cách",
        "A₁₀³ = 720 cách",
        "30 cách",
        "10³ cách"
      ],
      "ans": [
        "10! cách",
        "C₁₀³ = 120 cách",
        "A₁₀³ = 720 cách"
      ]
    },
    {
      "type": "mcq",
      "q": "Giá trị của biểu thức C₇³ + C₇⁴ là:",
      "opts": [
        "70 (bằng C₈⁴)",
        "35",
        "140",
        "21"
      ],
      "ans": 0,
      "exp": "• Theo công thức Pascal: C_n^k + C_n^(k+1) = C_(n+1)^(k+1) ⇒ C₇³ + C₇⁴ = C₈⁴ = (8·7·6·5)/(4·3·2·1) = 70."
    },
    {
      "type": "mcq",
      "q": "Có bao nhiêu cách xếp 5 cuốn sách Toán khác nhau và 3 cuốn sách Văn khác nhau lên một giá sách nằm ngang sao cho các cuốn sách Toán luôn đứng cạnh nhau?",
      "opts": [
        "8.640 cách",
        "40.320 cách",
        "720 cách",
        "120 cách"
      ],
      "ans": 0,
      "exp": "• Buộc 5 cuốn Toán thành 1 khối: có 5! = 120 cách xếp nội bộ Toán.<br>• Xếp khối Toán và 3 cuốn Văn (coi như 4 phần tử): có 4! = 24 cách.<br>• Tổng số cách: 120 · 24 = 2.880 cách (nếu sách Văn cũng đứng cạnh nhau) hoặc 120 · 4! = 2.880 cách. Nếu tính 5! · 4! = 120 · 24 = 2.880 cách. Đáp số chính xác: 2.880 cách."
    },
    {
      "type": "mcq",
      "q": "Trong giải bóng đá World Cup, một bảng đấu gồm 4 đội thi đấu vòng tròn một lượt (mỗi đội gặp nhau đúng 1 trận). Tổng số trận đấu trong bảng là:",
      "opts": [
        "C₄² = 6 trận",
        "12 trận",
        "4 trận",
        "8 trận"
      ],
      "ans": 0,
      "exp": "• Mỗi trận đấu là một cặp gồm 2 đội (không phân biệt thứ tự): C₄² = (4 · 3)/2 = 6 trận."
    },
    {
      "type": "mcq",
      "q": "Một bệnh viện có 8 bác sĩ hồi sức cấp cứu. Mỗi ca trực đêm cần một kíp trực gồm 3 bác sĩ. Có bao nhiêu cách phân công kíp trực đêm?",
      "opts": [
        "C₈³ = 56 cách",
        "A₈³ = 336 cách",
        "24 cách",
        "512 cách"
      ],
      "ans": 0,
      "exp": "• Chọn 3 người trong 8 người không phân biệt thứ tự: C₈³ = (8 · 7 · 6)/(3 · 2 · 1) = 56 cách."
    },
    {
      "type": "mcq",
      "q": "Một bàn đàm phán quốc tế có 6 đại biểu của 6 quốc gia. Có bao nhiêu cách xếp 6 đại biểu ngồi quanh một bàn tròn?",
      "opts": [
        "(6 - 1)! = 120 cách",
        "6! = 720 cách",
        "36 cách",
        "60 cách"
      ],
      "ans": 0,
      "exp": "• Số hoán vị vòng quanh (hoán vị tròn) của n phần tử là (n - 1)!.<br>• Với n = 6: (6 - 1)! = 5! = 120 cách."
    }
  ],
  "25": [
    {
      "type": "mcq",
      "q": "Khai triển nhị thức Newton (a + b)⁴ có bao nhiêu số hạng?",
      "opts": [
        "5 số hạng",
        "4 số hạng",
        "3 số hạng",
        "16 số hạng"
      ],
      "ans": 0,
      "exp": "• Khai triển nhị thức Newton (a + b)ⁿ luôn có n + 1 số hạng. Với n = 4 có 5 số hạng."
    },
    {
      "type": "match",
      "q": "Ghép các dòng của tam giác Pascal (Cột A) với các hệ số nhị thức tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Dòng n = 1 (khai triển (a + b)¹)",
          "b": "A. 1  1"
        },
        {
          "a": "2. Dòng n = 2 (khai triển (a + b)²)",
          "b": "B. 1  2  1"
        },
        {
          "a": "3. Dòng n = 3 (khai triển (a + b)³)",
          "b": "C. 1  3  3  1"
        },
        {
          "a": "4. Dòng n = 4 (khai triển (a + b)⁴)",
          "b": "D. 1  4  6  4  1"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Các hệ số tam giác Pascal ứng với các bậc n = 1, 2, 3, 4.",
      "colA": [
        "1. Dòng n = 1 (khai triển (a + b)¹)",
        "2. Dòng n = 2 (khai triển (a + b)²)",
        "3. Dòng n = 3 (khai triển (a + b)³)",
        "4. Dòng n = 4 (khai triển (a + b)⁴)"
      ],
      "colB": [
        "A. 1  1",
        "B. 1  2  1",
        "C. 1  3  3  1",
        "D. 1  4  6  4  1"
      ]
    },
    {
      "type": "tf",
      "q": "Xét tính đúng - sai trong khai triển (a + b)⁵ = a⁵ + 5a⁴b + 10a³b² + 10a²b³ + 5ab⁴ + b⁵:",
      "items": [
        {
          "text": "a) Số hạng đầu tiên là a⁵ và số hạng cuối cùng là b⁵.",
          "ans": true,
          "exp": "Đúng theo công thức khai triển (Đúng)."
        },
        {
          "text": "b) Hệ số của số hạng thứ ba (chứa a³b²) là 10.",
          "ans": true,
          "exp": "C₅² = 10 (Đúng)."
        },
        {
          "text": "c) Tổng các hệ số của khai triển bằng 32.",
          "ans": true,
          "exp": "Cho a = 1, b = 1 ta được (1 + 1)⁵ = 2⁵ = 32 (Đúng)."
        },
        {
          "text": "d) Khai triển có tất cả 5 số hạng.",
          "ans": false,
          "exp": "Có n + 1 = 5 + 1 = 6 số hạng (Sai)."
        }
      ],
      "stmts": [
        "a) Số hạng đầu tiên là a⁵ và số hạng cuối cùng là b⁵.",
        "b) Hệ số của số hạng thứ ba (chứa a³b²) là 10.",
        "c) Tổng các hệ số của khai triển bằng 32.",
        "d) Khai triển có tất cả 5 số hạng."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ]
    },
    {
      "type": "mcq",
      "q": "Khai triển biểu thức (x + 2)⁴ thành đa thức, hệ số của x³ là:",
      "opts": [
        "8",
        "4",
        "24",
        "16"
      ],
      "ans": 0,
      "exp": "• Số hạng chứa x³ là C₄¹ · x³ · 2¹ = 4 · x³ · 2 = 8x³. Hệ số là 8."
    },
    {
      "type": "drag",
      "q": "Kéo các hệ số thích hợp vào khai triển (x - 1)⁴:<br>• (x - 1)⁴ = x⁴ - %%%SLOT_1%%% x³ + %%%SLOT_2%%% x² - %%%SLOT_3%%% x + 1.",
      "slots": [
        "4",
        "6",
        "4"
      ],
      "pool": [
        "4",
        "6",
        "1",
        "8",
        "-4"
      ],
      "exp": "• (x - 1)⁴ = x⁴ - 4x³ + 6x² - 4x + 1.",
      "sentence": "Kéo các hệ số thích hợp vào khai triển (x - 1)⁴:<br>• (x - 1)⁴ = x⁴ - %%%SLOT_1%%% x³ + %%%SLOT_2%%% x² - %%%SLOT_3%%% x + 1.",
      "words": [
        "4",
        "6",
        "1",
        "8",
        "-4"
      ],
      "ans": [
        "4",
        "6",
        "4"
      ]
    },
    {
      "type": "mcq",
      "q": "Hệ số của x² trong khai triển của (2x + 1)⁴ là:",
      "opts": [
        "24",
        "6",
        "16",
        "8"
      ],
      "ans": 0,
      "exp": "• Số hạng chứa x²: C₄² · (2x)² · 1² = 6 · 4x² · 1 = 24x². Hệ số là 24."
    },
    {
      "type": "mcq",
      "q": "Số hạng không chứa x (số hạng tự do) trong khai triển của (x + 2/x)⁴ (với x ≠ 0) là:",
      "opts": [
        "24",
        "16",
        "6",
        "8"
      ],
      "ans": 0,
      "exp": "• Số hạng tổng quát: T_(k+1) = C₄^k · x^(4-k) · (2/x)^k = C₄^k · 2^k · x^(4-2k).<br>• Không chứa x ⇔ 4 - 2k = 0 ⇔ k = 2.<br>• Số hạng đó: C₄² · 2² = 6 · 4 = 24."
    },
    {
      "type": "mcq",
      "q": "Theo mô hình tăng trưởng dân số hoặc lãi kép, giá trị khoản đầu tư sau 4 năm với lãi suất r hàng năm là S = P(1 + r)⁴. Dùng nhị thức Newton khi lãi suất r rất nhỏ (r << 1), công thức xấp xỉ bậc nhất của khoản tiền là:",
      "opts": [
        "S ≈ P(1 + 4r)",
        "S ≈ P(1 + r⁴)",
        "S ≈ P(1 + 6r)",
        "S ≈ 4Pr"
      ],
      "ans": 0,
      "exp": "• Khai triển: (1 + r)⁴ = 1 + 4r + 6r² + 4r³ + r⁴.<br>• Khi r rất nhỏ, bỏ qua các bậc r², r³, r⁴ ta được công thức tuyến tính hoá kinh điển: S ≈ P(1 + 4r)."
    },
    {
      "type": "mcq",
      "q": "Xác suất để sinh được k bé trai trong một gia đình có 4 người con (xác suất sinh trai gái đều là 0,5) được tính bởi các số hạng trong khai triển (0,5 + 0,5)⁴. Xác suất để gia đình có đúng 2 trai và 2 gái là:",
      "opts": [
        "6/16 = 37,5%",
        "4/16 = 25%",
        "1/16 = 6,25%",
        "50%"
      ],
      "ans": 0,
      "exp": "• Số cách chọn 2 bé trai: C₄² = 6.<br>• Xác suất: C₄² · (0,5)² · (0,5)² = 6 · (1/16) = 6/16 = 37,5%."
    },
    {
      "type": "mcq",
      "q": "Một hệ thống truyền tin số gửi đi một chuỗi 5 bit (0 hoặc 1). Số chuỗi bit chứa đúng 3 bit 1 chính là hệ số của x³ trong khai triển (1 + x)⁵, bằng:",
      "opts": [
        "10",
        "5",
        "20",
        "15"
      ],
      "ans": 0,
      "exp": "• C₅³ = 10 chuỗi."
    }
  ],
  "26": [
    {
      "type": "mcq",
      "q": "Theo định nghĩa cổ điển, xác suất của biến cố E trong không gian mẫu Ω gồm các kết quả đồng khả năng là:",
      "opts": [
        "P(E) = n(E) / n(Ω)",
        "P(E) = n(Ω) / n(E)",
        "P(E) = n(E) · n(Ω)",
        "P(E) = 1 - n(E)"
      ],
      "ans": 0,
      "exp": "• Định nghĩa xác suất cổ điển (SGK Toán 10): P(E) = n(E) / n(Ω)."
    },
    {
      "type": "match",
      "q": "Ghép các loại biến cố (Cột A) với xác suất tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Biến cố chắc chắn (Ω)",
          "b": "A. P(Ω) = 1"
        },
        {
          "a": "2. Biến cố không thể (∅)",
          "b": "B. P(∅) = 0"
        },
        {
          "a": "3. Biến cố đối ¯E",
          "b": "C. P(¯E) = 1 - P(E)"
        },
        {
          "a": "4. Xác suất biến cố bất kì",
          "b": "D. 0 ≤ P(E) ≤ 1"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Các tính chất cơ bản của xác suất.",
      "colA": [
        "1. Biến cố chắc chắn (Ω)",
        "2. Biến cố không thể (∅)",
        "3. Biến cố đối ¯E",
        "4. Xác suất biến cố bất kì"
      ],
      "colB": [
        "A. P(Ω) = 1",
        "B. P(∅) = 0",
        "C. P(¯E) = 1 - P(E)",
        "D. 0 ≤ P(E) ≤ 1"
      ]
    },
    {
      "type": "tf",
      "q": "Gieo một con xúc xắc cân đối và đồng chất 6 mặt. Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Không gian mẫu có số phần tử là n(Ω) = 6.",
          "ans": true,
          "exp": "Ω = {1, 2, 3, 4, 5, 6} có 6 phần tử (Đúng)."
        },
        {
          "text": "b) Xác suất xuất hiện mặt chấm chẵn là 1/2.",
          "ans": true,
          "exp": "Biến cố chẵn E = {2, 4, 6} ⇒ P(E) = 3/6 = 1/2 (Đúng)."
        },
        {
          "text": "c) Xác suất xuất hiện mặt có số chấm lớn hơn 4 là 1/3.",
          "ans": true,
          "exp": "Các mặt lớn hơn 4 là {5, 6} ⇒ P = 2/6 = 1/3 (Đúng)."
        },
        {
          "text": "d) Xác suất xuất hiện mặt 7 chấm bằng 1/6.",
          "ans": false,
          "exp": "Xúc xắc chỉ có từ 1 đến 6 chấm nên biến cố mặt 7 chấm là biến cố không thể, P = 0 (Sai)."
        }
      ],
      "stmts": [
        "a) Không gian mẫu có số phần tử là n(Ω) = 6.",
        "b) Xác suất xuất hiện mặt chấm chẵn là 1/2.",
        "c) Xác suất xuất hiện mặt có số chấm lớn hơn 4 là 1/3.",
        "d) Xác suất xuất hiện mặt 7 chấm bằng 1/6."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ]
    },
    {
      "type": "mcq",
      "q": "Gieo hai đồng xu cân đối đồng chất cùng lúc. Xác suất để có đúng một đồng xu xuất hiện mặt ngửa (N) là:",
      "opts": [
        "1/2",
        "1/4",
        "3/4",
        "1"
      ],
      "ans": 0,
      "exp": "• Ω = {SS, SN, NS, NN} có 4 phần tử.<br>• E = {SN, NS} có 2 phần tử.<br>• P(E) = 2/4 = 1/2."
    },
    {
      "type": "drag",
      "q": "Kéo xác suất tương ứng khi rút ngẫu nhiên 1 lá bài từ bộ bài tú lơ khơ 52 lá:<br>• Rút được lá bài chất Át (A) có xác suất là %%%SLOT_1%%%.<br>• Rút được lá bài chất Cơ là %%%SLOT_2%%%.<br>• Rút được lá bài màu đỏ là %%%SLOT_3%%%.",
      "slots": [
        "1/13",
        "1/4",
        "1/2"
      ],
      "pool": [
        "1/13",
        "1/4",
        "1/2",
        "1/52",
        "4/13"
      ],
      "exp": "• 4 lá Át: 4/52 = 1/13.<br>• 13 lá Cơ: 13/52 = 1/4.<br>• 26 lá Đỏ: 26/52 = 1/2.",
      "sentence": "Kéo xác suất tương ứng khi rút ngẫu nhiên 1 lá bài từ bộ bài tú lơ khơ 52 lá:<br>• Rút được lá bài chất Át (A) có xác suất là %%%SLOT_1%%%.<br>• Rút được lá bài chất Cơ là %%%SLOT_2%%%.<br>• Rút được lá bài màu đỏ là %%%SLOT_3%%%.",
      "words": [
        "1/13",
        "1/4",
        "1/2",
        "1/52",
        "4/13"
      ],
      "ans": [
        "1/13",
        "1/4",
        "1/2"
      ]
    },
    {
      "type": "mcq",
      "q": "Gieo đồng thời hai con xúc xắc cân đối. Số phần tử của không gian mẫu n(Ω) là:",
      "opts": [
        "36",
        "12",
        "6",
        "24"
      ],
      "ans": 0,
      "exp": "• n(Ω) = 6 · 6 = 36."
    },
    {
      "type": "mcq",
      "q": "Gieo hai con xúc xắc cân đối. Xác suất để tổng số chấm trên hai con xúc xắc bằng 7 là:",
      "opts": [
        "1/6",
        "1/12",
        "7/36",
        "5/36"
      ],
      "ans": 0,
      "exp": "• Các cặp có tổng bằng 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) gồm 6 cặp.<br>• P = 6 / 36 = 1/6."
    },
    {
      "type": "mcq",
      "q": "Trong hộp có 6 quả bóng đỏ và 4 quả bóng xanh có kích thước giống nhau. Lấy ngẫu nhiên 1 quả bóng. Xác suất lấy được bóng màu đỏ là:",
      "opts": [
        "6/10 = 0,6",
        "4/10 = 0,4",
        "1/6",
        "1/10"
      ],
      "ans": 0,
      "exp": "• Tổng số bóng: 6 + 4 = 10 quả.<br>• Số bóng đỏ: 6 quả.<br>• Xác suất: P = 6/10 = 0,6 = 60%."
    },
    {
      "type": "mcq",
      "q": "Một hộp linh kiện có 100 sản phẩm, trong đó có 5 sản phẩm lỗi. Nhân viên KCS lấy ngẫu nhiên 1 sản phẩm để kiểm tra. Xác suất chọn được sản phẩm <b>đạt chuẩn</b> là:",
      "opts": [
        "95% (0,95)",
        "5% (0,05)",
        "90%",
        "99%"
      ],
      "ans": 0,
      "exp": "• Số sản phẩm đạt chuẩn: 100 - 5 = 95 sản phẩm.<br>• P = 95 / 100 = 0,95 = 95%."
    },
    {
      "type": "mcq",
      "q": "Một lớp học có 20 nam và 25 nữ. Thầy giáo gọi ngẫu nhiên một bạn lên bảng làm bài tập. Xác suất bạn được gọi là nữ sinh bằng:",
      "opts": [
        "5/9 (≈ 55,6%)",
        "4/9",
        "1/25",
        "20/45"
      ],
      "ans": 0,
      "exp": "• Tổng số học sinh: 20 + 25 = 45 bạn.<br>• Số bạn nữ: 25 bạn.<br>• P = 25 / 45 = 5/9 ≈ 55,6%."
    }
  ],
  "27": [
    {
      "type": "mcq",
      "q": "Khi tính xác suất của biến cố A phức tạp, ta thường tính thông qua biến cố đối ¯A theo công thức:",
      "opts": [
        "P(A) = 1 - P(¯A)",
        "P(A) = 1 + P(¯A)",
        "P(A) = P(¯A)",
        "P(A) = 1 / P(¯A)"
      ],
      "ans": 0,
      "exp": "• Quy tắc biến cố đối: P(A) = 1 - P(¯A). Thường dùng khi đề bài xuất hiện từ khóa 'có ít nhất một'."
    },
    {
      "type": "match",
      "q": "Ghép bài toán xác suất (Cột A) với không gian mẫu tương ứng (Cột B):",
      "pairs": [
        {
          "a": "1. Chọn 3 người từ nhóm 10 người",
          "b": "A. n(Ω) = C₁₀³ = 120"
        },
        {
          "a": "2. Gieo 3 đồng xu",
          "b": "B. n(Ω) = 2³ = 8"
        },
        {
          "a": "3. Rút 2 thẻ từ 20 thẻ",
          "b": "C. n(Ω) = C₂₀² = 190"
        },
        {
          "a": "4. Xếp 4 người vào 4 ghế thẳng",
          "b": "D. n(Ω) = 4! = 24"
        }
      ],
      "ans": {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D"
      },
      "exp": "• Cách xác định không gian mẫu bằng tổ hợp, chỉnh hợp, quy tắc nhân.",
      "colA": [
        "1. Chọn 3 người từ nhóm 10 người",
        "2. Gieo 3 đồng xu",
        "3. Rút 2 thẻ từ 20 thẻ",
        "4. Xếp 4 người vào 4 ghế thẳng"
      ],
      "colB": [
        "A. n(Ω) = C₁₀³ = 120",
        "B. n(Ω) = 2³ = 8",
        "C. n(Ω) = C₂₀² = 190",
        "D. n(Ω) = 4! = 24"
      ]
    },
    {
      "type": "tf",
      "q": "Một hộp đựng 5 viên bi đỏ và 3 viên bi xanh. Lấy ngẫu nhiên đồng thời 2 viên bi. Xét tính đúng - sai:",
      "items": [
        {
          "text": "a) Số phần tử không gian mẫu là n(Ω) = C₈² = 28.",
          "ans": true,
          "exp": "C₈² = (8 · 7)/2 = 28 (Đúng)."
        },
        {
          "text": "b) Xác suất lấy được 2 viên bi cùng màu đỏ là 10/28 = 5/14.",
          "ans": true,
          "exp": "C₅² / 28 = 10 / 28 = 5/14 (Đúng)."
        },
        {
          "text": "c) Xác suất lấy được 2 viên bi cùng màu xanh là 3/28.",
          "ans": true,
          "exp": "C₃² / 28 = 3 / 28 (Đúng)."
        },
        {
          "text": "d) Xác suất lấy được 2 viên bi khác màu là 1/2.",
          "ans": false,
          "exp": "Số cách lấy 1 đỏ 1 xanh: 5 · 3 = 15 ⇒ P = 15/28 ≠ 14/28 (Sai)."
        }
      ],
      "stmts": [
        "a) Số phần tử không gian mẫu là n(Ω) = C₈² = 28.",
        "b) Xác suất lấy được 2 viên bi cùng màu đỏ là 10/28 = 5/14.",
        "c) Xác suất lấy được 2 viên bi cùng màu xanh là 3/28.",
        "d) Xác suất lấy được 2 viên bi khác màu là 1/2."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ]
    },
    {
      "type": "mcq",
      "q": "Một hộp có 10 viên bi, trong đó có 4 bi đỏ và 6 bi xanh. Lấy ngẫu nhiên 3 viên bi. Xác suất để lấy được <b>ít nhất một viên bi đỏ</b> là:",
      "opts": [
        "5/6 (≈ 83,3%)",
        "1/6",
        "1/2",
        "2/3"
      ],
      "ans": 0,
      "exp": "• n(Ω) = C₁₀³ = 120.<br>• Biến cố đối ¯A: \"Cả 3 viên bi lấy ra đều là màu xanh\": n(¯A) = C₆³ = 20.<br>• P(¯A) = 20 / 120 = 1/6.<br>• P(A) = 1 - P(¯A) = 1 - 1/6 = 5/6."
    },
    {
      "type": "drag",
      "q": "Kéo các giá trị xác suất vào chỗ trống khi chọn ngẫu nhiên 2 học sinh từ nhóm 4 nam và 6 nữ:<br>• n(Ω) = %%%SLOT_1%%%.<br>• Xác suất chọn được 2 học sinh nữ là %%%SLOT_2%%%.<br>• Xác suất chọn được 1 nam và 1 nữ là %%%SLOT_3%%%.",
      "slots": [
        "45",
        "1/3",
        "8/15"
      ],
      "pool": [
        "45",
        "1/3",
        "8/15",
        "15",
        "1/2"
      ],
      "exp": "• n(Ω) = C₁₀² = 45.<br>• 2 nữ: C₆² / 45 = 15 / 45 = 1/3.<br>• 1 nam 1 nữ: (4 · 6) / 45 = 24 / 45 = 8/15.",
      "sentence": "Kéo các giá trị xác suất vào chỗ trống khi chọn ngẫu nhiên 2 học sinh từ nhóm 4 nam và 6 nữ:<br>• n(Ω) = %%%SLOT_1%%%.<br>• Xác suất chọn được 2 học sinh nữ là %%%SLOT_2%%%.<br>• Xác suất chọn được 1 nam và 1 nữ là %%%SLOT_3%%%.",
      "words": [
        "45",
        "1/3",
        "8/15",
        "15",
        "1/2"
      ],
      "ans": [
        "45",
        "1/3",
        "8/15"
      ]
    },
    {
      "type": "mcq",
      "q": "Chọn ngẫu nhiên 2 số nguyên dương phân biệt từ tập {1, 2, 3, 4, 5, 6, 7, 8, 9}. Xác suất để tích của hai số được chọn là một số chẵn là:",
      "opts": [
        "13/18 (≈ 72,2%)",
        "5/18",
        "1/2",
        "2/3"
      ],
      "ans": 0,
      "exp": "• n(Ω) = C₉² = 36.<br>• Tập gồm 5 số lẻ {1, 3, 5, 7, 9} và 4 số chẵn {2, 4, 6, 8}.<br>• Tích 2 số là số lẻ khi cả hai số đều lẻ: C₅² = 10 cách.<br>• Tích là số chẵn: 36 - 10 = 26 cách.<br>• P = 26 / 36 = 13/18."
    },
    {
      "type": "mcq",
      "q": "Có 4 tấm thẻ được đánh số 1, 2, 3, 4. Rút ngẫu nhiên lần lượt hai thẻ không hoàn lại. Xác suất để số ghi trên thẻ thứ nhất lớn hơn số ghi trên thẻ thứ hai là:",
      "opts": [
        "1/2",
        "1/4",
        "3/4",
        "1/3"
      ],
      "ans": 0,
      "exp": "• n(Ω) = A₄² = 12.<br>• Các cặp (thẻ 1 > thẻ 2): (2,1), (3,1), (3,2), (4,1), (4,2), (4,3) gồm 6 cặp.<br>• P = 6 / 12 = 1/2."
    },
    {
      "type": "mcq",
      "q": "Trong một đợt kiểm tra chất lượng của nhà máy, một lô gồm 50 sản phẩm có 4 phế phẩm. Nhân viên KCS lấy ngẫu nhiên 2 sản phẩm. Xác suất để cả 2 sản phẩm đều là hàng tốt đạt chuẩn là:",
      "opts": [
        "1035/1225 ≈ 84,5%",
        "90%",
        "92%",
        "78%"
      ],
      "ans": 0,
      "exp": "• Hàng tốt: 50 - 4 = 46 sản phẩm.<br>• n(Ω) = C₅₀² = 1225.<br>• Cả 2 đều tốt: C₄₆² = (46 · 45)/2 = 1035.<br>• P = 1035 / 1225 ≈ 84,5%."
    },
    {
      "type": "mcq",
      "q": "Một ngân hàng mở chương trình quay số trúng thưởng với mã vé gồm 3 chữ số từ 000 đến 999. Khách hàng có vé mang số 688. Xác suất để khách hàng trúng giải đặc biệt (đúng chính xác 3 chữ số) là:",
      "opts": [
        "1/1000 = 0,1%",
        "1/100 = 1%",
        "3/1000",
        "1/500"
      ],
      "ans": 0,
      "exp": "• Tổng số vé: từ 000 đến 999 có 1000 vé.<br>• Duy nhất 1 vé trúng: P = 1/1000 = 0,001 = 0,1%."
    },
    {
      "type": "mcq",
      "q": "Một đội thanh niên tình nguyện gồm 6 bác sĩ và 4 điều dưỡng viên. Cần chọn một tổ công tác gồm 4 người đi hỗ trợ vùng sâu vùng xa. Xác suất để trong tổ công tác có <b>ít nhất 1 bác sĩ</b> là:",
      "opts": [
        "209/210 (≈ 99,5%)",
        "1/210",
        "4/5",
        "90%"
      ],
      "ans": 0,
      "exp": "• n(Ω) = C₁₀⁴ = 210.<br>• Biến cố đối: tổ không có bác sĩ nào (cả 4 người đều là điều dưỡng viên): C₄⁴ = 1.<br>• P(ít nhất 1 BS) = 1 - 1/210 = 209/210 ≈ 99,5%."
    }
  ]
};

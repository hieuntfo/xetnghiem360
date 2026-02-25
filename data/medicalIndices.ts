import { MedicalIndex } from '../types';

export const medicalIndices: MedicalIndex[] = [
  {
    id: 'alt',
    name: 'Alanine Aminotransferase',
    abbreviation: 'ALT',
    definition: 'ALT là một loại enzyme chủ yếu nằm trong tế bào gan, giúp chuyển hóa protein. Nồng độ ALT trong máu tăng cao có thể là dấu hiệu tổn thương gan.',
    bodySystems: ['Gan'],
    referenceRanges: [
      { gender: 'male', ageRange: [0, 150], range: [10, 40], unit: 'U/L' },
      { gender: 'female', ageRange: [0, 150], range: [7, 35], unit: 'U/L' },
    ],
    causes: {
      high: [
        'Viêm gan virus (A, B, C)',
        'Gan nhiễm mỡ không do rượu (NAFLD)',
        'Tổn thương gan do rượu bia',
        'Tác dụng phụ của một số loại thuốc (statin, paracetamol...)'
      ],
      low: [
        'Thường không đáng lo ngại về mặt lâm sàng.',
        'Có thể gặp ở người suy dinh dưỡng hoặc thiếu vitamin B6.'
      ]
    },
    recommendations: {
      diet: ['Hạn chế rượu bia, đồ ăn nhiều dầu mỡ, đường.', 'Tăng cường rau xanh, trái cây, ngũ cốc nguyên hạt.'],
      lifestyle: ['Duy trì cân nặng hợp lý.', 'Tập thể dục đều đặn.'],
      followUp: 'Nên xét nghiệm lại sau 3-6 tháng hoặc theo chỉ định của bác sĩ.'
    },
    linkedPackage: {
      name: 'Gói tầm soát chức năng Gan (Chuyên sâu)',
      description: 'Đánh giá toàn diện sức khỏe lá gan của bạn với các chỉ số men gan, bilirubin và các xét nghiệm liên quan.',
      id: 'LC-GAN-01'
    }
  },
  {
    id: 'glucose',
    name: 'Glucose huyết tương lúc đói',
    abbreviation: 'Glucose',
    definition: 'Đo lường lượng đường (glucose) trong máu sau khi nhịn ăn ít nhất 8 giờ, là xét nghiệm cơ bản để sàng lọc và chẩn đoán bệnh tiểu đường.',
    bodySystems: ['Nội tiết tố', 'Máu'],
    referenceRanges: [
      { gender: 'any', ageRange: [0, 150], range: [70, 100], unit: 'mg/dL', warningRange: [101, 125] },
    ],
    causes: {
      high: [
        'Tiền tiểu đường hoặc bệnh tiểu đường (Diabetes Mellitus).',
        'Stress, nhiễm trùng cấp tính.',
        'Tác dụng của thuốc corticosteroid.'
      ],
      low: [
        'Hạ đường huyết, thường do dùng quá liều thuốc tiểu đường.',
        'Nhịn đói quá lâu, suy dinh dưỡng.',
        'Uống rượu bia khi bụng đói.'
      ]
    },
    recommendations: {
      diet: ['Kiểm soát lượng carbohydrate, ưu tiên carb phức tạp.', 'Ăn nhiều chất xơ, protein và chất béo lành mạnh.'],
      lifestyle: ['Tăng cường hoạt động thể chất.', 'Giảm cân nếu thừa cân, béo phì.'],
      followUp: 'Kiểm tra đường huyết định kỳ theo tư vấn của bác sĩ.'
    },
     linkedPackage: {
      name: 'Gói tầm soát bệnh Đái tháo đường',
      description: 'Kiểm tra các chỉ số đường huyết quan trọng như Glucose, HbA1c để phát hiện sớm và quản lý bệnh tiểu đường.',
      id: 'LC-DTD-01'
    }
  },
  {
    id: 'creatinine',
    name: 'Creatinine huyết thanh',
    abbreviation: 'Creatinine',
    definition: 'Creatinine là sản phẩm thải của quá trình chuyển hóa cơ bắp, được lọc qua thận và đào thải ra ngoài qua nước tiểu. Nồng độ Creatinine trong máu phản ánh chức năng thận.',
    bodySystems: ['Thận'],
    referenceRanges: [
      { gender: 'male', ageRange: [18, 60], range: [0.7, 1.3], unit: 'mg/dL' },
      { gender: 'female', ageRange: [18, 60], range: [0.6, 1.1], unit: 'mg/dL' },
    ],
    causes: {
      high: [
        'Suy giảm chức năng thận (suy thận cấp hoặc mạn).',
        'Tắc nghẽn đường tiết niệu.',
        'Mất nước, suy tim sung huyết.'
      ],
      low: [
        'Khối lượng cơ bắp thấp (người già, suy dinh dưỡng).',
        'Bệnh gan nặng.'
      ]
    },
    recommendations: {
      diet: ['Uống đủ nước.', 'Hạn chế protein nếu có bệnh thận mạn.', 'Tránh lạm dụng thuốc giảm đau NSAIDs.'],
      lifestyle: ['Kiểm soát huyết áp và đường huyết.', 'Không hút thuốc lá.'],
      followUp: 'Thực hiện xét nghiệm chức năng thận định kỳ nếu có yếu tố nguy cơ.'
    },
    linkedPackage: {
      name: 'Gói tầm soát chức năng Thận',
      description: 'Bao gồm các xét nghiệm Creatinine, Urea, eGFR để đánh giá khả năng lọc và bài tiết của thận.',
      id: 'LC-THAN-01'
    }
  }
];

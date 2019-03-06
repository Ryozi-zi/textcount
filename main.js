new Vue({
  el: '#app',
  data: {
    text: '',
    CountingText: '',
    message: [
      '頑張れ！いつも応援してるよ！',
      '法子が頑張ってるの知ってるから！このまま法子らしく行こう！',
      'こんなものでも法子の役に立てたら嬉しい！頑張ってね！',
      '冷静沈着江戸法子！',
      '自己分析めちゃくちゃしてるから自信を持って書いて！'
    ]
  },
  methods: {
    onClick() {
      document.querySelector('#clipboard').select();
      document.execCommand('copy');
    }
  },
  computed: {
    Count: function() {
      this.CountingText = this.text.replace(/\s+/g, '').replace(/\n/g, '');
      return this.CountingText.length;
    },
    randomArray: function() {
      const rnd = Math.floor(Math.random() * this.message.length);
      return this.message[rnd];
    }
  }
})

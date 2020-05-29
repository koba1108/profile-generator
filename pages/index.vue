<template>
  <div>
    <button @click="parseHobby">趣味を生成</button>
    <div>
      <label>
        <textarea
          v-model="hobbyTextFull"
          name="hobby"
          :rows="hobbyTextFullRow"
          :cols="40"
        />
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hobbyTitle: '',
        hobbyText: '',
        // todo: 選択式にする
        // todo: マスタ要るやん
        hobby: [
          'テニス',
          'スノボ',
          '旅行',
          'お酒を飲むこと',
        ],
      }
    },
    computed: {
      hobbyTextFull () {
        return this.hobbyTitle + '\n' + this.hobbyText
      },
      hobbyTextFullRow () {
        return this.hobbyTextFull.split('\n').length
      },
    },
    methods: {
      makeRandomNumber (min = 1, max = 10) {
        return Math.floor(Math.random() * (max + 1 - min)) + min
      },
      makeHobbyTitle () {
        let title = ''
        switch (this.makeRandomNumber(1, 4)) {
          case 1:
            title = '好きなこと'
            break
          case 2:
            title = '趣味'
            break
          case 3:
            title = '【好きなこと】'
            break
          case 4:
            title = '【趣味】'
            break
        }
        return title
      },
      makeHobbyText () {
        let text = ''
        switch (this.makeRandomNumber(1, 4)) {
          // 「、」で繋ぐ
          case 1:
            text = this.hobby.join('、')
            break
          // スラッシュで繋ぐ
          case 2:
            text = this.hobby.join('/')
            break
          // 「・%趣味%」で改行
          case 3:
            text = this.hobby.map((h, i) => {
              return i + 1 !== this.hobby.length ? `・${h}` + '\n' : `・${h}`
            }).join('')
            break
          // 「%趣味%や%趣味%や%趣味%などです。」
          case 4:
            text = this.hobby.map((h, i) => {
              return i + 1 !== this.hobby.length ? `${h}や` : `${h}などです。`
            }).join('')
            break
        }
        return text
      },
      parseHobby () {
        this.hobbyTitle = this.makeHobbyTitle()
        this.hobbyText = this.makeHobbyText()
      },
    },
  }
</script>

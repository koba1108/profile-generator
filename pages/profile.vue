<template>
  <div
    class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front ui-draggable ui-resizable p-ui-generalformdialog p-ui-generalformdialog-add ui-dialog-buttons"
    tabindex="-1"
    role="dialog"
    aria-describedby="ui-id-236"
    aria-labelledby="ui-id-237"
    style="position: absolute; height: auto; width: 960px; top: 0; left: 195px; display: block; z-index: 1501;"
  >
    <div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix ui-draggable-handle">
      <span id="ui-id-237" class="ui-dialog-title">レジュメ - 新規</span>
      <button
        type="button"
        class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-dialog-titlebar-close"
        role="button" title="Close"
      >
        <span class="ui-button-icon-primary ui-icon ui-icon-closethick"></span>
        <span class="ui-button-text">Close</span></button>
    </div>
    <div
      id="ui-id-236"
      class="ui-dialog-content ui-widget-content p-ui-generalformdialog-resume"
      style="display: block; overflow: auto; width: auto; min-height: 0; max-height: none; height: 707px;"
    >
      <div class="p-ui-generalformdialog-loading"></div>
      <div>
        <ul id="reminderWrap">
          <li class="required">必須</li>
          <li class="web">web</li>
          <li class="document">帳票</li>
        </ul>
        <div class="p-ui-inputform">
          <div class="p-ui-groupbox">
            <div class="p-ui-groupbox-header unselectable collapsable">
              <div class="p-ui-groupbox-header-left">
                <a
                  title="このエリアをクリックすると、この詳細部分を折り畳み/展開できます"
                  class="p-ui-groupbox-header-left-item p-ui-groupbox-collapseindicator indicator-nocollapsed"
                ></a>
                <div class="p-ui-groupbox-header-left-item">
                  <div>基本情報</div>
                </div>
              </div>
              <div class="p-ui-groupbox-header-right"></div>
            </div>
            <div class="p-ui-groupbox-content" style="display: block;">
              <div class="p-ui-groupbox-content-item">
                <table class="porters-table form p-ui-inputform-content col4">
                  <tbody>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">ID</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="text" data-alias="Resume.P_Id">
                        <div>
                          <div class="p-ui-textinputinputdata" style="display: block;"></div>
                          <label>
                            <input
                              class="p-ui-textinputinputobject inputwidget-inputobject p-ui-inputlimiter"
                              tabindex="200"
                              style=""
                            >
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">フェーズ(最新)</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="dropdown"
                        data-alias="Resume.P_Phase"
                      >
                        <div>
                          <div>
                            <div class="p-ui-dropdowninputdata" style=""></div>
                            <label>
                              <select
                                class="p-ui-dropdowninputobject inputwidget-inputobject"
                                style="display: inline;"
                                tabindex="204"
                              >
                                <option value="">-</option>
                                <option value="213">エントリー</option>
                                <option value="337">面談呼び込み</option>
                                <option value="10597">面談設定</option>
                                <option value="338">面談実施済</option>
                                <option value="2">稼働中</option>
                                <option value="339">決定</option>
                                <option value="3">紹介終了</option>
                                <option value="340">その他</option>
                              </select>
                            </label>
                          </div>
                          <button
                            class="p-ui-inputobjecteditbutton"
                            tabindex="204"
                            style=""
                          ></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">求職者</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="required"></div>
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="incrementalsearch"
                        data-alias="Resume.P_Candidate"
                        data-resourcetype="can"
                      >
                        <div>
                          <div>
                            <div class="p-ui-incrementalsearchinputinputdata" style="display: block;"></div>
                            <label>
                              <input
                                type="text"
                                class="p-ui-incrementalsearchinputinputobject inputwidget-inputobject p-ui-incrementalsearch ui-autocomplete-input"
                                autocomplete="off"
                                role="textbox"
                                aria-autocomplete="list"
                                aria-haspopup="true"
                                tabindex="201"
                                style="display: inline-block;"
                              >
                            </label>
                            <button
                              class="p-ui-incrementalsearch-button"
                              type="button"
                              tabindex="201"
                            ></button>
                            <button
                              class="p-ui-incrementalsearchinputeditbutton"
                              type="button"
                              style=""
                            ></button>
                            <button
                              class="p-ui-incrementalsearchinputcustombutton"
                              type="button"
                              style="display: inline-block;"
                              tabindex="201"
                            ></button>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">フェーズ日付(最新)</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="datetime"
                        data-alias="Resume.P_PhaseDate"
                      >
                        <div>
                          <div>
                            <div class="p-ui-datetimeinputinputdata" style=""></div>
                            <div class="p-ui-datetimeinputage"></div>
                            <span class="p-ui-datetimerangeseparatorinput" style="display:none"> ～ </span>
                            <div class="p-ui-datetimeinputinputdata2"></div>
                            <div class="p-ui-datetimeinputage2"></div>
                            <div
                              class="p-ui-datetimeinputinputobject inputwidget-inputobject porters-datetimepicker"
                              style="display: inline-block;"
                            >
                              <label for="dp1590777332413"></label>
                              <input
                                id="dp1590777332413"
                                class="porters-datetimepicker-date hasDatepicker"
                                type="text"
                                name="form_date"
                                tabindex="205"
                              >
                              <label for="tp1590777332556"></label>
                              <input
                                id="tp1590777332556"
                                class="porters-datetimepicker-time hasTimepicker"
                                type="text"
                                name="form_time"
                                tabindex="205"
                              >
                              <button type="button" tabindex="205">現在</button>
                            </div>
                            <span class="p-ui-datetimerangeseparatoreditable" style="display:none"> ～ </span>
                            <div class="p-ui-datetimeinputinputobject2"></div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="205" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>

                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">登録経路</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="dropdown"
                        data-alias="Resume.P_RegisterChannel"
                      >
                        <div>
                          <div>
                            <div class="p-ui-dropdowninputdata" style=""></div>
                            <label>
                              <select
                                class="p-ui-dropdowninputobject inputwidget-inputobject"
                                style="display: inline;"
                                tabindex="202"
                              >
                                <option value="">-</option>
                                <option value="10136">ホームページ</option>
                                <option value="10151">RAN</option>
                                <option value="10144">ビズリーチ</option>
                                <option value="10137">［ｅｎ］転職コンサルタント</option>
                                <option value="10707">エン ミドルの転職</option>
                                <option value="10708">エン プロフェッショナル</option>
                                <option value="10709">エン 転職DB (旧社会人)</option>
                                <option value="10710">AMBI</option>
                                <option value="10140">日経キャリアNET</option>
                                <option value="10310">キャリアトレック</option>
                                <option value="10145">DODA</option>
                                <option value="10146">提携紹介会社</option>
                                <option value="10147">知人紹介</option>
                                <option value="10148">その他</option>
                              </select>
                            </label>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="202" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">フェーズメモ(最新)</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="textarea"
                        data-alias="Resume.P_PhaseMemo"
                      >
                        <div>
                          <div class="p-ui-textareainputdata" style=""></div>
                          <label>
                            <textarea
                              class="p-ui-textareainputobject inputwidget-inputobject p-ui-inputlimiter" rows="1"
                              style="display: inline-block;"
                              tabindex="206"
                            ></textarea>
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">顔写真</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="image"
                        data-alias="Resume.U_3877F50F721CCE3F2A78BABC1A980A"
                      >
                        <div>
                          <div class="p-ui-imageinputinputdata" style=""></div>
                          <div class="p-ui-imageinputdisplay"><span style="display:block;min-height:50px"></span></div>
                          <button
                            class="p-ui-imageinputaddbutton"
                            type="button"
                            style="display: inline-block;"
                            tabindex="203"
                          ></button>
                          <button
                            class="p-ui-imageinputdeletebutton"
                            type="button"
                            style=""
                            tabindex="203"
                          ></button>
                          <button class="p-ui-inputobjecteditbutton" tabindex="203" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">担当コンサルタント(最新)</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="required"></div>
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="incrementalsearch"
                        data-alias="Resume.P_Owner"
                      >
                        <div>
                          <div>
                            <div
                              class="p-ui-incrementalsearchinputinputdata"
                              style="display: block;"
                            >所属なし リクルーティグ事業部サポート担当</div>
                            <label>
                              <input
                                type="text"
                                class="p-ui-incrementalsearchinputinputobject inputwidget-inputobject p-ui-incrementalsearch ui-autocomplete-input"
                                autocomplete="off"
                                role="textbox"
                                aria-autocomplete="list"
                                aria-haspopup="true"
                                style=""
                              >
                            </label>
                            <button
                              class="p-ui-incrementalsearch-button"
                              type="button"
                              style=""
                            ></button>
                            <button
                              class="p-ui-incrementalsearchinputeditbutton"
                              type="button"
                              style="display: inline-block;"
                              tabindex="207"
                            ></button>
                            <button
                              class="p-ui-incrementalsearchinputcustombutton"
                              type="button"
                              style=""
                            ></button>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="p-ui-inputform">
          <div class="p-ui-groupbox">
            <div class="p-ui-groupbox-header unselectable collapsable">
              <div class="p-ui-groupbox-header-left">
                <a
                  title="このエリアをクリックすると、この詳細部分を折り畳み/展開できます"
                  class="p-ui-groupbox-header-left-item p-ui-groupbox-collapseindicator indicator-nocollapsed"
                ></a>
                <div class="p-ui-groupbox-header-left-item">
                  <div>プロフィール</div>
                </div>
              </div>
              <div class="p-ui-groupbox-header-right"></div>
            </div>
            <div class="p-ui-groupbox-content" style="display: block;">
              <div class="p-ui-groupbox-content-item">
                <table class="porters-table form p-ui-inputform-content col4">
                  <tbody>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">生年月日</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="age"
                        data-alias="Resume.P_DateOfBirth"
                      >
                        <div>
                          <div>
                            <div class="p-ui-datetimeinputinputdata" style=""></div>
                            <div class="p-ui-datetimeinputage" style=""></div>
                            <span class="p-ui-datetimerangeseparatorinput" style="display:none"> ～ </span>
                            <div class="p-ui-datetimeinputinputdata2"></div>
                            <div class="p-ui-datetimeinputage2"></div>
                            <div
                              class="p-ui-datetimeinputinputobject inputwidget-inputobject porters-datetimepicker"
                              style="display: inline-block;"
                            >
                              <label for="dp1590777332414"></label>
                              <input
                                id="dp1590777332414"
                                class="porters-datetimepicker-date hasDatepicker"
                                type="text" name="form_date"
                                tabindex="300"
                              >
                              <button type="button" tabindex="300">現在</button>
                            </div>
                            <span class="p-ui-datetimerangeseparatoreditable" style="display:none"> ～ </span>
                            <div class="p-ui-datetimeinputinputobject2"></div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="300" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">携帯電話</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="phone"
                        data-alias="Resume.P_MobileReference"
                      >
                        <div>
                          <div class="p-ui-phoneinputinputdata" style="display: block;"></div>
                          <label>
                            <input
                              class="p-ui-phoneinputinputobject inputwidget-inputobject p-ui-inputlimiter"
                              tabindex="306"
                              style=""
                            >
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">性別</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="radio"
                        data-alias="Resume.P_Gender"
                      >
                        <div>
                          <div>
                            <div class="p-ui-radiobuttoninputdata" style=""></div>
                            <div class="p-ui-radiobuttoninputobject inputwidget-inputobject" style="display: inline;">
                              <label class="p-ui-radiobuttonlabel">
                                <input class="p-ui-radiobuttonradio"
                                       type="radio"
                                       value="52"
                                       name="displayItem_8035"
                                       tabindex="301"
                                >男性</label>
                              <label class="p-ui-radiobuttonlabel">
                                <input
                                  class="p-ui-radiobuttonradio"
                                  type="radio"
                                  value="53"
                                  name="displayItem_8035"
                                >女性</label>
                            </div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="301" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">電話</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="phone"
                        data-alias="Resume.P_TelephoneReference"
                      >
                        <div>
                          <div class="p-ui-phoneinputinputdata" style="display: block;"></div>
                          <label>
                            <input
                              class="p-ui-phoneinputinputobject inputwidget-inputobject p-ui-inputlimiter"
                              tabindex="307"
                              style=""
                            >
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">現在の就業状況</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="radio"
                        data-alias="Resume.P_CurrentStatus"
                      >
                        <div>
                          <div>
                            <div class="p-ui-radiobuttoninputdata" style=""></div>
                            <div class="p-ui-radiobuttoninputobject inputwidget-inputobject" style="display: inline;">
                              <label class="p-ui-radiobuttonlabel">
                                <input
                                  class="p-ui-radiobuttonradio"
                                  type="radio"
                                  value="60" name="displayItem_8015"
                                  tabindex="302"
                                >現職中</label>
                              <label class="p-ui-radiobuttonlabel">
                                <input
                                  class="p-ui-radiobuttonradio"
                                  type="radio"
                                  value="61"
                                  name="displayItem_8015"
                                >離職中</label>
                              <label class="p-ui-radiobuttonlabel">
                                <input
                                  class="p-ui-radiobuttonradio"
                                  type="radio"
                                  value="62"
                                  name="displayItem_8015"
                                >就業経験なし</label>
                            </div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="302" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">メール</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="text" data-alias="Resume.P_Mail">
                        <div>
                          <div class="p-ui-textinputinputdata" style="display: block;"></div>
                          <label>
                            <input
                              class="p-ui-textinputinputobject inputwidget-inputobject p-ui-inputlimiter"
                              tabindex="308"
                              style=""
                            >
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">婚姻/扶養家族の有無</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="checkbox"
                        data-alias="Resume.P_Marriage"
                      >
                        <div>
                          <div>
                            <div class="p-ui-checkboxinputdata" style=""></div>
                            <ul class="p-ui-checkboxinputobject inputwidget-inputobject" style="display: inline;">
                              <li>
                                <label class="p-ui-checkboxlabel">
                                  <input
                                    class="p-ui-checkboxcheckbox"
                                    type="checkbox"
                                    value="381"
                                    name="displayItem_8040"
                                    tabindex="303"
                                  >既婚</label>
                              </li>
                              <li>
                                <label class="p-ui-checkboxlabel">
                                  <input
                                    class="p-ui-checkboxcheckbox"
                                    type="checkbox"
                                    value="382"
                                    name="displayItem_8040"
                                    tabindex="303"
                                  >扶養家族あり</label>
                              </li>
                            </ul>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="303" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">住所詳細</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="textarea"
                        data-alias="Resume.P_Adress"
                      >
                        <div>
                          <div class="p-ui-textareainputdata" style=""></div>
                          <label>
                            <textarea
                              class="p-ui-textareainputobject inputwidget-inputobject p-ui-inputlimiter"
                              rows="2"
                              style="display: inline-block;"
                              tabindex="309"
                            ></textarea>
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">勤務先企業名</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="text"
                        data-alias="Resume.P_CompanyName"
                      >
                        <div>
                          <div class="p-ui-textinputinputdata" style=""></div>
                          <label>
                            <input
                              class="p-ui-textinputinputobject inputwidget-inputobject p-ui-inputlimiter"
                              tabindex="304"
                              style="display: inline-block;"
                            >
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">連絡希望事項</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="textarea"
                        data-alias="Resume.P_HopeMattersContact"
                      >
                        <div>
                          <div class="p-ui-textareainputdata" style=""></div>
                          <label>
                            <textarea
                              class="p-ui-textareainputobject inputwidget-inputobject p-ui-inputlimiter" rows="2"
                              style="display: inline-block;"
                              tabindex="310"
                            ></textarea>
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">転職回数</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="number"
                        data-alias="Resume.P_ChangeJobsCount"
                      >
                        <div>
                          <div>
                            <div class="p-ui-numberinputinputdata" style=""></div>
                            <div
                              class="p-ui-numberinputinputobject inputwidget-inputobject ui-igedit ui-igedit-container ui-widget ui-corner-all ui-state-default"
                              style="display: inline-block;"
                            >
                              <div class="ui-igeditor-input-container ui-corner-all">
                                <label for="1590777360778EditingInput"></label>
                                <input
                                  id="1590777360778EditingInput"
                                  type="tel"
                                  class="ui-igedit-input"
                                  role="textbox" tabindex="305"
                                  style="height: 100%; text-align: right;"
                                >
                                <input type="hidden" value="" tabindex="305">
                              </div>
                            </div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="305" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label"></div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="p-ui-inputform">
          <div class="p-ui-groupbox">
            <div class="p-ui-groupbox-header unselectable collapsable">
              <div class="p-ui-groupbox-header-left">
                <a
                  title="このエリアをクリックすると、この詳細部分を折り畳み/展開できます"
                  class="p-ui-groupbox-header-left-item p-ui-groupbox-collapseindicator indicator-nocollapsed"
                ></a>
                <div class="p-ui-groupbox-header-left-item">
                  <div>学歴</div>
                </div>
              </div>
              <div class="p-ui-groupbox-header-right"></div>
            </div>
            <div class="p-ui-groupbox-content" style="display: block;">
              <div class="p-ui-groupbox-content-item">
                <table class="porters-table form p-ui-inputform-content col2">
                  <tbody>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">最終学歴</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="dropdown"
                        data-alias="Resume.P_EducationType"
                      >
                        <div>
                          <div>
                            <div class="p-ui-dropdowninputdata" style=""></div>
                            <label>
                              <select
                                class="p-ui-dropdowninputobject inputwidget-inputobject"
                                style="display: inline;"
                                tabindex="400"
                              >
                                <option value="">-</option>
                                <option value="10418">大学院（博士）</option>
                                <option value="394">大学院（修士）</option>
                                <option value="393">大学</option>
                                <option value="392">短大</option>
                                <option value="10419">高専</option>
                                <option value="10420">専門学校</option>
                                <option value="391">高校</option>
                                <option value="390">中学</option>
                                <option value="10421">問わない</option>
                              </select>
                            </label>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="400" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">学歴(詳細)</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="textarea"
                        data-alias="Resume.P_Education"
                      >
                        <div>
                          <div class="p-ui-textareainputdata" style=""></div>
                          <label>
                            <textarea
                              class="p-ui-textareainputobject inputwidget-inputobject p-ui-inputlimiter"
                              rows="5"
                              style="display: inline-block;"
                              tabindex="401"
                            ></textarea>
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="p-ui-inputform">
          <div class="p-ui-groupbox">
            <div class="p-ui-groupbox-header unselectable collapsable">
              <div class="p-ui-groupbox-header-left">
                <a href="javascript:void(0);"
                   title="このエリアをクリックすると、この詳細部分を折り畳み/展開できます"
                   class="p-ui-groupbox-header-left-item p-ui-groupbox-collapseindicator indicator-nocollapsed"
                ></a>
                <div class="p-ui-groupbox-header-left-item">
                  <div>社内管理項目</div>
                </div>
              </div>
              <div class="p-ui-groupbox-header-right"></div>
            </div>
            <div class="p-ui-groupbox-content" style="display: block;">
              <div class="p-ui-groupbox-content-item">
                <table class="porters-table form p-ui-inputform-content col2">
                  <tbody>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">リバイバル人材</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="checkbox"
                        data-alias="Resume.U_F61C46701DFB638ABF960AEDD0D77A"
                      >
                        <div>
                          <div>
                            <div class="p-ui-checkboxinputdata" style=""></div>
                            <ul class="p-ui-checkboxinputobject inputwidget-inputobject" style="display: inline;">
                              <li>
                                <label class="p-ui-checkboxlabel">
                                  <input
                                    class="p-ui-checkboxcheckbox"
                                    type="checkbox"
                                    value="10632"
                                    name="displayItem_11645"
                                    tabindex="500"
                                  >YES</label>
                              </li>
                            </ul>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="500" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;">※追加マッチング希望のタイミングでチェック</div>
                        <div class="p-ui-validation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">意欲</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="required"></div>
                          </div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="radio"
                        data-alias="Resume.U_C23F8DD9F0E8619DEB9E8C1DD2D8B8"
                      >
                        <div>
                          <div>
                            <div class="p-ui-radiobuttoninputdata" style=""></div>
                            <div class="p-ui-radiobuttoninputobject inputwidget-inputobject" style="display: inline;">
                              <label class="p-ui-radiobuttonlabel">
                                <input
                                  class="p-ui-radiobuttonradio"
                                  type="radio"
                                  value="10440"
                                  name="displayItem_10084"
                                  tabindex="501"
                                >A</label>
                              <label class="p-ui-radiobuttonlabel">
                                <input
                                  class="p-ui-radiobuttonradio"
                                  type="radio"
                                  value="10441"
                                  name="displayItem_10084"
                                >B</label>
                              <label class="p-ui-radiobuttonlabel">
                                <input
                                  class="p-ui-radiobuttonradio"
                                  type="radio"
                                  value="10442"
                                  name="displayItem_10084"
                                >C</label>
                              <label class="p-ui-radiobuttonlabel">
                                <input
                                  class="p-ui-radiobuttonradio"
                                  type="radio"
                                  value="10443"
                                  name="displayItem_10084"
                                >D</label>
                            </div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="501" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">人物</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="radio"
                        data-alias="Resume.U_AB8E88B2A35B32BA5CD14A9FCF149F"
                      >
                        <div>
                          <div>
                            <div class="p-ui-radiobuttoninputdata" style=""></div>
                            <div class="p-ui-radiobuttoninputobject inputwidget-inputobject" style="display: inline;">
                              <label class="p-ui-radiobuttonlabel">
                                <input
                                  class="p-ui-radiobuttonradio"
                                  type="radio"
                                  value="10440"
                                  name="displayItem_10085"
                                  tabindex="502"
                                >A</label>
                              <label class="p-ui-radiobuttonlabel">
                                <input
                                  class="p-ui-radiobuttonradio"
                                  type="radio"
                                  value="10441"
                                  name="displayItem_10085"
                                >B</label>
                              <label class="p-ui-radiobuttonlabel">
                                <input
                                  class="p-ui-radiobuttonradio"
                                  type="radio"
                                  value="10442"
                                  name="displayItem_10085"
                                >C</label>
                              <label class="p-ui-radiobuttonlabel">
                                <input
                                  class="p-ui-radiobuttonradio"
                                  type="radio"
                                  value="10443"
                                  name="displayItem_10085"
                                >D</label>
                            </div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="502" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">経験</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="radio"
                        data-alias="Resume.U_B48E16E4B41D8334CE3772537BD2AE"
                      >
                        <div>
                          <div>
                            <div class="p-ui-radiobuttoninputdata" style=""></div>
                            <div class="p-ui-radiobuttoninputobject inputwidget-inputobject" style="display: inline;">
                              <label class="p-ui-radiobuttonlabel">
                                <input
                                  class="p-ui-radiobuttonradio"
                                  type="radio"
                                  value="10440"
                                  name="displayItem_10086"
                                  tabindex="503"
                                >A</label>
                              <label class="p-ui-radiobuttonlabel">
                                <input
                                  class="p-ui-radiobuttonradio"
                                  type="radio"
                                  value="10441"
                                  name="displayItem_10086"
                                >B</label>
                              <label class="p-ui-radiobuttonlabel">
                                <input
                                  class="p-ui-radiobuttonradio"
                                  type="radio"
                                  value="10442"
                                  name="displayItem_10086"
                                >C</label>
                              <label class="p-ui-radiobuttonlabel">
                                <input
                                  class="p-ui-radiobuttonradio"
                                  type="radio"
                                  value="10443"
                                  name="displayItem_10086"
                                >D</label>
                            </div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="503" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">人物所感</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="required"></div>
                          </div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="textarea"
                        data-alias="Resume.U_2BDDB87F0133B0DD710643138E6EF7"
                      >
                        <div>
                          <div class="p-ui-textareainputdata" style=""></div>
                          <label>
                            <textarea
                              class="p-ui-textareainputobject inputwidget-inputobject p-ui-inputlimiter"
                              rows="5"
                              style="display: inline-block;"
                              tabindex="504"
                            ></textarea>
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">キャッチフレーズ</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="text"
                        data-alias="Resume.U_1933407CE377BF63B8345C2EFE5825"
                      >
                        <div>
                          <div class="p-ui-textinputinputdata" style=""></div>
                          <label>
                            <input
                              class="p-ui-textinputinputobject inputwidget-inputobject p-ui-inputlimiter"
                              tabindex="505"
                              style="display: inline-block;"
                            >
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">メルマガ用職務要約</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="textarea"
                        data-alias="Resume.U_1714AC4D531ED7F35AE7F0FBCCB7E4"
                      >
                        <div>
                          <div class="p-ui-textareainputdata" style=""></div>
                          <label>
                            <textarea
                              class="p-ui-textareainputobject inputwidget-inputobject p-ui-inputlimiter"
                              rows="5"
                              style="display: inline-block;"
                              tabindex="506"
                            ></textarea>
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">マネジメント経験</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="checkbox"
                        data-alias="Resume.U_391CA2A4F9BE4107CA7B3125BC6F41"
                      >
                        <div>
                          <div>
                            <div class="p-ui-checkboxinputdata" style=""></div>
                            <ul class="p-ui-checkboxinputobject inputwidget-inputobject" style="display: inline;">
                              <li>
                                <label class="p-ui-checkboxlabel">
                                  <input
                                    class="p-ui-checkboxcheckbox"
                                    type="checkbox"
                                    value="10632"
                                    name="displayItem_11678"
                                    tabindex="507"
                                  >
                                  YES
                                </label>
                              </li>
                            </ul>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="507" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="p-ui-inputform">
          <div class="p-ui-groupbox">
            <div class="p-ui-groupbox-header unselectable collapsable">
              <div class="p-ui-groupbox-header-left">
                <a
                  title="このエリアをクリックすると、この詳細部分を折り畳み/展開できます"
                  class="p-ui-groupbox-header-left-item p-ui-groupbox-collapseindicator indicator-nocollapsed"
                ></a>
                <div class="p-ui-groupbox-header-left-item">
                  <div>職務経験</div>
                </div>
              </div>
              <div class="p-ui-groupbox-header-right"></div>
            </div>
            <div class="p-ui-groupbox-content" style="display: block;">
              <div class="p-ui-groupbox-content-item">
                <table class="porters-table form p-ui-inputform-content col2">
                  <tbody>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">職務経歴(詳細)</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="required"></div>
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="textarea"
                        data-alias="Resume.P_CarrierSummary"
                      >
                        <div>
                          <div class="p-ui-textareainputdata" style=""></div>
                          <label>
                            <textarea
                              class="p-ui-textareainputobject inputwidget-inputobject p-ui-inputlimiter"
                              rows="10"
                              style="display: inline-block;"
                              tabindex="600"
                            ></textarea>
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">転職理由</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="required"></div>
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="textarea"
                        data-alias="Resume.U_7E71E5F3416FBAB6EED71CCB015507"
                      >
                        <div>
                          <div class="p-ui-textareainputdata" style=""></div>
                          <label>
                            <textarea
                              class="p-ui-textareainputobject inputwidget-inputobject p-ui-inputlimiter"
                              rows="10"
                              style="display: inline-block;"
                              tabindex="601"
                            ></textarea>
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="p-ui-inputform">
          <div class="p-ui-groupbox">
            <div class="p-ui-groupbox-header unselectable collapsable">
              <div class="p-ui-groupbox-header-left">
                <a
                  title="このエリアをクリックすると、この詳細部分を折り畳み/展開できます"
                  class="p-ui-groupbox-header-left-item p-ui-groupbox-collapseindicator indicator-nocollapsed"
                ></a>
                <div class="p-ui-groupbox-header-left-item">
                  <div>経験および希望</div>
                </div>
              </div>
              <div class="p-ui-groupbox-header-right"></div>
            </div>
            <div class="p-ui-groupbox-content" style="display: block;">
              <div class="p-ui-groupbox-content-item">
                <table class="porters-table form p-ui-inputform-content col4">
                  <tbody>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">経験業種</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="required"></div>
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="checkbox"
                          data-alias="Resume.P_ExperiencedIndustry"
                      >
                        <div>
                          <div>
                            <div class="p-ui-checkboxinputdata" style=""></div>
                            <ul class="p-ui-checkboxinputobject inputwidget-inputobject" style="display: inline;">
                              <li>
                                <label class="p-ui-checkboxlabel">
                                  <input
                                    class="p-ui-checkboxcheckbox"
                                    type="checkbox"
                                    value="10108" name="displayItem_8012"
                                    tabindex="700"
                                  >
                                  ソフトウェア・情報処理
                                </label>
                              </li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10109" name="displayItem_8012"
                                                                           tabindex="700"
                              >通信・インターネット</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10110" name="displayItem_8012"
                                                                           tabindex="700"
                              >メーカー（コンピューター・通信)</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10111" name="displayItem_8012"
                                                                           tabindex="700"
                              >メーカー（電気・電子・半導体）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10112" name="displayItem_8012"
                                                                           tabindex="700"
                              >メーカー（自動車）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10113" name="displayItem_8012"
                                                                           tabindex="700"
                              >メーカー（機械）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10114" name="displayItem_8012"
                                                                           tabindex="700"
                              >メーカー（化学・素材）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10115" name="displayItem_8012"
                                                                           tabindex="700"
                              >メーカー（食料品・医薬品）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10116" name="displayItem_8012"
                                                                           tabindex="700"
                              >メーカー（その他）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10117" name="displayItem_8012"
                                                                           tabindex="700"
                              >商社</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10118" name="displayItem_8012"
                                                                           tabindex="700"
                              >流通・小売（ファッション・アパレル）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10119" name="displayItem_8012"
                                                                           tabindex="700"
                              >流通・小売（その他）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10120" name="displayItem_8012"
                                                                           tabindex="700"
                              >フード・レストラン</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10121" name="displayItem_8012"
                                                                           tabindex="700"
                              >レジャー・アミューズメント・ホテル</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10122" name="displayItem_8012"
                                                                           tabindex="700"
                              >放送・広告・印刷・出版</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10123" name="displayItem_8012"
                                                                           tabindex="700"
                              >人材ビジネス</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10124" name="displayItem_8012"
                                                                           tabindex="700"
                              >コールセンター</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10125" name="displayItem_8012"
                                                                           tabindex="700"
                              >医療・福祉・介護・教育</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10126" name="displayItem_8012"
                                                                           tabindex="700"
                              >コンサルタント・シンクタンク</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10127" name="displayItem_8012"
                                                                           tabindex="700"
                              >金融（銀行・保険・証券）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10128" name="displayItem_8012"
                                                                           tabindex="700"
                              >金融（その他）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10129" name="displayItem_8012"
                                                                           tabindex="700"
                              >不動産</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10130" name="displayItem_8012"
                                                                           tabindex="700"
                              >建築・土木</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10131" name="displayItem_8012"
                                                                           tabindex="700"
                              >電気・ガス・水道</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10132" name="displayItem_8012"
                                                                           tabindex="700"
                              >団体・連合会・官公庁</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10133" name="displayItem_8012"
                                                                           tabindex="700"
                              >その他の業種</label></li>
                            </ul>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="700" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">希望業種</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="required"></div>
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="checkbox"
                          data-alias="Resume.P_ExpectIndustry"
                      >
                        <div>
                          <div>
                            <div class="p-ui-checkboxinputdata" style=""></div>
                            <ul class="p-ui-checkboxinputobject inputwidget-inputobject" style="display: inline;">
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10108" name="displayItem_8019"
                                                                           tabindex="703"
                              >ソフトウェア・情報処理</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10109" name="displayItem_8019"
                                                                           tabindex="703"
                              >通信・インターネット</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10110" name="displayItem_8019"
                                                                           tabindex="703"
                              >メーカー（コンピューター・通信)</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10111" name="displayItem_8019"
                                                                           tabindex="703"
                              >メーカー（電気・電子・半導体）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10112" name="displayItem_8019"
                                                                           tabindex="703"
                              >メーカー（自動車）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10113" name="displayItem_8019"
                                                                           tabindex="703"
                              >メーカー（機械）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10114" name="displayItem_8019"
                                                                           tabindex="703"
                              >メーカー（化学・素材）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10115" name="displayItem_8019"
                                                                           tabindex="703"
                              >メーカー（食料品・医薬品）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10116" name="displayItem_8019"
                                                                           tabindex="703"
                              >メーカー（その他）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10117" name="displayItem_8019"
                                                                           tabindex="703"
                              >商社</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10118" name="displayItem_8019"
                                                                           tabindex="703"
                              >流通・小売（ファッション・アパレル）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10119" name="displayItem_8019"
                                                                           tabindex="703"
                              >流通・小売（その他）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10120" name="displayItem_8019"
                                                                           tabindex="703"
                              >フード・レストラン</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10121" name="displayItem_8019"
                                                                           tabindex="703"
                              >レジャー・アミューズメント・ホテル</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10122" name="displayItem_8019"
                                                                           tabindex="703"
                              >放送・広告・印刷・出版</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10123" name="displayItem_8019"
                                                                           tabindex="703"
                              >人材ビジネス</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10124" name="displayItem_8019"
                                                                           tabindex="703"
                              >コールセンター</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10125" name="displayItem_8019"
                                                                           tabindex="703"
                              >医療・福祉・介護・教育</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10126" name="displayItem_8019"
                                                                           tabindex="703"
                              >コンサルタント・シンクタンク</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10127" name="displayItem_8019"
                                                                           tabindex="703"
                              >金融（銀行・保険・証券）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10128" name="displayItem_8019"
                                                                           tabindex="703"
                              >金融（その他）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10129" name="displayItem_8019"
                                                                           tabindex="703"
                              >不動産</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10130" name="displayItem_8019"
                                                                           tabindex="703"
                              >建築・土木</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10131" name="displayItem_8019"
                                                                           tabindex="703"
                              >電気・ガス・水道</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10132" name="displayItem_8019"
                                                                           tabindex="703"
                              >団体・連合会・官公庁</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10133" name="displayItem_8019"
                                                                           tabindex="703"
                              >その他の業種</label></li>
                            </ul>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="703" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">経験職種</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="required"></div>
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="hiersel"
                        data-alias="Resume.P_ExperiencedJobCategory"
                      >
                        <div>
                          <div>
                            <div class="p-ui-hierselinputinputdata" style=""></div>
                            <div
                              class="p-ui-hierselinputinputobject inputwidget-inputobject has-inputcontainer"
                              style="display: inline-block;"
                            >
                              <div class="p-ui-inputcontainer-loading" style=""></div>
                              <a
                                style="display: block;"
                                class="p-ui-inputcontainer-button"
                                tabindex="701"
                              ></a>
                              <a
                                class="p-ui-inputcontainer-closebutton"
                                style="" tabindex="701"
                              ></a>
                              <label>
                                <input
                                  type="text"
                                  class="p-ui-inputcontainer-input"
                                  tabindex="701"
                                  style=""
                                >
                              </label>
                              <label class="p-ui-inputcontainer-caption"></label>
                            </div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="701" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">希望職種</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="required"></div>
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="hiersel"
                          data-alias="Resume.P_ExpectJobCategory"
                      >
                        <div>
                          <div>
                            <div class="p-ui-hierselinputinputdata" style=""></div>
                            <div class="p-ui-hierselinputinputobject inputwidget-inputobject has-inputcontainer"
                                 style="display: inline-block;"
                            >
                              <div class="p-ui-inputcontainer-loading" style=""></div>
                              <a style="display: block;" class="p-ui-inputcontainer-button"
                                 tabindex="704"
                              ></a>
                              <a
                                class="p-ui-inputcontainer-closebutton"
                                style="" tabindex="704"
                              ></a>
                              <label>
                                <input
                                  type="text"
                                  class="p-ui-inputcontainer-input"
                                  tabindex="704"
                                  style=""
                                >
                              </label>
                              <label class="p-ui-inputcontainer-caption"></label>
                            </div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="704" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">現在の年収</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="required"></div>
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="currency"
                          data-alias="Resume.P_CurrentSalary"
                      >
                        <div>
                          <div>
                            <div class="p-ui-currencyinputinputdata" style=""></div>
                            <div
                              class="p-ui-currencyinputinputobject inputwidget-inputobject ui-igedit ui-igedit-container ui-widget ui-corner-all ui-state-default"
                              style="display: inline-block;"
                            >
                              <div class="ui-igeditor-input-container ui-corner-all">
                                <label for="1590777360826EditingInput"></label>
                                <input
                                  id="1590777360826EditingInput"
                                  type="tel"
                                  class="ui-igedit-input"
                                  role="textbox" tabindex="702"
                                  style="height: 100%; text-align: right;"
                                >
                                <input type="hidden" value="" tabindex="702">
                              </div>
                            </div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="702" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">希望の年収</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="required"></div>
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="currency"
                          data-alias="Resume.P_ExpectSalary"
                      >
                        <div>
                          <div>
                            <div class="p-ui-currencyinputinputdata" style=""></div>
                            <div
                              class="p-ui-currencyinputinputobject inputwidget-inputobject ui-igedit ui-igedit-container ui-widget ui-corner-all ui-state-default"
                              style="display: inline-block;"
                            >
                              <div class="ui-igeditor-input-container ui-corner-all">
                                <label for="1590777360827EditingInput"></label>
                                <input
                                  id="1590777360827EditingInput"
                                  type="tel"
                                  class="ui-igedit-input"
                                  role="textbox" tabindex="705"
                                  style="height: 100%; text-align: right;"
                                >
                                <input type="hidden" value="" tabindex="705">
                              </div>
                            </div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="705" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label"></div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input"></td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">希望勤務地</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="ledger-sheet"></div>
                          </div>
                        </div>
                      </th>
                      <td
                        class="p-ui-inputform-item-input p-ui-inputobject"
                        data-type="hiersel"
                        data-alias="Resume.P_ExpectArea"
                      >
                        <div>
                          <div>
                            <div class="p-ui-hierselinputinputdata" style=""></div>
                            <div
                              class="p-ui-hierselinputinputobject inputwidget-inputobject has-inputcontainer"
                              style="display: inline-block;"
                            >
                              <div class="p-ui-inputcontainer-loading" style=""></div>
                              <a
                                style="display: block;"
                                class="p-ui-inputcontainer-button"
                                tabindex="706"
                              ></a>
                              <a
                                class="p-ui-inputcontainer-closebutton"
                                style=""
                                tabindex="706"
                              ></a>
                              <label>
                                <input
                                  type="text"
                                  class="p-ui-inputcontainer-input"
                                  tabindex="706"
                                  style=""
                                >
                              </label>
                              <label class="p-ui-inputcontainer-caption"></label>
                            </div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="706" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label"></div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input"></td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">希望詳細</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="required"></div>
                          </div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="textarea"
                          data-alias="Resume.U_8A2C6A386A53716E1CFBD73B4C3E40"
                      >
                        <div>
                          <div class="p-ui-textareainputdata" style=""></div>
                          <label>
                            <textarea
                              class="p-ui-textareainputobject inputwidget-inputobject p-ui-inputlimiter"
                              rows="3"
                              style="display: inline-block;"
                              tabindex="707"
                            ></textarea>
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="p-ui-inputform">
          <div class="p-ui-groupbox">
            <div class="p-ui-groupbox-header unselectable collapsable">
              <div class="p-ui-groupbox-header-left">
                <a href="javascript:void(0);"
                   title="このエリアをクリックすると、この詳細部分を折り畳み/展開できます"
                   class="p-ui-groupbox-header-left-item p-ui-groupbox-collapseindicator indicator-nocollapsed"
                ></a>
                <div class="p-ui-groupbox-header-left-item">
                  <div>語学力</div>
                </div>
              </div>
              <div class="p-ui-groupbox-header-right"></div>
            </div>
            <div class="p-ui-groupbox-content" style="display: block;">
              <div class="p-ui-groupbox-content-item">
                <table class="porters-table form p-ui-inputform-content col4">
                  <tbody>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">TOEIC</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="number"
                          data-alias="Resume.P_Toeic"
                      >
                        <div>
                          <div>
                            <div class="p-ui-numberinputinputdata" style=""></div>
                            <div
                              class="p-ui-numberinputinputobject inputwidget-inputobject ui-igedit ui-igedit-container ui-widget ui-corner-all ui-state-default"
                              style="display: inline-block;"
                            >
                              <div class="ui-igeditor-input-container ui-corner-all">
                                <label for="1590777360839EditingInput"></label>
                                <input
                                  id="1590777360839EditingInput"
                                  type="tel"
                                  class="ui-igedit-input"
                                  role="textbox" tabindex="800"
                                  style="height: 100%; text-align: right;"
                                >
                                <input type="hidden" value="" tabindex="800">
                              </div>
                            </div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="800" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">英語スキル</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="dropdown"
                          data-alias="Resume.P_EnglishGeneral"
                      >
                        <div>
                          <div>
                            <div class="p-ui-dropdowninputdata" style=""></div>
                            <label>
                              <select class="p-ui-dropdowninputobject inputwidget-inputobject" style="display: inline;"
                                      tabindex="802"
                              >
                                <option value="">-</option>
                                <option value="400">初級（簡単な挨拶、辞書を使っての読み書き）</option>
                                <option value="401">中級（日常会話、簡単な読み書き可能）</option>
                                <option value="402">上級（ビジネスレベルの会話、読み書き）</option>
                                <option value="10512">ネイティブレベル</option>
                              </select>
                            </label>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="802" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">TOEFL</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="number"
                          data-alias="Resume.P_Toefl"
                      >
                        <div>
                          <div>
                            <div class="p-ui-numberinputinputdata" style=""></div>
                            <div
                              class="p-ui-numberinputinputobject inputwidget-inputobject ui-igedit ui-igedit-container ui-widget ui-corner-all ui-state-default"
                              style="display: inline-block;"
                            >
                              <div class="ui-igeditor-input-container ui-corner-all">
                                <label for="1590777360843EditingInput"></label>
                                <input
                                  id="1590777360843EditingInput"
                                  type="tel"
                                  class="ui-igedit-input"
                                  role="textbox" tabindex="801"
                                  style="height: 100%; text-align: right;"
                                >
                                <input type="hidden" value="" tabindex="801">
                              </div>
                            </div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="801" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">語学力メモ</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="textarea"
                          data-alias="Resume.P_LanguageSkillMemo"
                      >
                        <div>
                          <div class="p-ui-textareainputdata" style=""></div>
                          <label>
                            <textarea
                              class="p-ui-textareainputobject inputwidget-inputobject p-ui-inputlimiter"
                              rows="5"
                              style="display: inline-block;"
                              tabindex="803"
                            ></textarea>
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="p-ui-inputform">
          <div class="p-ui-groupbox">
            <div class="p-ui-groupbox-header unselectable collapsable">
              <div class="p-ui-groupbox-header-left">
                <a
                  title="このエリアをクリックすると、この詳細部分を折り畳み/展開できます"
                  class="p-ui-groupbox-header-left-item p-ui-groupbox-collapseindicator indicator-nocollapsed"
                ></a>
                <div class="p-ui-groupbox-header-left-item">
                  <div>資格/スキル</div>
                </div>
              </div>
              <div class="p-ui-groupbox-header-right"></div>
            </div>
            <div class="p-ui-groupbox-content" style="display: block;">
              <div class="p-ui-groupbox-content-item">
                <table class="porters-table form p-ui-inputform-content col2">
                  <tbody>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">資格・スキル</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="textarea"
                          data-alias="Resume.P_LicenseMemo"
                      >
                        <div>
                          <div class="p-ui-textareainputdata" style=""></div>
                          <label>
                            <textarea
                              class="p-ui-textareainputobject inputwidget-inputobject p-ui-inputlimiter"
                              rows="5"
                              style="display: inline-block;"
                              tabindex="900"
                            ></textarea>
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">en 保有資格</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="checkbox"
                          data-alias="Resume.U_8C9CF6F51C7AC32A168CF9AB2AD856"
                      >
                        <div>
                          <div>
                            <div class="p-ui-checkboxinputdata" style="display: inline;"></div>
                            <ul class="p-ui-checkboxinputobject inputwidget-inputobject" style="">
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10514" name="displayItem_10100"
                                                                           tabindex="901"
                              >公認会計士</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10515" name="displayItem_10100"
                                                                           tabindex="901"
                              >CPA（米国公認会計士）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10516" name="displayItem_10100"
                                                                           tabindex="901"
                              >税理士</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10517" name="displayItem_10100"
                                                                           tabindex="901"
                              >証券アナリスト</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10518" name="displayItem_10100"
                                                                           tabindex="901"
                              >日商簿記検定1級</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10519" name="displayItem_10100"
                                                                           tabindex="901"
                              >日商簿記検定2級</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10520" name="displayItem_10100"
                                                                           tabindex="901"
                              >CMA（米国公認管理会計士）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10521" name="displayItem_10100"
                                                                           tabindex="901"
                              >MBA</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10522" name="displayItem_10100"
                                                                           tabindex="901"
                              >弁護士</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10523" name="displayItem_10100"
                                                                           tabindex="901"
                              >弁理士</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10524" name="displayItem_10100"
                                                                           tabindex="901"
                              >社会保険労務士</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10525" name="displayItem_10100"
                                                                           tabindex="901"
                              >中小企業診断士</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10526" name="displayItem_10100"
                                                                           tabindex="901"
                              >CIA（公認内部監査人）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10527" name="displayItem_10100"
                                                                           tabindex="901"
                              >証券アナリスト</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10528" name="displayItem_10100"
                                                                           tabindex="901"
                              >不動産鑑定士・鑑定士補</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10529" name="displayItem_10100"
                                                                           tabindex="901"
                              >CFA（米国証券アナリスト）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10530" name="displayItem_10100"
                                                                           tabindex="901"
                              >アクチュアリー（正会員）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10531" name="displayItem_10100"
                                                                           tabindex="901"
                              >アクチュアリー（準会員）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10532" name="displayItem_10100"
                                                                           tabindex="901"
                              >証券外務員一種</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10533" name="displayItem_10100"
                                                                           tabindex="901"
                              >証券外務員二種</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10534" name="displayItem_10100"
                                                                           tabindex="901"
                              >ファイナンシャル・プランナー(AFP/CFP)</label>
                              </li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10535" name="displayItem_10100"
                                                                           tabindex="901"
                              >宅地建物取引主任者</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10536" name="displayItem_10100"
                                                                           tabindex="901"
                              >薬剤師</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10537" name="displayItem_10100"
                                                                           tabindex="901"
                              >医薬情報担当者認定（MR認定）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10538" name="displayItem_10100"
                                                                           tabindex="901"
                              >OLACLE MASTER（Gold）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10539" name="displayItem_10100"
                                                                           tabindex="901"
                              >ORACLE MASTER（Platinum）</label>
                              </li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10540" name="displayItem_10100"
                                                                           tabindex="901"
                              >Cisco Certified Network
                                Professional（CCNP）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10541" name="displayItem_10100"
                                                                           tabindex="901"
                              >PMP（project Management
                                Professional）</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10542" name="displayItem_10100"
                                                                           tabindex="901"
                              >技術士</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10543" name="displayItem_10100"
                                                                           tabindex="901"
                              >技術士補</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10544" name="displayItem_10100"
                                                                           tabindex="901"
                              >1級建築士</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10545" name="displayItem_10100"
                                                                           tabindex="901"
                              >2級建築士</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10546" name="displayItem_10100"
                                                                           tabindex="901"
                              >1級土木施工管理技士</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10547" name="displayItem_10100"
                                                                           tabindex="901"
                              >2級土木施工管理技士</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10548" name="displayItem_10100"
                                                                           tabindex="901"
                              >1級建築施工管理技士</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10549" name="displayItem_10100"
                                                                           tabindex="901"
                              >2級建築施工管理技士</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10550" name="displayItem_10100"
                                                                           tabindex="901"
                              >1級電気工事士施工管理技士</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10551" name="displayItem_10100"
                                                                           tabindex="901"
                              >2級電気工事士施工管理技士</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10552" name="displayItem_10100"
                                                                           tabindex="901"
                              >第一種電気主任技術者</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10553" name="displayItem_10100"
                                                                           tabindex="901"
                              >第二種電気主任技術者</label></li>
                              <li><label class="p-ui-checkboxlabel"><input class="p-ui-checkboxcheckbox" type="checkbox"
                                                                           value="10554" name="displayItem_10100"
                                                                           tabindex="901"
                              >その他</label></li>
                            </ul>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="901" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="p-ui-inputform">
          <div class="p-ui-groupbox">
            <div class="p-ui-groupbox-header unselectable collapsable">
              <div class="p-ui-groupbox-header-left">
                <a href="javascript:void(0);"
                   title="このエリアをクリックすると、この詳細部分を折り畳み/展開できます"
                   class="p-ui-groupbox-header-left-item p-ui-groupbox-collapseindicator indicator-nocollapsed"
                ></a>
                <div class="p-ui-groupbox-header-left-item">
                  <div>エントリー情報</div>
                </div>
              </div>
              <div class="p-ui-groupbox-header-right"></div>
            </div>
            <div class="p-ui-groupbox-content" style="display: block;">
              <div class="p-ui-groupbox-content-item">
                <table class="porters-table form p-ui-inputform-content col2">
                  <tbody>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">エントリー時の付加情報</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="textarea"
                          data-alias="Resume.U_350ADAEF644BD76DE804BA8B32E2B3"
                      >
                        <div>
                          <div class="p-ui-textareainputdata" style="display: block;"></div>
                          <label>
                            <textarea class="p-ui-textareainputobject inputwidget-inputobject p-ui-inputlimiter" rows="5"
                                      style="" tabindex="1000"
                            ></textarea>
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">旧データメモ</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="textarea"
                          data-alias="Resume.P_Memo"
                      >
                        <div>
                          <div class="p-ui-textareainputdata" style="display: block;"></div>
                          <label>
                            <textarea
                              class="p-ui-textareainputobject inputwidget-inputobject p-ui-inputlimiter"
                              rows="5"
                              style=""
                              tabindex="1001"
                            ></textarea>
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="p-ui-inputform">
          <div class="p-ui-groupbox">
            <div class="p-ui-groupbox-header unselectable collapsable">
              <div class="p-ui-groupbox-header-left">
                <a href="javascript:void(0);"
                   title="このエリアをクリックすると、この詳細部分を折り畳み/展開できます"
                   class="p-ui-groupbox-header-left-item p-ui-groupbox-collapseindicator indicator-nocollapsed"
                ></a>
                <div class="p-ui-groupbox-header-left-item">
                  <div>求職管理簿用 ※※入力必須※※</div>
                </div>
              </div>
              <div class="p-ui-groupbox-header-right"></div>
            </div>
            <div class="p-ui-groupbox-content" style="display: block;">
              <div class="p-ui-groupbox-content-item">
                <table class="porters-table form p-ui-inputform-content col4">
                  <tbody>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">受付年月日</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="required"></div>
                          </div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="date"
                          data-alias="Resume.U_59D7EFD80565F98782105A19A5AB5F"
                      >
                        <div>
                          <div>
                            <div class="p-ui-datetimeinputinputdata" style=""></div>
                            <div class="p-ui-datetimeinputage"></div>
                            <span class="p-ui-datetimerangeseparatorinput" style="display:none"> ～ </span>
                            <div class="p-ui-datetimeinputinputdata2"></div>
                            <div class="p-ui-datetimeinputage2"></div>
                            <div class="p-ui-datetimeinputinputobject inputwidget-inputobject porters-datetimepicker"
                                 style="display: inline-block;"
                            >
                              <label for="dp1590777332415"></label><input
                                id="dp1590777332415"
                                class="porters-datetimepicker-date hasDatepicker"
                                type="text"
                                name="form_date"
                                tabindex="1100"
                              >
                              <button type="button" tabindex="1100">現在</button>
                            </div>
                            <span class="p-ui-datetimerangeseparatoreditable" style="display:none"> ～ </span>
                            <div class="p-ui-datetimeinputinputobject2"></div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="1100" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">有効期間開始</div>
                          <div class="p-ui-inputform-item-mark">
                            <div class="required"></div>
                          </div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="date"
                          data-alias="Resume.U_26B5D2703D4F033C067B43B895633D"
                      >
                        <div>
                          <div>
                            <div class="p-ui-datetimeinputinputdata" style=""></div>
                            <div class="p-ui-datetimeinputage"></div>
                            <span class="p-ui-datetimerangeseparatorinput" style="display:none"> ～ </span>
                            <div class="p-ui-datetimeinputinputdata2"></div>
                            <div class="p-ui-datetimeinputage2"></div>
                            <div class="p-ui-datetimeinputinputobject inputwidget-inputobject porters-datetimepicker"
                                 style="display: inline-block;"
                            >
                              <label for="dp1590777332416"></label>
                              <input
                                id="dp1590777332416"
                                class="porters-datetimepicker-date hasDatepicker"
                                type="text"
                                name="form_date"
                                tabindex="1101"
                              >
                              <button type="button" tabindex="1101">現在</button>
                            </div>
                            <span class="p-ui-datetimerangeseparatoreditable" style="display:none"> ～ </span>
                            <div class="p-ui-datetimeinputinputobject2"></div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="1101" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label"></div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input"></td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">有効期間終了</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="date"
                          data-alias="Resume.U_5D53E889259F97F290876CB8F249BA"
                      >
                        <div>
                          <div>
                            <div class="p-ui-datetimeinputinputdata" style=""></div>
                            <div class="p-ui-datetimeinputage"></div>
                            <span class="p-ui-datetimerangeseparatorinput" style="display:none"> ～ </span>
                            <div class="p-ui-datetimeinputinputdata2"></div>
                            <div class="p-ui-datetimeinputage2"></div>
                            <div class="p-ui-datetimeinputinputobject inputwidget-inputobject porters-datetimepicker"
                                 style="display: inline-block;"
                            >
                              <label for="dp1590777332417"></label>
                              <input
                                id="dp1590777332417"
                                class="porters-datetimepicker-date hasDatepicker"
                                type="text" name="form_date"
                                tabindex="1102"
                              >
                              <button type="button" tabindex="1102">現在</button>
                            </div>
                            <span class="p-ui-datetimerangeseparatoreditable" style="display:none"> ～ </span>
                            <div class="p-ui-datetimeinputinputobject2"></div>
                          </div>
                          <button class="p-ui-inputobjecteditbutton" tabindex="1102" style=""></button>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;">※終了日が分かり次第、必ず入力</div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="p-ui-inputform">
          <div class="p-ui-groupbox">
            <div class="p-ui-groupbox-header unselectable collapsable">
              <div class="p-ui-groupbox-header-left">
                <a
                  title="このエリアをクリックすると、この詳細部分を折り畳み/展開できます"
                  class="p-ui-groupbox-header-left-item p-ui-groupbox-collapseindicator indicator-nocollapsed"
                ></a>
                <div class="p-ui-groupbox-header-left-item">
                  <div>システム情報</div>
                </div>
              </div>
              <div class="p-ui-groupbox-header-right"></div>
            </div>
            <div class="p-ui-groupbox-content" style="display: block;">
              <div class="p-ui-groupbox-content-item">
                <table class="porters-table form p-ui-inputform-content col4">
                  <tbody>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">データ登録日</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="text"
                          data-alias="Resume.P_RegistrationDate"
                      >
                        <div>
                          <div class="p-ui-textinputinputdata" style="display: block;"></div>
                          <label>
                            <input
                              class="p-ui-textinputinputobject inputwidget-inputobject p-ui-inputlimiter"
                              tabindex="1200" style=""
                            >
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">データ更新日</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="text"
                          data-alias="Resume.P_UpdateDate"
                      >
                        <div>
                          <div class="p-ui-textinputinputdata" style="display: block;"></div>
                          <label>
                            <input
                              class="p-ui-textinputinputobject inputwidget-inputobject p-ui-inputlimiter"
                              tabindex="1202"
                              style=""
                            >
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">データ登録者</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="text"
                          data-alias="Resume.P_RegisteredBy"
                      >
                        <div>
                          <div class="p-ui-textinputinputdata" style="display: block;"></div>
                          <label>
                            <input class="p-ui-textinputinputobject inputwidget-inputobject p-ui-inputlimiter"
                                   tabindex="1201" style=""
                            >
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">データ更新者</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="text"
                          data-alias="Resume.P_UpdatedBy"
                      >
                        <div>
                          <div class="p-ui-textinputinputdata" style="display: block;"></div>
                          <label>
                            <input class="p-ui-textinputinputobject inputwidget-inputobject p-ui-inputlimiter"
                                   tabindex="1203" style=""
                            >
                          </label>
                        </div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                    <tr class="p-ui-inputform-row">
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label"></div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input"></td>
                      <th class="p-ui-inputform-item-title">
                        <div class="th">
                          <div class="p-ui-inputform-item-label">旧システムID</div>
                          <div class="p-ui-inputform-item-mark"></div>
                        </div>
                      </th>
                      <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="text" data-alias="Resume.P_PaNo">
                        <div>
                          <div class="p-ui-textinputinputdata" style="display: block;"></div>
                          <label>
                            <input
                              class="p-ui-textinputinputobject inputwidget-inputobject p-ui-inputlimiter"
                              tabindex="1204" style=""
                            >
                          </label></div>
                        <div class="p-ui-annotation hint" style="display: block;"></div>
                        <div class="p-ui-validation p-ui-inputvalidation"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="generalformDialog-emailArea hidden" style="bottom: 72px;">
      <div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix ui-draggable-handle headerDiv">
        <span class="ui-dialog-title">メール通知</span>
        <button type="button"
                class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only                                ui-dialog-titlebar-close"
                role="button"
                title="Close"
        >
          <span class="ui-button-icon-primary ui-icon ui-icon-closethick"></span>
          <span class="ui-button-text">Close</span>
        </button>
      </div>
      <div id="emailContent-Resume" class="emailContent" style="height:auto;max-height:565px">
        <table class="porters-table form p-ui-inputform-content col2">
          <tbody>
            <tr class="p-ui-inputform-row">
              <th class="p-ui-inputform-item-title">
                <div class="th">
                  <div class="p-ui-inputform-item-label">メール通知先</div>
                  <div class="p-ui-inputform-item-mark"></div>
                </div>
              </th>
              <td>
                <div class="emailDiv">
                  <span style="padding-right:10px;">
                    <label style="display:inline-block;">
                      <input type="checkbox" value="owner">
                      <span>所有者</span>
                    </label>
                  </span>
                  <span style="padding-right:10px;">
                    <label style="display:inline-block;">
                      <input type="checkbox" value="user">
                      <span>user</span>
                    </label>
                  </span>
                  <span style="padding-right:10px;">
                    <label style="display:inline-block;">
                      <input type="checkbox" value="person">
                      <span>個人連絡先所有者</span>
                    </label>
                  </span>
                  <span style="padding-right:10px;">
                    <label style="display:inline-block;">
                      <input type="checkbox" value="dept">
                      <span>所属部署</span>
                    </label>
                  </span>
                </div>
              </td>
            </tr>
            <tr class="p-ui-inputform-row">
              <th class="p-ui-inputform-item-title">
                <div class="th">
                  <div class="p-ui-inputform-item-label">その他</div>
                  <div class="p-ui-inputform-item-mark"></div>
                </div>
              </th>
              <td>
                <div class="emailOtherToList p-ui-inputobject" data-type="userreference">
                  <div>
                    <div>
                      <div class="p-ui-userinputinputdata" style=""></div>
                      <div class="p-ui-userinputinputobject inputwidget-inputobject userSelection"
                           style="display: inline-block;"
                      >
                        <ul>
                          <li class="searchCombo">
                            <div
                              class="ui-igcombo ui-state-default ui-widget ui-corner-all"
                              style="overflow: hidden; display: inline-block;"
                            >
                              <span
                                class="ui-igcombo-fieldholder ui-igcombo-fieldholder-ltr ui-corner-left"
                                style="float: left;"
                              >
                                <label>
                                  <input
                                    class="ui-igcombo-field ui-corner-all"
                                    style="float: left;"
                                  >
                                </label>
                                <span
                                  class="ui-igcombo-clear"
                                  data-id="2"
                                  style="float: right; outline: 0;"
                                >
                                  <span
                                    class="ui-igcombo-clearicon ui-icon-circle-close ui-icon"
                                    style="outline: 0;"
                                  ></span>
                                </span>
                              </span>
                              <span
                                class="ui-igcombo-button ui-state-default ui-igcombo-button-ltr ui-corner-right"
                                data-id="1"
                                title="ドロップダウンの表示"
                                style="float: right; outline: 0;"
                              >
                                <span
                                  class="ui-igcombo-buttonicon ui-icon-triangle-1-s ui-icon"
                                  style="outline: 0;"
                                ></span>
                              </span>
                            </div>
                          </li>
                        </ul>
                        <div class="userSelection-searchBox">
                          <input type="button" style="width:18px;">
                        </div>
                      </div>
                    </div>
                    <button class="p-ui-inputobjecteditbutton" style=""></button>
                  </div>
                  <div class="p-ui-annotation hint" style=""></div>
                  <div class="p-ui-validation"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="email-form p-ui-inputform">
          <table class="porters-table form p-ui-inputform-content col2">
            <tbody>
              <tr class="p-ui-inputform-row">
                <th class="p-ui-inputform-item-title">
                  <div class="th">
                    <div class="p-ui-inputform-item-label">件名</div>
                    <div class="p-ui-inputform-item-mark"></div>
                  </div>
                </th>
                <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="text" data-alias="EmailTitle">
                  <div>
                    <div class="p-ui-textinputinputdata" style=""></div>
                    <label>
                      <input
                        class="p-ui-textinputinputobject inputwidget-inputobject p-ui-inputlimiter"
                        tabindex="200"
                        style="display: inline-block;"
                      >
                    </label></div>
                  <div class="p-ui-annotation hint" style=""></div>
                  <div class="p-ui-validation p-ui-inputvalidation"></div>
                </td>
              </tr>
              <tr class="p-ui-inputform-row">
                <th class="p-ui-inputform-item-title">
                  <div class="th">
                    <div class="p-ui-inputform-item-label">コメント</div>
                    <div class="p-ui-inputform-item-mark"></div>
                  </div>
                </th>
                <td class="p-ui-inputform-item-input p-ui-inputobject" data-type="textarea" data-alias="EmailComment">
                  <div>
                    <div class="p-ui-textareainputdata" style=""></div>
                    <label>
                      <textarea
                        class="p-ui-textareainputobject inputwidget-inputobject p-ui-inputlimiter"
                        rows="5"
                        tabindex="201"
                        style="display: inline-block;"
                      ></textarea>
                    </label>
                  </div>
                  <div class="p-ui-annotation hint" style=""></div>
                  <div class="p-ui-validation p-ui-inputvalidation"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>*ブラウザ/リソースごとに前回入力した件名と本文を保存します</div>
      </div>
    </div>
    <div class="ui-resizable-handle ui-resizable-n" style="z-index: 90;"></div>
    <div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div>
    <div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div>
    <div class="ui-resizable-handle ui-resizable-w" style="z-index: 90;"></div>
    <div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div>
    <div class="ui-resizable-handle ui-resizable-sw" style="z-index: 90;"></div>
    <div class="ui-resizable-handle ui-resizable-ne" style="z-index: 90;"></div>
    <div class="ui-resizable-handle ui-resizable-nw" style="z-index: 90;"></div>
    <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
      <div class="ui-dialog-buttonset">
        <div class="generalformDialog-linkWrapper"><a href="javascript:void(0);" class="generalformDialog-emailLink">メールで通知する</a>
        </div>
        <button
          type="button"
          class="okButton ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"
          role="button"
        >
          <span class="ui-button-text">保存</span>
        </button>
        <button
          type="button"
          class="cancelButton ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"
          role="button"
        >
          <span class="ui-button-text">キャンセル</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

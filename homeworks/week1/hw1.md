# hw1 交作業流程

## 流程
1. 複製 "mentor-program-5th-powerfultraveling" 這個資料庫到 local 端去。`git clone "url"`
2. 複製完後開一個新的 branch "week1"，不論是作業或是未來進行 project ，之所以要新開一個 branchu，主要有兩個原因:
   * 我們都沒辦法十足把握自己的內容會成為最終版本。
   * 在開發的同時，穩定版必須進行運作，所以要編輯內容的話，要在新開的 branch 裡面進行比較妥當。`git branch week1`
3. 移動到新開的 branch 上(以下以 week1 代稱)。(git checkout week1)
4. 開始編輯檔案。
5. 完成編輯之後，對該檔案進行 add、commit 兩個動作。`git commit -am"hmw1"`
6. 在 local 端 commit 完成後，現在要將這個經過編輯後長得不太一樣的 week1 push 到 remote repo。`git push origin week1`
7. 確認 week1 有確實更新到 remote repo 上。
8. 確認過後並確定功課沒有錯誤後送出 pull request予助教。
9. 助教於審核並認可之後，會將week1 merge 到 remote repo 的主要 branch 上，remote repo 就更新完成了。
10. 因為 week1 的編輯結果已經 merge 進主要的 branch 裡了，所以可以刪掉 week1 了。
11. 最後，我們在將完成更新的 remote repo pull 到 local 端。`git pull origin master`
12. 完成 pull 的動作後就完成兩邊的同步。

以上

## 附註:
因為目前還不熟 git 的操作，所以過程中可以用 `git log`、`git branch -v`  以及 `git status` 三個指令隨時查看狀況。


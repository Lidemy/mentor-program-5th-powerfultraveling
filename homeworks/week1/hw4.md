# 你改我修都不怕-初探專案管理軟體 git
## 前言
在講解 git 這個軟體之前，想先跟大家介紹這個軟體要解決的是甚麼問題，有問題意識之後，會更容易理解 git 存在的意義以及它的功能。
## 你我都曾遇到的版本管理之亂
大家在大學時一定都修過要交報告的課程吧，但是報告總會經過多次修改，最後產生了許多修正版，這個時候我們大部分應該都是這麼做的吧:![](https://static.coderbridge.com/img/gastbyylion/2780cb9acc7b4714b8eb5d215d477ea9.png)
假如命名沒有特定的規則的話，到最後很容易搞不清楚哪個才是最新的版本，或是想要使用某個還未編輯的版本時找不到那個檔案。

就算依照特定的規則命名，遇到團隊專案的時候卻會遇到另一個問題，如果許多人同時修改了同個版本的檔案並且上傳到雲端上時，大家各自修改的版本就會互相覆蓋或是不知道誰改了甚麼。
![](https://static.coderbridge.com/img/gastbyylion/181e438e1e57469486bee0fa5ae2f957.png)

git 就是為了解決這些問題而誕生的。

## 化繁為簡的專案管理工具 git
git 會將檔案的每個狀態當作歷史紀錄保存起來，也會將每個版本修改了甚麼一併紀錄，因此可以把檔案恢復任一個時點的狀態，但是 git 究竟是怎麼運作的呢? 接下來讓我們一探究竟吧!

### 我的兩個倉庫 local 與 remote
如果在 google 上面搜尋關鍵字 git 一定常常看到 "git 是一個分散式版本管理系統" 這樣的資訊，那甚麼是分散式版本管理系統呢? 
試想你是個設計師，你必須要和其他設計師一起產出五個設計圖，所以你在 server 上建立了一個資料夾，這麼一來大家就可以在雲端上編輯並且一起版本控制。

但是，假如哪一天伺服器忽然爆掉了，那所有的版本管理可能就在一瞬間消失，只剩下你和其他設計師各自下載的檔案快照(版本控制、歷史紀錄則一滴都不剩)。

分散式版本管理系統就是為了解決這個問題而誕生的。

在分散式版本管理系統中，使用者不單從遠端資料庫取出檔案快照，也會把整個資料倉儲一併存取下來。因此，不論是歷史修改紀錄，或是分支(等等會提到)，都會如鏡像一般儲存到使用者的電腦裡。而遠端資料庫就是所謂的 remote，使用者端的資料庫則稱為 local。
![](https://static.coderbridge.com/img/gastbyylion/eb75f9f36b224791a9c33e829b1d3a56.png)
這麼一來，不但團隊可以協做版本控制，在伺服器(remote)掛掉的時候，用戶端的電腦裡(local)也都有相同的資料倉儲，就不會發生之前那樣的意外，而 git 就是一個擁有這樣特性的版本控制軟體。

有了 Local 和 remote 的概念後接著來了解在 git 的世界裡，兩個資料庫式怎麼同步的吧!

### git 的四個區域與四個檔案狀態

在 git 的世界裡，一共分成四個區域，這四個區域合起來統稱為 working tree:
1. working directory: 目前工作目錄(講白了就是你在哪一個資料夾裏頭)
2. staging area: 暫存準備遞交區，有些在 working directory 修改後的資料會 add 到這裡，等到確定之後再 commit 到在本機裡的資料庫(也就是 local repo)
3. local repo: 本地儲存庫，就是儲存整個專案的資料庫。
4. remote repo: 遠單儲存庫，與 local repo 一樣是儲存整個專案的資料庫，不同的是他建立在一個遠端的伺服器上，於多人協作時團隊可以藉由上傳 local repo 到 remote repo 或是將經過他人編輯過的 remote repo 拉回 local repo 同步所有的資料庫，達到有效管理專案的目標。

而在這個 working tree 裡面檔案有四種狀態:
1. untracked file: 沒有被追蹤的檔案。
2. changes not staged for commit: 已經被修改過，但還沒被 add 到 staging area 的檔案。 
3. changes to be committed: 已修改，被 add 到 staging area，準備被 commit 到 local repo 的檔案。
4. commited: 已經被遞交到 local repo 的檔案 (就是已經進入本機資料庫的檔案)


有了上述的觀念後，接下來將會以實例，一步步熟悉 git 建立檔案到遞交的指令。

### 分支是甚麼?
在軟體開發的過程，常常會需要同步開發多個新功能，但是如果大家都去改原檔的話，會導致軟體在那段時間根本不可能運作，而且開發過程也會互相阻擾。
但是呢，假如複製一組跟原檔一模一樣的分支(branch)出去開發，等到開發玩了以後再全部合併(merge)回主線(master)，不但不會影響軟體的運作，新功能的開發也不會互相干擾，這就是分支的概念。
### 幫幫菜哥管理他的笑話!
脫口秀主持人菜哥每天都會花上大量的時間發想新的點子，同時他還有一個團隊幫他發想各種 idea，但是他們團隊近日卻發現專案管理上有些困難，所以打算導入 git 幫助他們管理 idea，請問他們該如何做呢?

#### 1. 設定 user name 以及 email
* `git config --global user.name "Tsai"`
* `git config --global user.email "Tsai@gmail.com"`

#### 2. 建立 local repository
* `mkdir joke`: 建立一個名為 joke 的資料夾。
* `cd joke`: 進入 joke 資料夾。
* `git init`: 建立 git。 

#### 3. 在裡面建立檔案
可以把原本就存在的檔案進去，也可以使用 command line 指令建立檔案。
* `touch funny.txt`: 建立一個叫做 funny 的txt檔案。(此時這個檔案的狀態是 untracked file)

#### 4. 編輯檔案
這時候可以直接打開 funny.txt 檔案起來做編輯，或是也可以用 `vim funny.txt` 這個指令做簡易的文字編輯。(編輯完成後檔案的狀態是 changes not staged for commit)

#### 5. add 檔案到 staging area
完成編輯的檔案可以先把他放到 staging area 等待被  commited 到 local repo。
* `git add funny.txt`(此時檔案的狀態是 changes to be commited)

#### 6. commit 到 local repo
* `git commit -m funny.txt`: 用這個指令可以將檔案 commit 到 local repo。

-----
在這個虛線以上，我們已經完成了 local 端的部分，資料以及編輯過的內容都一併被存入 local repo。
但是菜哥的整個團隊需要一同完成專案，所以還要將 local repo  完整 push 到 remote repo(通常會使用 github)。因此，在接下來的部分我們將學習如何把完成這項任務。
#### 7. 「推」到 remote repo
* `git push origin master`: 在這個指令中，origin 這個參數代表 github；master 則代表主線(相較於分支 branch，目前的專案還未建立 branch)

push 上去 remote repo 之後，製作人老余修改了 funny.txt 的其中四則笑話，這時候菜哥想要將這個改變同步到 local repo 時該怎麼做呢?
#### 8. 「拉」進 local repo
* `git pull origin master`: 用這個指令的話，可以將在 remote repo 曾經過編輯的檔案拉下來並且 merge 到 local repo 裡去。

### 一樣是個黑洞的 git
跑完以上的程序後，應該就有辦法建立第一個用 git 版控的專案了，但是這只是 git 最基本的指令，接下來筆者還會找時間慢慢補充其他觀念以及指令，希望可以帶初學者更無痛的接觸 git。




 





 




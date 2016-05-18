内容来源 http://blog.jobbole.com/78960/
git push origin master  本地提交的代码传到git远程仓库

命令行命令：
cd e：回车         进入e盘
cd www             进入www文件夹

git初始设置
$ git config --global user.name "yezi153"
$ git config --global user.email "1435443048@qq.com"
git config  –global 参数，有了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然你也可以对某个仓库指定的不同的用户名和邮箱。

一：如何操作:
1.创建一个版本库也非常简单，如下我是E盘 –> www下 目录下新建一个testgit版本库($pwd 命令是用于显示当前的目录);
2.通过命令$git init 把这个目录变成git可以管理的仓库,  这时候你当前testgit目录下会多了一个.git的目录，这个目录是Git来跟踪管理版本的，没事千万不要手动乱改这个目录里面的文件，否则，会把git仓库给破坏了。

如何本地提交文件：
第一步：使用命令 git add readme.txt添加到暂存区里面去;($git add readme.txt)
第二步：用命令 git commit告诉Git，把文件提交到仓库;($git commit -m 'readme.txt')
现在我们已经提交了一个readme.txt文件了，我们下面可以通过命令git status来查看是否还有文件未提交;($git status)
如果命令告诉我们 readme.txt文件已被修改，但是未被提交的修改，接下来我想看下readme.txt文件到底改了什么内容，如何查看呢？可以使用如下命令：
$git diff readme.txt

二：版本回退

git log                   查看下历史记录
git log –pretty=oneline    嫌上面显示的信息太多的话
git reset  –hard HEAD^     回退到上一个版本
git reset  –hard HEAD^^    回退到上上一个版本
git reset  –hard HEAD~100  回退到前100个版本
git reflog                 获取到版本号
git reset  –hard 6fcfc89    通过版本号回退

工作区：就是你在电脑上看到的目录，比如目录下testgit里的文件(.git隐藏目录版本库除外)。或者以后需要再新建的目录文件等等都属于工作区范畴。
版本库(Repository)：工作区有一个隐藏目录.git,这个不属于工作区，这是版本库。其中版本库里面存了很多东西，其中最重要的就是stage(暂存区)，还有Git为我们自动创建了第一个分支master,以及指向master的一个指针HEAD。

我们前面说过使用Git提交文件到版本库有两步：
  第一步：是使用 git add 把文件添加进去，实际上就是把文件添加到暂存区。
  第二步：使用git commit提交更改，实际上就是把暂存区的所有内容提交到当前分支上。

Git撤销修改和删除文件操作
cat readme.txt   查看文件内容
git checkout --readme.txt   撤销readme.txt修改

删除文件
一般情况下，可以直接在文件目录中把文件删了，或者使用如上rm命令：rm b.txt ，如果我想彻底从版本库中删掉了此文件的话，可以再执行commit命令提交掉




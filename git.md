������Դ http://blog.jobbole.com/78960/
git push origin master  �����ύ�Ĵ��봫��gitԶ�ֿ̲�

���������
cd e���س�         ����e��
cd www             ����www�ļ���

git��ʼ����
$ git config --global user.name "yezi153"
$ git config --global user.email "1435443048@qq.com"
git config  �Cglobal ���������������������ʾ����̨���������е�Git�ֿⶼ��ʹ��������ã���Ȼ��Ҳ���Զ�ĳ���ֿ�ָ���Ĳ�ͬ���û��������䡣

һ����β���:
1.����һ���汾��Ҳ�ǳ��򵥣���������E�� �C> www�� Ŀ¼���½�һ��testgit�汾��($pwd ������������ʾ��ǰ��Ŀ¼);
2.ͨ������$git init �����Ŀ¼���git���Թ���Ĳֿ�,  ��ʱ���㵱ǰtestgitĿ¼�»����һ��.git��Ŀ¼�����Ŀ¼��Git�����ٹ���汾�ģ�û��ǧ��Ҫ�ֶ��Ҹ����Ŀ¼������ļ������򣬻��git�ֿ���ƻ��ˡ�
��α����ύ�ļ���
��һ����ʹ������ git add readme.txt��ӵ��ݴ�������ȥ;($git add readme.txt)
�ڶ����������� git commit����Git�����ļ��ύ���ֿ�;($git commit -m 'readme.txt')
���������Ѿ��ύ��һ��readme.txt�ļ��ˣ������������ͨ������git status���鿴�Ƿ����ļ�δ�ύ;($git status)
�������������� readme.txt�ļ��ѱ��޸ģ�����δ���ύ���޸ģ����������뿴��readme.txt�ļ����׸���ʲô���ݣ���β鿴�أ�����ʹ���������
$git diff readme.txt

�����汾����

git log                   �鿴����ʷ��¼
git log �Cpretty=oneline    ��������ʾ����Ϣ̫��Ļ�
git reset  �Chard HEAD^     ���˵���һ���汾
git reset  �Chard HEAD^^    ���˵�����һ���汾
git reset  �Chard HEAD~100  ���˵�ǰ100���汾
git reflog                 ��ȡ���汾��
git reset  �Chard 6fcfc89    ͨ���汾�Ż���

���������������ڵ����Ͽ�����Ŀ¼������Ŀ¼��testgit����ļ�(.git����Ŀ¼�汾�����)�������Ժ���Ҫ���½���Ŀ¼�ļ��ȵȶ����ڹ��������롣
�汾��(Repository)����������һ������Ŀ¼.git,��������ڹ����������ǰ汾�⡣���а汾��������˺ܶණ������������Ҫ�ľ���stage(�ݴ���)������GitΪ�����Զ������˵�һ����֧master,�Լ�ָ��master��һ��ָ��HEAD��

����ǰ��˵��ʹ��Git�ύ�ļ����汾����������
  ��һ������ʹ�� git add ���ļ���ӽ�ȥ��ʵ���Ͼ��ǰ��ļ���ӵ��ݴ�����
  �ڶ�����ʹ��git commit�ύ���ģ�ʵ���Ͼ��ǰ��ݴ��������������ύ����ǰ��֧�ϡ�

Git�����޸ĺ�ɾ���ļ�����
cat readme.txt   �鿴�ļ�����
git checkout --readme.txt   ����readme.txt�޸�

ɾ���ļ�
һ������£�����ֱ�����ļ�Ŀ¼�а��ļ�ɾ�ˣ�����ʹ������rm���rm b.txt ��������볹�״Ӱ汾����ɾ���˴��ļ��Ļ���������ִ��commit�����ύ��



gitԶ�̿�
�����gitԶ�̿��ֻҪ���������ύ���Ϳ���ͨ���������
git push origin master
�ѱ���master��֧�������޸����͵�github���ˡ�

��¡����  git clone https://github.com/tugenhua0707/testgit2

git checkout -b dev   �������л���֧���൱������2������
git branch dev         
git checkout dev

�ܽᴴ����ϲ���֧�������£�

�鿴��֧��git branch

������֧��git branch name

�л���֧��git checkout name

����+�л���֧��git checkout �Cb name

�ϲ�ĳ��֧����ǰ��֧��git merge name

ɾ����֧��git branch �Cd name

�������鿴��֧�ϲ�������Ļ�����Ҫʹ������ git log.������

 ͨ���ϲ���֧ʱ��gitһ��ʹ�á�Fast forward��ģʽ��������ģʽ�£�ɾ����֧�󣬻ᶪ����֧��Ϣ������������ʹ�ô����� �Cno-ff�����á�Fast forward��ģʽ��

��֧���ԣ�����master����֧Ӧ���Ƿǳ��ȶ��ģ�Ҳ�������������°汾��һ������²�����������ɻ�ɻ�һ����������½���dev��֧�ϸɻ����󣬱�����Ҫ����������˵dev��֧�����ȶ�����Ժϲ�������֧master������



Git���������������£�

   mkdir��         XX (����һ����Ŀ¼ XXָĿ¼��)

   pwd��          ��ʾ��ǰĿ¼��·����

   git init          �ѵ�ǰ��Ŀ¼��ɿ��Թ����git�ֿ⣬��������.git�ļ���

   git add XX       ��xx�ļ���ӵ��ݴ���ȥ��

   git commit �Cm ��XX��  �ύ�ļ� �Cm �������ע�͡�

   git status        �鿴�ֿ�״̬

   git diff  XX      �鿴XX�ļ��޸�����Щ����

   git log          �鿴��ʷ��¼

   git reset  �Chard HEAD^ ���� git reset  �Chard HEAD~ ���˵���һ���汾

                        (�������˵�100���汾��ʹ��git reset �Chard HEAD~100 )

   cat XX         �鿴XX�ļ�����

   git reflog       �鿴��ʷ��¼�İ汾��id

   git checkout  --XX  ��XX�ļ��ڹ��������޸�ȫ��������

   git rm XX          ɾ��XX�ļ�

   git remote add origin https://github.com/tugenhua0707/testgit ����һ��Զ�̿�

   git push �Cu(��һ��Ҫ��-u �Ժ���Ҫ) origin master �ѵ�ǰmaster��֧���͵�Զ�̿�

   git clone https://github.com/tugenhua0707/testgit  ��Զ�̿��п�¡

   git checkout �Cb dev  ����dev��֧ ���л���dev��֧��

   git branch  �鿴��ǰ���еķ�֧

   git checkout master �л���master��֧

   git merge dev    �ڵ�ǰ�ķ�֧�Ϻϲ�dev��֧

   git branch �Cd dev ɾ��dev��֧

   git branch name  ������֧

   git stash �ѵ�ǰ�Ĺ����������� ���Ժ�ָ��ֳ����������

   git stash list �鿴���б����ص��ļ��б�

   git stash apply �ָ������ص��ļ����������ݲ�ɾ��

   git stash drop ɾ���ļ�

   git stash pop �ָ��ļ���ͬʱ Ҳɾ���ļ�

   git remote �鿴Զ�̿����Ϣ

   git remote �Cv �鿴Զ�̿����ϸ��Ϣ

   git push origin master  Git���master��֧���͵�Զ�̿��Ӧ��Զ�̷�֧��






---
title: python异常处理
---

## 异常

### Python所有的内置异常

```python
BaseException  # 所有异常的基类
 +-- SystemExit  # 解释器请求退出
 +-- KeyboardInterrupt  # 用户中断执行(通常是输入^C)
 +-- GeneratorExit  # 生成器(generator)发生异常来通知退出
 +-- Exception  # 常规异常的基类
      +-- StopIteration  # 迭代器没有更多的值
      +-- StopAsyncIteration  # 必须通过异步迭代器对象的__anext__()方法引发以停止迭代
      +-- ArithmeticError  # 各种算术错误引发的内置异常的基类
      |    +-- FloatingPointError  # 浮点计算错误
      |    +-- OverflowError  # 数值运算结果太大无法表示
      |    +-- ZeroDivisionError  # 除(或取模)零 (所有数据类型)
      +-- AssertionError  # 当assert语句失败时引发
      +-- AttributeError  # 属性引用或赋值失败
      +-- BufferError  # 无法执行与缓冲区相关的操作时引发
      +-- EOFError  # 当input()函数在没有读取任何数据的情况下达到文件结束条件(EOF)时引发
      +-- ImportError  # 导入模块/对象失败
      |    +-- ModuleNotFoundError  # 无法找到模块或在在sys.modules中找到None
      +-- LookupError  # 映射或序列上使用的键或索引无效时引发的异常的基类
      |    +-- IndexError  # 序列中没有此索引(index)
      |    +-- KeyError  # 映射中没有这个键
      +-- MemoryError  # 内存溢出错误(对于Python 解释器不是致命的)
      +-- NameError  # 未声明/初始化对象 (没有属性)
      |    +-- UnboundLocalError  # 访问未初始化的本地变量
      +-- OSError  # 操作系统错误，EnvironmentError，IOError，WindowsError，socket.error，select.error和mmap.error已合并到OSError中，构造函数可能返回子类
      |    +-- BlockingIOError  # 操作将阻塞对象(e.g. socket)设置为非阻塞操作
      |    +-- ChildProcessError  # 在子进程上的操作失败
      |    +-- ConnectionError  # 与连接相关的异常的基类
      |    |    +-- BrokenPipeError  # 另一端关闭时尝试写入管道或试图在已关闭写入的套接字上写入
      |    |    +-- ConnectionAbortedError  # 连接尝试被对等方中止
      |    |    +-- ConnectionRefusedError  # 连接尝试被对等方拒绝
      |    |    +-- ConnectionResetError    # 连接由对等方重置
      |    +-- FileExistsError  # 创建已存在的文件或目录
      |    +-- FileNotFoundError  # 请求不存在的文件或目录
      |    +-- InterruptedError  # 系统调用被输入信号中断
      |    +-- IsADirectoryError  # 在目录上请求文件操作(例如 os.remove())
      |    +-- NotADirectoryError  # 在不是目录的事物上请求目录操作(例如 os.listdir())
      |    +-- PermissionError  # 尝试在没有足够访问权限的情况下运行操作
      |    +-- ProcessLookupError  # 给定进程不存在
      |    +-- TimeoutError  # 系统函数在系统级别超时
      +-- ReferenceError  # weakref.proxy()函数创建的弱引用试图访问已经垃圾回收了的对象
      +-- RuntimeError  # 在检测到不属于任何其他类别的错误时触发
      |    +-- NotImplementedError  # 在用户定义的基类中，抽象方法要求派生类重写该方法或者正在开发的类指示仍然需要添加实际实现
      |    +-- RecursionError  # 解释器检测到超出最大递归深度
      +-- SyntaxError  # Python 语法错误
      |    +-- IndentationError  # 缩进错误
      |         +-- TabError  # Tab和空格混用
      +-- SystemError  # 解释器发现内部错误
      +-- TypeError  # 操作或函数应用于不适当类型的对象
      +-- ValueError  # 操作或函数接收到具有正确类型但值不合适的参数
      |    +-- UnicodeError  # 发生与Unicode相关的编码或解码错误
      |         +-- UnicodeDecodeError  # Unicode解码错误
      |         +-- UnicodeEncodeError  # Unicode编码错误
      |         +-- UnicodeTranslateError  # Unicode转码错误
      +-- Warning  # 警告的基类
           +-- DeprecationWarning  # 有关已弃用功能的警告的基类
           +-- PendingDeprecationWarning  # 有关不推荐使用功能的警告的基类
           +-- RuntimeWarning  # 有关可疑的运行时行为的警告的基类
           +-- SyntaxWarning  # 关于可疑语法警告的基类
           +-- UserWarning  # 用户代码生成警告的基类
           +-- FutureWarning  # 有关已弃用功能的警告的基类
           +-- ImportWarning  # 关于模块导入时可能出错的警告的基类
           +-- UnicodeWarning  # 与Unicode相关的警告的基类
           +-- BytesWarning  # 与bytes和bytearray相关的警告的基类
           +-- ResourceWarning  # 与资源使用相关的警告的基类。被默认警告过滤器忽略。
```

### 某些模块中的异常

比如request库中内置的异常，不同模块中有其自己定义的异常。

调用内置异常

```python
from requests.exceptions import ConnectionError, ReadTimeout
```

request模块内置异常结构

```python
IOError
 +-- RequestException  # 处理不确定的异常请求
      +-- HTTPError  # HTTP错误
      +-- ConnectionError  # 连接错误
      |    +-- ProxyError  # 代理错误
      |    +-- SSLError  # SSL错误
      |    +-- ConnectTimeout(+-- Timeout)  # (双重继承，下同)尝试连接到远程服务器时请求超时，产生此错误的请求可以安全地重试。
      +-- Timeout  # 请求超时
      |    +-- ReadTimeout  # 服务器未在指定的时间内发送任何数据
      +-- URLRequired  # 发出请求需要有效的URL
      +-- TooManyRedirects  # 重定向太多
      +-- MissingSchema(+-- ValueError) # 缺少URL架构(例如http或https)
      +-- InvalidSchema(+-- ValueError) # 无效的架构，有效架构请参见defaults.py
      +-- InvalidURL(+-- ValueError)  # 无效的URL
      |    +-- InvalidProxyURL  # 无效的代理URL
      +-- InvalidHeader(+-- ValueError)  # 无效的Header
      +-- ChunkedEncodingError  # 服务器声明了chunked编码但发送了一个无效的chunk
      +-- ContentDecodingError(+-- BaseHTTPError)  # 无法解码响应内容
      +-- StreamConsumedError(+-- TypeError)  # 此响应的内容已被使用
      +-- RetryError  # 自定义重试逻辑失败
      +-- UnrewindableBodyError  # 尝试倒回正文时，请求遇到错误
      +-- FileModeWarning(+-- DeprecationWarning)  # 文件以文本模式打开，但Requests确定其二进制长度
      +-- RequestsDependencyWarning  # 导入的依赖项与预期的版本范围不匹配
Warning
 +-- RequestsWarning  # 请求的基本警告
```

### 用户自定义的异常

除了python内置异常和一些模块中内置异常外，用户也可以自定义异常。

```python
class WupeiqiException(Exception):  ## 继承父类Exception
  
  def __init__(self, msg): ## 初始化方法
    self.message = msg
  
  def __str__(self): 
    return self.message
  
try:
  raise WupeiqiException('我的异常')
except WupeiqiException as e:
  print(e)
```

## 异常捕获

### 异常捕获中的一些关键字

| 关键字     | 关键字说明                                      |
| :--------- | :---------------------------------------------- |
| try/except | 捕获异常并处理                                  |
| pass       | 忽略异常                                        |
| as         | 定义异常实例（except MyError as e）             |
| else       | 如果try中的语句没有引发异常，则执行else中的语句 |
| finally    | 无论是否出现异常，都执行的代码                  |
| raise      | 抛出/引发异常                                   |

```python
try:
  # 主代码块
  pass
except KeyError,e:
  # 异常时，执行该块
  pass
else:
  # 主代码块执行完，执行该块
  pass
finally:
  # 无论异常与否，最终执行该块
  pass
        
```

### raise

主动触发异常

适用于主动触发异常，自定义异常内容，自定义报错信息。

```python
a = 112
try:
    if a > 110:
        raise Exception("blahblahblah")
except Exception as e:
    print(e)
```






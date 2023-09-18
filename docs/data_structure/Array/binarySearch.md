---
title:  704. 二分查找
---
[[toc]]
# 704. 二分查找
[力扣链接](https://leetcode.cn/problems/binary-search/)

给你一个升序数组nums和一个目标值target，返回目标值target在数组nums中的下标，如果不存在则返回-1  
如：

>输入: nums = [-1,0,3,5,9,12], target = 9     
输出: 4       
解释: 9 出现在 nums 中并且下标为 4  


## 思路  
1、二分法，逐渐缩小范围，确定目标值的范围  

2、中间值比目标值大，即右边的值要缩小到原来中间的值  

3、中间值比目标值小，即左边的值要缩小到原来中间的值  

二分法的总体不难，但是需要缕清边界关系
::: tip 需要弄清
什么时候用`while(left < right)`什么时候用`while(left <= right)`  
什么时候用`right = middle` 什么时候用`right = middle - 1`
:::
所以要一开始确立区间的定义，在每一次边界的处理都要坚持区间的定义
### 第一种写法： 左闭右闭区间
第一种写法，我们定义 target 是在一个在**左闭右闭**的区间里，即[left, right]，所以  
+ `while(left <= right)`要使用`<=` ，因为在左闭右闭的情况下，`left == right`是有意义的
+ 在判断`if(nums[middle] > target)`后`right`要赋值为`middle - 1`，因为右边的值是能取到的，故`if(nums[middle] > target)`能成立就表示当前这个`nums[middle]`一定不是`target`，所以接下来要查找右区间位置就是`right = middle - 1`
~~~java{4,6,9}
class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length-1; //数组的第一个数的下标(index)为0

        while(left <= right){
            int middle=( left + right ) /2;

            if(nums[middle] > target){right = middle - 1;}     
            
            if(nums[middle] < target){left = middle + 1;}

            if(nums[middle] == target){return middle;}
        }
        return -1;
    }
}
~~~
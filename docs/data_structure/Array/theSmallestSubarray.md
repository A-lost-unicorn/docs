---
title:  209. 长度最小的子数组
---
[[toc]]
209. 长度最小的子数组
[力扣链接](https://leetcode.cn/problems/minimum-size-subarray-sum/)

给定一个含有 `n` 个正整数的数组和一个正整数 `target` 。

找出该数组中满足其总和大于等于`target`的**长度最小**的连续子数组`[numsl, numsl+1, ...,numsr-1, numsr]`，并返回其长度。如果不存在符合条件的子数组，返回 `0` 。

> 输入：target = 7, nums = [2,3,1,2,4,3]  
输出：2  
解释：子数组 [4,3] 是该条件下的长度最小的子数组。

## 思路  

## 暴力解法
暴力解法是用两个for循环，然后不断的寻找符合条件的子序列
## 滑动窗口
窗口的**起始位置**如何移动：如果当前窗口的值大于s了，窗口就要向前移动了(也就是该缩小了)  
窗口的**结束位置**如何移动：窗口的结束位置就是遍历数组的指针，也就是for循环里的索引。
~~~java
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int left = 0;
        int sum = 0;
        int result = Integer.MAX_VALUE; //记录数组的长度最小值
        for(int right = 0 ; right < nums.length ; right++){
            sum = sum + nums[right];
            while(sum >= target){
                result = Math.min(result , right-left+1);//Math.min()返回最小值   子序列的长度为right-left+1
                sum = sum - nums[left];//如果当前窗口的值大于s了，窗口就要向前移动了（也就是该缩小了）。
                left ++; //这行和上一行👆🏻体现出滑动窗口的精髓之处，不断变更left
            }
        }
        return result == Integer.MAX_VALUE ? 0 : result;
    }
}
~~~
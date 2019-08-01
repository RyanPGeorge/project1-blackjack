BLACKJACK GAME - PROJECT 1 BY RYAN GEORGE

 variable deck (A=1 || 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, J = 10, Q = 10, K = 10 (plus suits...))
 variable DEALER []
 variable PLAYER []

 click. shuffleDeck (BUTTON) 
 dealer function - FUNCTION.DEALER - fill DEALER[] with [dcard1, dcard2] that serves two RANDOM cards to DEALER[]

 DEALER
 DEALER [dcard1, dcard2]
 if DEALER [dcard1, dcard2] <= 21, DEALER will HIT once. 
 - IF CARDS sum[1, 2, 3] >21, END GAME - PLAYER WINS
 - ELSE IF CARDS 1, 2, 3 <= 21, DEALER STAYS AND PLAYER[] is filled with [pcard1, pcard2]

 PLAYER[pcard1, pcard2] -- IF sum [pcard1, pcard2] >=21
 PLAYER 1 CAN CLICK "HIT" OR "STAY" BUTTON
 -BUTTON "HIT" - DEAL 1 MORE CARD
 
 -IF CARDS 1, 2, 3,... >21, END GAME - output "DEALER WINS"

BUTTON "STAY"
IF sum[DEALER()] < SUM[PLAYER()]
    output "PLAYER 1 WINS"

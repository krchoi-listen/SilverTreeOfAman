curl -X POST http://127.0.0.1:3333/execute/instruction \
     -H "Content-Type: application/json" \
     -d '{ "instruction": "rrmovq", "op1": "rA", "op2": "rB" }'
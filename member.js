function skillMember() {
  return {
    name: 'member',
    type: 'member',
    description: 'Member',
    fields: {
      id: {
        type: 'ID',
        description: 'Member ID',
      },
      name: {
        type: 'String',
        description: 'Member Name',
      },
      email: {
        type: 'String',
        description: 'Member Email',
      },
      phone: {
        type: 'String',
        description: 'Member Phone',
      },
      address: {
        type: 'String',
        description: 'Member Address',
      },
      skills: {
        type: '[Skill]',
        description: 'Member Skills',
        resolve: (member, args, context) => {
          return context.db.getSkillsByMemberId(member.id);
        },
      },
    },
    resolve: (root, args, context) => {
      return context.db.getMemberById(args.id);
    },
  };
}